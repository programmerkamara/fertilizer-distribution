from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.exceptions import ValidationError

class CustomUser(AbstractUser):
    USER_TYPE_CHOICES = (
        (1, "Admin"),
        (2, "DirectorOfAgriculture"),
        (3, "Farmer"),
        (4, "FarmerRegistrationOfficer"),
        (5, "StoreKeeper"),
    )

    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=1)

    def __str__(self):
        return self.username

class Admin(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class DirectorOfAgriculture(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Farmer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    farmer_type = models.CharField(max_length=20, choices=[('Individual', 'Individual'), ('CBO', 'CBO'), ('NGO', 'NGO')])
    phone = models.CharField(max_length=15)
    address = models.TextField()
    contact_details = models.TextField()
    farm_details = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.farmer_type}"

class FarmerRegistrationOfficer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class StoreKeeper(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.user.username

class Fertilizer(models.Model):
    FERTILIZER_TYPE_CHOICES = [
        ('NPK:20:20', 'NPK:20:20'),
        ('NPK:24:25', 'NPK:24:25'),
        ('NPK:50:50', 'NPK:50:50'),
    ]

    fertilizer_type = models.CharField(max_length=20, choices=FERTILIZER_TYPE_CHOICES)
    added_by = models.ForeignKey(StoreKeeper, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.fertilizer_type}"

class FertilizerApplication(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    fertilizer = models.ForeignKey(Fertilizer, on_delete=models.CASCADE)
    quantity_needed = models.PositiveIntegerField()
    status = models.CharField(max_length=50, choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Rejected', 'Rejected')], default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.farmer.user.username} - {self.fertilizer.fertilizer_type} - {self.status}"

class AssignedFertilizer(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    fertilizer_application = models.ForeignKey(FertilizerApplication, on_delete=models.CASCADE)
    quantity_assigned = models.IntegerField()
    unique_code = models.CharField(max_length=100, unique=True)
    assigned_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.farmer.user.username} - {self.quantity_assigned} - {self.unique_code}"

    @staticmethod
    def validate_code(code):
        try:
            assigned_fertilizer = AssignedFertilizer.objects.get(unique_code=code)
            return {
                "farmer_name": assigned_fertilizer.farmer.user.username,
                "farmer_type": assigned_fertilizer.farmer.farmer_type,
                "quantity_assigned": assigned_fertilizer.quantity_assigned,
                "fertilizer_type": assigned_fertilizer.fertilizer_application.fertilizer.fertilizer_type
            }
        except AssignedFertilizer.DoesNotExist:
            raise ValidationError("Invalid code")

class FertilizerDistribution(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    fertilizer_type = models.CharField(max_length=20, choices=Fertilizer.FERTILIZER_TYPE_CHOICES)
    quantity = models.IntegerField()
    distributed_by = models.ForeignKey(StoreKeeper, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    validation_code = models.CharField(max_length=50, unique=True)  

    def __str__(self):
        return f"{self.fertilizer_type} - {self.quantity} kg distributed to {self.farmer.user.username}"

@receiver(post_save, sender=CustomUser)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        if instance.user_type == 1:
            Admin.objects.create(user=instance)
        elif instance.user_type == 2:
            DirectorOfAgriculture.objects.create(user=instance)
        elif instance.user_type == 3:
            Farmer.objects.create(user=instance)
        elif instance.user_type == 4:
            FarmerRegistrationOfficer.objects.create(user=instance)
        elif instance.user_type == 5:
            StoreKeeper.objects.create(user=instance)
    else:
        if instance.user_type == 1:
            instance.admin.save()
        elif instance.user_type == 2:
            instance.directorofagriculture.save()
        elif instance.user_type == 3:
            instance.farmer.save()
        elif instance.user_type == 4:
            instance.farmerregistrationofficer.save()
        elif instance.user_type == 5:
            instance.storekeeper.save()
