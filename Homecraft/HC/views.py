from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from .models import Customer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from rest_framework import status

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def register(request):
    if request.method == 'POST':
        u_name = request.POST['u_name']
        emailid = request.POST['emailid']
        p_number = request.POST['p_number']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password != confirm_password:
            messages.error(request, 'Passwords do not match.')
            return render(request, 'register.html')

        if User.objects.filter(username=u_name).exists():
            messages.error(request, 'Username already exists.')
            return render(request, 'register.html')

        if User.objects.filter(email=emailid).exists():
            messages.error(request, 'Email already in use.')
            return render(request, 'register.html')

        user = User.objects.create_user(username=u_name, email=emailid, password=password)
        Customer.objects.create(user=user, u_name=u_name, p_number=p_number, emailid=emailid)

        messages.success(request, 'Account created successfully.')
        return redirect('http://localhost:3000/login')

    return render(request, 'register.html')


@api_view(['POST'])
def login_view(request):

    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': {
                    'uname': user.username,
                    'email': user.email,
                    'phone_no': user.customer.p_number,
                }
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
