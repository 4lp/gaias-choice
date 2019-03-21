from .models import Blogpost 
from .models import BlogCategory 
from .models import Product 
from .models import CarouselImage
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django import forms
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from django_filters import rest_framework
from .serializers import (BlogpostSerializer, ContactEmailSerializer, ProductSerializer,
        CarouselImageSerializer, BlogCategorySerializer)

class BlogCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = BlogCategorySerializer
    queryset = BlogCategory.objects.all()

class BlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.all().order_by('-created_at')
    filter_backends = (rest_framework.DjangoFilterBackend,)
    filter_fields = ('categories','permalink')
    pagination_class = PageNumberPagination

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class CarouselImageViewSet(viewsets.ModelViewSet):
    serializer_class = CarouselImageSerializer
    queryset = CarouselImage.objects.all()

class ContactEmailAPI(generics.GenericAPIView):
    serializer_class = ContactEmailSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        name = serializer.validated_data['name']
        email = serializer.validated_data['reply']
        message = serializer.validated_data['message']
        phone = serializer.validated_data['phone']
        zip_code = serializer.validated_data['zip_code']
        email_text = "You received a message from {name} at {email}, with the phone number {phone} and the zip code {zip_code}: {message}".format(
                name=name, email=email, message=message, phone=phone, zip_code=zip_code)
        send_mail("Contact email from Slapnote", email_text, getattr(settings, 'DEFAULT_FROM_EMAIL'), [getattr(settings, 'DEFAULT_FROM_EMAIL')])
        return Response(serializer.data)
