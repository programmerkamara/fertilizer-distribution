import json
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import login, logout, authenticate
from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view,permission_classes
from .models import (
    CustomUser, Admin, DirectorOfAgriculture, Farmer, FarmerRegistrationOfficer, 
    StoreKeeper, Fertilizer, FertilizerApplication, AssignedFertilizer, 
    FertilizerDistribution
)
from .serializers import (
    AssignedAllFertilizerSerializer, CustomUserSerializer, AdminSerializer, DirectorOfAgricultureSerializer, 
    FarmerSerializer, FarmerRegistrationOfficerSerializer, FertilizerApplicationAllSerializer, StoreKeeperSerializer, 
    FertilizerSerializer, FertilizerApplicationSerializer, AssignedFertilizerSerializer, 
     FertilizerDistributionSerializer,FarmerupSerializer
)
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from .serializers import CustomUserSerializer
from core import models
User = get_user_model()
class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.user_type == 1:  # Assuming 1 is the user_type for Admin
            return CustomUser.objects.all()
        return CustomUser.objects.filter(id=user.id)
    
    def list(self, request, *args, **kwargs):
        self.permission_classes = [AllowAny]  
        queryset = self.filter_queryset(self.get_queryset().exclude(user_type=3))  
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            serializer = self.get_serializer(user)
            return Response(serializer.data)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def logout(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(self.get_serializer(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['put', 'patch'])
    def update_profile(self, request, pk=None):
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def user_count(self, request):
        non_farmer_users = CustomUser.objects.exclude(user_type=3).count()  # Assuming 3 is the user_type for farmers
        return Response({'user_count': non_farmer_users}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['put', 'patch'])
    def update_user(self, request, pk=None):
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['delete'])
    def delete_user(self, request, pk=None):
        user = self.get_object()
        user.delete()
        return Response({'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(self.get_serializer(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny] 

class FarmViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return User.objects.filter(user_type=3)

class AdminViewSet(viewsets.ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
    permission_classes = [IsAuthenticated]

class DirectorOfAgricultureViewSet(viewsets.ModelViewSet):
    queryset = DirectorOfAgriculture.objects.all()
    serializer_class = DirectorOfAgricultureSerializer
    permission_classes = [IsAuthenticated]

class FarmerViewSet(viewsets.ModelViewSet):
    queryset = Farmer.objects.select_related('user').all()
    serializer_class = FarmerSerializer
    permission_classes = [AllowAny]
class FarmerProfileViewSet(viewsets.ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerupSerializer
    permission_classes = [AllowAny]
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)
class FarmerAllViewSet(viewsets.ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer
    permission_classes = [AllowAny]

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_farmers(request):
    farmers = Farmer.objects.select_related('user').all()
    serializer = FarmerSerializer(farmers, many=True)
    permission_classes = [AllowAny]
    return Response(serializer.data)
    
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])  # Replace with appropriate permissions
def farmer_detail(request, id):
    try:
        farmer = Farmer.objects.select_related('user').get(user__id=id)
    except Farmer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FarmerSerializer(farmer)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FarmerSerializer(farmer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        farmer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT'])
@permission_classes([AllowAny])  # Allow access without authentication
def user_detail(request, pk):
    try:
        user = CustomUser.objects.get(pk=pk)
    except CustomUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CustomUserSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CustomUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FarmerRegistrationOfficerViewSet(viewsets.ModelViewSet):
    queryset = FarmerRegistrationOfficer.objects.all()
    serializer_class = FarmerRegistrationOfficerSerializer
    permission_classes = [IsAuthenticated]

class StoreKeeperViewSet(viewsets.ModelViewSet):
    queryset = StoreKeeper.objects.all()
    serializer_class = StoreKeeperSerializer
    permission_classes = [AllowAny]

class FertilizerViewSet(viewsets.ModelViewSet):
    queryset = Fertilizer.objects.all()
    serializer_class = FertilizerSerializer
    permission_classes = [AllowAny]
    
class FertilizerApplicationAllViewSet(viewsets.ModelViewSet):
    queryset = FertilizerApplication.objects.all()
    serializer_class = FertilizerApplicationAllSerializer
    permission_classes = [AllowAny]  

class FertilizerApplicationViewSet(viewsets.ModelViewSet):
    queryset = FertilizerApplication.objects.all()
    serializer_class = FertilizerApplicationSerializer
    permission_classes = [AllowAny]  
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class AssignedFertilizerViewSet(viewsets.ModelViewSet):
    queryset = AssignedFertilizer.objects.all()
    serializer_class = AssignedFertilizerSerializer
    permission_classes = [AllowAny]

def validate_code_view(request, code):
    try:
        assigned_fertilizer = AssignedFertilizer.objects.get(unique_code=code)
        data = {
            "farmer_name": assigned_fertilizer.farmer.user.username,
            "farmer_type": assigned_fertilizer.farmer.farmer_type,
            "quantity_assigned": assigned_fertilizer.quantity_assigned,
            "fertilizer_type": assigned_fertilizer.fertilizer_application.fertilizer.fertilizer_type
        }
        return JsonResponse(data)
    except AssignedFertilizer.DoesNotExist:
        raise ValidationError("Invalid code")
    
class FertilizerDistributionViewSet(viewsets.ModelViewSet):
    queryset = FertilizerDistribution.objects.all()
    serializer_class = FertilizerDistributionSerializer
    permission_classes = [AllowAny]

from django.http import JsonResponse
from django.views import View
from django.contrib.auth import get_user_model

class UserCountView(View):
    def get(self, request, *args, **kwargs):
        CustomUser = get_user_model()
        user_count = CustomUser.objects.exclude(user_type=3).count()
        return JsonResponse({'user_count': user_count})
class FarmerCountView(View):
    def get(self, request, *args, **kwargs):
        farmer_count = Farmer.objects.count()
        return JsonResponse({'farmer_count': farmer_count})

class ApplicationCountView(View):
    def get(self, request, *args, **kwargs):
        application_count = FertilizerApplication.objects.count()
        return JsonResponse({'application_count': application_count})
class ApprovedApplicationCountView(View):
    def get(self, request, *args, **kwargs):
        approved_application_count = FertilizerApplication.objects.filter(status='approved').count()
        return JsonResponse({'approved_application_count': approved_application_count})
    
class TotalFertilizerCountView(View):
    def get(self, request, *args, **kwargs):
        fertilizers = Fertilizer.objects.all()
        total_quantity = 0

        for fertilizer in fertilizers:
            try:
                total_quantity += int(fertilizer.quantity)
            except ValueError:
                continue  

        return JsonResponse({'total_fertilizer_quantity': total_quantity})
    
class TotalFertilizerDistributionCountView(View):
    def get(self, request, *args, **kwargs):
        distributions = FertilizerDistribution.objects.all()
        total_distributed_quantity = 0

        for distribution in distributions:
            try:
                total_distributed_quantity += int(distribution.quantity)
            except ValueError:
                continue  

        return JsonResponse({'total_distributed_quantity': total_distributed_quantity})
    
class TotalFertilizerAvailableCountView(View):
    def get(self, request, *args, **kwargs):
      
        total_fertilizer_response = TotalFertilizerCountView().get(request)
        total_fertilizer_quantity = total_fertilizer_response.content.decode('utf-8')
        total_fertilizer_quantity = json.loads(total_fertilizer_quantity)['total_fertilizer_quantity']
        total_distributed_response = TotalFertilizerDistributionCountView().get(request)
        total_distributed_quantity = total_distributed_response.content.decode('utf-8')
        total_distributed_quantity = json.loads(total_distributed_quantity)['total_distributed_quantity']
        fertilizer_available_quantity = int(total_fertilizer_quantity) - int(total_distributed_quantity)

        return JsonResponse({'fertilizer_available_quantity': fertilizer_available_quantity})
    
class AssignedAllFertilizerViewSet(viewsets.ModelViewSet):
    queryset = AssignedFertilizer.objects.all()
    serializer_class = AssignedAllFertilizerSerializer
    permission_classes = [AllowAny]