from django.contrib import admin
from .models import CustomUser, Admin, DirectorOfAgriculture, Farmer, FarmerRegistrationOfficer, StoreKeeper, Fertilizer, FertilizerApplication, AssignedFertilizer,  FertilizerDistribution

admin.site.register(CustomUser)
admin.site.register(Admin)
admin.site.register(DirectorOfAgriculture)
admin.site.register(Farmer)
admin.site.register(FarmerRegistrationOfficer)
admin.site.register(StoreKeeper)
admin.site.register(Fertilizer)
admin.site.register(FertilizerApplication)
admin.site.register(AssignedFertilizer)
admin.site.register(FertilizerDistribution)
