from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=50)
    img_url = models.CharField(max_length=1000)
    price = models.CharField(max_length=20)
    desc = models.TextField(max_length=500, default="lorem ipsum ksjhfkushcljknskj cnsckjslkfhj soilfjlsjcljs clksj clkj ls colisjlcj lisj clksj lk clnlsjcf ls clsj clc ls c lsljc ljldkjsfl  cslcjslkc")
    admin = models.CharField(max_length=100, default="John Smith")
    adminMail = models.CharField(max_length=50, default="example@email.com")
    
