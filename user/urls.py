from django.urls import path
from user import views
from django.contrib.auth import views as auth_views
from .views import custom_logout

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login',auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', custom_logout, name='logout'),
]
