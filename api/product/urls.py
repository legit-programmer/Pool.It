from django.urls import path
from.views import *

urlpatterns = [
    path('', index),
    path('get/',ProductView.as_view()),
    path('post/',ProductView.as_view())
]