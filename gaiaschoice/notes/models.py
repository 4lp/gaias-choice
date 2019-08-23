from django.db import models
from django.contrib.auth.models import User
from tinymce.models import HTMLField

class BlogCategory(models.Model):
    name = models.CharField(max_length=255, default='')
 
    def __str__(self):
        return self.name

class Blogpost(models.Model):
    title = models.CharField(max_length=255, default='')
    text = HTMLField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, models.SET_NULL, blank=True, null=True)
    categories = models.ManyToManyField(BlogCategory)
    permalink = models.CharField(max_length=255, default='')
    
    def __str__(self):
        return self.title

class Product(models.Model):
    name = models.CharField(max_length=255, default='')
    path = models.CharField(max_length=255, default='')
    description = HTMLField()
    shop_path = models.CharField(max_length=255, default='')
    images = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, models.SET_NULL, blank=True, null=True)
    is_discounted = models.BooleanField(default=False)
    discount_amount = models.CharField(max_length=255, default='')
    reviews = models.TextField(default='')
    
    def __str__(self):
        return self.name

class CarouselImage(models.Model):
    name = models.CharField(max_length=255, default='')
    image = models.TextField()
 
    def __str__(self):
        return self.name
