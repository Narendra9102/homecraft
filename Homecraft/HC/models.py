from django.db import models
from django.contrib.auth.models import User

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='customer')
    u_name = models.CharField(max_length=100)
    p_number = models.CharField(max_length=15)
    emailid = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.u_name
