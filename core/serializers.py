from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.hashers import check_password
from .models import CustomUser, Admin, DirectorOfAgriculture, Farmer, FarmerRegistrationOfficer, StoreKeeper, Fertilizer, FertilizerApplication, AssignedFertilizer,FertilizerDistribution

User = get_user_model()
User1 = get_user_model()
class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'first_name', 'last_name', 'email', 'user_type', 'is_staff', 'is_active']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
        instance.save()
        return instance

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class DirectorOfAgricultureSerializer(serializers.ModelSerializer):
    class Meta:
        model = DirectorOfAgriculture
        fields = '__all__'

class FarmerupSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    class Meta:
        model = Farmer
        fields = '__all__'

class FarmerSerializer(serializers.ModelSerializer):
    user=CustomUserSerializer()
    class Meta:
        model = Farmer
        fields = '__all__'

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = CustomUserSerializer.create(CustomUserSerializer(), validated_data=user_data)
        
        # Check if a farmer with the given user already exists
        if Farmer.objects.filter(user=user).exists():
            raise serializers.ValidationError("A farmer with this user already exists.")

        farmer = Farmer.objects.create(user=user, **validated_data)
        return farmer
    
    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', {})  # Remove user data from validated_data
        user_instance = instance.user  # Get the user instance related to the farmer

        # Update fields of user instance
        user_instance.username = user_data.get('username', user_instance.username)
        user_instance.first_name = user_data.get('first_name', user_instance.first_name)
        user_instance.last_name = user_data.get('last_name', user_instance.last_name)
        user_instance.email = user_data.get('email', user_instance.email)
        password = user_data.get('password')
        if password:
            user_instance.set_password(password)  # Set password if provided

        user_instance.save()  # Save user instance

        # Update fields of farmer instance
        instance.farmer_type = validated_data.get('farmer_type', instance.farmer_type)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.address = validated_data.get('address', instance.address)
        instance.contact_details = validated_data.get('contact_details', instance.contact_details)
        instance.farm_details = validated_data.get('farm_details', instance.farm_details)

        instance.save()  # Save farmer instance

        return instance

class FarmerRegistrationOfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerRegistrationOfficer
        fields = '__all__'

class StoreKeeperSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = StoreKeeper
        fields = '__all__'

class FertilizerSerializer(serializers.ModelSerializer):
    added_by = serializers.PrimaryKeyRelatedField(queryset=StoreKeeper.objects.all())

    class Meta:
        model = Fertilizer
        fields = '__all__'

    def create(self, validated_data):
        added_by = validated_data.pop('added_by')
        fertilizer = Fertilizer.objects.create(added_by=added_by, **validated_data)
        return fertilizer
class FertilizerApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FertilizerApplication
        fields = '__all__'

class AssignedFertilizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssignedFertilizer
        fields = '__all__'
class FertilizerDistributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FertilizerDistribution
        fields = '__all__'
class FertilizerApplicationAllSerializer(serializers.ModelSerializer):
    farmer = FarmerSerializer()
    fertilizer = FertilizerSerializer()

    class Meta:
        model = FertilizerApplication
        fields = ['id', 'farmer', 'fertilizer', 'quantity_needed', 'status', 'created_at', 'updated_at']

class AssignedAllFertilizerSerializer(serializers.ModelSerializer):
    farmer = FarmerSerializer()
    fertilizer_application = FertilizerApplicationSerializer()
    class Meta:
        model = AssignedFertilizer
        fields = '__all__'