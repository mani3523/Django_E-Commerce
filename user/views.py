from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.contrib import messages
from django.contrib.auth import logout

def register(request):
    if request.method == "POST":
        # Get form data from POST request
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        user_name = request.POST.get("user_name") 
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")
        terms = request.POST.get("terms")

        # Validate form data
        if not terms:
            messages.error(request, "You must accept the Terms of Use & Privacy Policy.")
            return render(request, "register.html")

        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
            return render(request, "register.html")

        if User.objects.filter(email=email).exists():
            messages.error(request, "A user with that email already exists.")
            return render(request, "register.html")
        
       
        if User.objects.filter(username=user_name).exists():
            messages.error(request, "A user with that username already exists.")
            return render(request, "register.html")

        # Create the user
        user = User.objects.create_user(
            username=user_name,
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            password=password,
        )

        # Log in the new user and redirect to a success page
        login(request, user)
        messages.success(request, "Registration successful. Please login with your username and password.")
        return redirect("login")  # Redirect to login page after registration

    # Render the registration form if it's a GET request
    return render(request, "register.html")

def custom_logout(request):
    logout(request)
    messages.success(request, "You have been logged out successfully.")
    return render(request, 'logout.html')  # Displays a logout message
