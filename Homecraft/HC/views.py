from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.decorators import login_required
from .models import Customer

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

        Customer.objects.create(user=user, u_name=u_name, p_number=p_number, emailid=emailid, password=make_password(password))

        messages.success(request, 'Account created successfully.')
        return redirect('login')

    return render(request, 'register.html')


def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request, username=email, password=password)

        if user is not None:
            auth_login(request, user)
            messages.success(request, 'Logged in successfully.')
            return redirect('index')
        else:
            messages.error(request, 'Invalid email or password.')

    return render(request, 'login.html')
