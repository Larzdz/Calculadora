from django.urls import path
from . import views

urlpatterns = [
    path('calculate/', views.CalculatorView.as_view(), name='calculate'),
]