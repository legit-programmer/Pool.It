from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=50)
    img_url = models.CharField(max_length=1000)
    price = models.CharField(max_length=20)
   
