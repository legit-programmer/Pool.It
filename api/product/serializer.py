from rest_framework import serializers
from . models import *

class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = ['id', 'name', 'img_url', 'price', 'desc', 'admin', 'adminMail']
