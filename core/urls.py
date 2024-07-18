from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApplicationCountView, ApprovedApplicationCountView, AssignedAllFertilizerViewSet, FarmViewSet, FarmerAllViewSet, FarmerCountView, FertilizerApplicationAllViewSet, TotalFertilizerAvailableCountView,  TotalFertilizerCountView, TotalFertilizerDistributionCountView, UserViewSet, farmer_detail, get_all_farmers, validate_code_view
from .views import (
    CustomUserViewSet, AdminViewSet, DirectorOfAgricultureViewSet, FarmerViewSet,
    FarmerRegistrationOfficerViewSet, StoreKeeperViewSet, FertilizerViewSet,
    FertilizerApplicationViewSet, AssignedFertilizerViewSet, 
    FertilizerDistributionViewSet, UserCountView,FarmerProfileViewSet
)
from core import views

router = DefaultRouter()
router.register(r'users', CustomUserViewSet, basename='users')
router.register(r'user', UserViewSet)
router.register(r'farm', FarmViewSet, basename='farm')
router.register(r'allfarmer', FarmerAllViewSet, basename='allfarmer')
router.register(r'admins', AdminViewSet)
router.register(r'directors', DirectorOfAgricultureViewSet)
router.register(r'farmers', FarmerViewSet)
router.register(r'farmerpro', FarmerProfileViewSet, basename='farmerpro')      
router.register(r'fro', FarmerRegistrationOfficerViewSet)
router.register(r'storekeepers', StoreKeeperViewSet)
router.register(r'fertilizers', FertilizerViewSet)
router.register(r'fertilizer-applications', FertilizerApplicationViewSet)
router.register(r'assigned-fertilizers', AssignedFertilizerViewSet)
router.register(r'fertilizer-distributions', FertilizerDistributionViewSet)
router.register(r'fertilizer-apply', FertilizerApplicationAllViewSet, basename='fertilizer-apply')
router.register(r'viewAssigned', AssignedAllFertilizerViewSet, basename='viewAssigned')


urlpatterns = [
    path('', include(router.urls)),
    path('user-count/', UserCountView.as_view(), name='user-count'),
    path('allfarm/', get_all_farmers, name='get_all_farmers'),
    path('farmers/<int:id>/', farmer_detail, name='farmer_detail'),
     path('validate_code/', validate_code_view, name='validate_code'),
     path('validate-code/<str:code>/', views.validate_code_view, name='validate_code'),
     path('farmer/count/', FarmerCountView.as_view(), name='farmer_count'),
    path('application/count/', ApplicationCountView.as_view(), name='application_count'),
    path('application/approved/count/', ApprovedApplicationCountView.as_view(), name='approved_application_count'),
    path('fertilizer/quantity/', TotalFertilizerCountView.as_view(), name='total_fertilizer_quantity'),
    path('fertilizer/quantity/distributed/total/', TotalFertilizerDistributionCountView.as_view(), name='total_fertilizer_distribution_count'),
   path('fertilizer/quantity/available/', TotalFertilizerAvailableCountView.as_view(), name='fertilizer_available_quantity'),
]
