from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('contact/', views.contact, name='contact'),
    path('about_us/', views.about, name='about'),
    path('my_orders/', views.my_orders, name='my_orders'),
    # path('order/<int:order_number>/', views.order_detail, name='order_detail'),
    path('iphones/', views.iphones, name='iphones'),
    path('phones/', views.Android, name='phones'),
    path('buynow/', views.buy_now, name='buynow'),
    path('laptops/', views.laptops, name='laptops'),
    path('fashion_brands/', views.dress, name='dress'),
    path('groceries/', views.grocery, name='grocery'),
    path('shoes/', views.shoes, name='shoes'), 
]
