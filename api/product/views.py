from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from rest_framework import status
from django.http import request, HttpResponse

def index(request):
    return HttpResponse("Serving my loyalty to Legit🔨...")


class ProductView(APIView):

    serializer_class = ProductSerializer

    def get(self, request):
        detail = [{"name": detail.name, "img_url": detail.img_url, "price": detail.price, "pid": detail.id, "desc": detail.desc, "admin": detail.admin, "mail": detail.adminMail}
                  for detail in Product.objects.all()]

        return Response(detail)

    def post(self, request):

        serializer = ProductSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
