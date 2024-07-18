# core/utils.py

from django.core.exceptions import ValidationError
from .models import CustomUser

def get_or_create_user(user_data):
    try:
        user = CustomUser.objects.get(username=user_data['username'])
        # Update existing user details
        for key, value in user_data.items():
            setattr(user, key, value)
        user.save()
    except CustomUser.DoesNotExist:
        user = CustomUser.objects.create_user(**user_data)
    return user
