from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *

class ProductView(APIView):
	
	serializer_class = ProductSerializer

	def get(self, request):
		detail = [ {"name": detail.name,"img_url": detail.img_url, "price":detail.price}
		for detail in Product.objects.all()]
		return Response(detail)

	def post(self, request):

		serializer = ProductSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			return Response(serializer.data)
