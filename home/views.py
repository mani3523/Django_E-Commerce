from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Product, Order
from django.http import JsonResponse
import json
from django.conf import settings
import razorpay
# Create your views here.


def index(request):
    return render(request, 'index.html', {})

@login_required(login_url="/account/login")
def buy_now(request):
    # Initialize Razorpay client with test credentials
    client = razorpay.Client(auth=(settings.RAZORPAY_API_KEY, settings.RAZORPAY_API_SECRET))

    # Set amount in paise (e.g., 50000 paise = ₹500)
    amount = 50000

    # Create a Razorpay order for test purpose
    razorpay_order = client.order.create({
        "amount": amount,
        "currency": "INR",
        "payment_capture": "1"  # Auto-capture on success
    })

    # Pass test order details to template
    context = {
        'razorpay_order_id': razorpay_order['id'],
        'razorpay_key': settings.RAZORPAY_API_KEY,  # Test API Key
        'amount': amount,
    }

    return render(request, 'buynow.html', context)

@login_required(login_url="/account/login")
def iphones(request):
    iphones = Product.objects.filter(category='iPhone')
    return render(request, 'iphones.html', {'products': iphones})

@login_required(login_url="/account/login")
def Android(request):
    Android = Product.objects.filter(category='Android')
    return render(request, 'phones.html', {'products': Android})

@login_required(login_url="/account/login")
def laptops(request):
    laptop = Product.objects.filter(category='laptop')
    return render(request, 'laptops.html', {'products': laptop})

@login_required(login_url="/account/login")
def dress(request):
    dress = Product.objects.filter(category='dress')
    return render(request, 'dresses.html', {'products': dress})

@login_required(login_url="/account/login")
def grocery(request):
    grocery = Product.objects.filter(category='grocery')
    return render(request, 'grocery.html', {'products': grocery})

@login_required(login_url="/account/login")
def shoes(request):
    shoes = Product.objects.filter(category='shoes')
    return render(request, 'shoes.html', {'products': shoes})


@login_required(login_url="/account/login")
def contact(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            full_name = data.get('fullName')
            email = data.get('email')
            message = data.get('message')
            
            return JsonResponse({'status': 'success', 'message': 'Message sent successfully!'})
        
        except json.JSONDecodeError:
            
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON format'}, status=400)
    
   
    return render(request, 'contact.html', {})

@login_required(login_url="/account/login")
def about(request):
    return render(request, 'about.html', {})

@login_required(login_url="/account/login")
def home(request):
    return render(request, 'home.html', {})

@login_required(login_url="/account/login")
def my_orders(request):
    # Fetch orders for the logged-in user
    orders = Order.objects.filter(user=request.user).prefetch_related('items')
    return render(request, 'orders.html', {'orders': orders})