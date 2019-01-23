from rest_framework import serializers
from .models import Blogpost
from .models import Product 
from django.conf import settings
import requests

class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ('id', 'text', 'title', 'created_at', 'owner' )
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product 
        fields = ('id', 'name', 'description', 'images', 'path' )


class ContactEmailSerializer(serializers.Serializer):
    name = serializers.CharField(required=True)
    reply = serializers.EmailField(required=True)
    message = serializers.CharField(required=True)
    user = serializers.CharField(required=False, allow_blank=True)
    captcha = serializers.CharField(required=False, allow_blank=True)

    def validate(self, data):
        if data['user']:
            return data
        if data['captcha']:
            recaptcha_response = data['captcha']
            captcha_data = {
                'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
                'response': recaptcha_response
            }
            r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=captcha_data)
            result = r.json()
            if result['success']:
                return data
        raise serializers.ValidationError('Invalid ReCAPTCHA. Please try again')
