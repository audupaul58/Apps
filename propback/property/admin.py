from django.contrib import admin
from .models import Property, MyTags, PropsImage

# Register your models here.

admin.site.register(Property)
admin.site.register(MyTags)
admin.site.register(PropsImage)
