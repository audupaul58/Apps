from django.urls import path, include
from rest_framework import routers
from .views import  PropertiesViewset, TagsViewset, PropsImageviewset
from django.conf import settings
from django.conf.urls.static import static


routers = routers.DefaultRouter()


routers.register('properties', PropertiesViewset)
routers.register('tags',TagsViewset)
routers.register('images',PropsImageviewset)


urlpatterns = [
    path('', include(routers.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)