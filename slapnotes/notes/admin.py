from django.contrib import admin
from notes.models import Blogpost
# Register your models here.
admin.site.register(Blogpost)

class BlogpostAdmin(admin.ModelAdmin):
    def save_model(self, request, instance, form, change):
        instance.owner = request.user
