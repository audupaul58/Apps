from django.shortcuts import render
from .serializers import  (TagsSerializer , PropertiesSerializer, 
                           PropsImageSerializer, MultipleImagesSerializer)
from .models import  Property, MyTags, PropsImage
from rest_framework import viewsets, permissions
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.
    
class PropertiesViewset(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertiesSerializer
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = [ 'category' ]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    
class TagsViewset(viewsets.ModelViewSet):
    queryset = MyTags.objects.all()
    serializer_class = TagsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    
class PropsImageviewset(viewsets.ModelViewSet):
    queryset = PropsImage.objects.all()
    serializer_class  = PropsImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
  
        



    
   
        

