from random import choices
from .models import Property, MyTags, PropsImage, MyAmenities, TagId
from rest_framework import serializers


class PropsImageSerializer(serializers.ModelSerializer):
     class Meta:
        model = PropsImage
        fields = ('id','property','images')
        
class MultipleImagesSerializer(serializers.ModelSerializer):
    image = serializers.ListField(
        child=serializers.ImageField()
    )


class TagsSerializer(serializers.ModelSerializer):
    #tag = serializers.StringRelatedField(many=True)
    class Meta:
        model = MyTags
        fields = ('id', 'mytags')
       
        

class PropertiesSerializer(serializers.HyperlinkedModelSerializer):
    myamenity = serializers.MultipleChoiceField(choices=MyAmenities)
    tags = serializers.MultipleChoiceField(choices=TagId)
    
    
   
    photos = PropsImageSerializer(many=True, read_only=True)
    #uploaded_images = serializers.ListField(
        #child = serializers.ImageField(max_length = 1000000, allow_empty_file = False, use_url = False),
       # write_only = True,
    #)
    
    class Meta:
        model = Property
        depth = 1
        fields = ('url',  'title', 'slug', 'description', 'images', 'category', 'rentFrequencies',
                  'prices','rooms', 'baths', 'area', 'isVerify', 'agency', 'myamenity', 'photos', 'tags')
        lookup_fields = 'slug'
        
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
        
        def create(self, validated_data):
            uploaded_data = validated_data.pop('photos')
            new_product = Property.objects.create(**validated_data)
            for uploaded_item in uploaded_data:
                PropsImage.objects.create(new_product=new_product, **uploaded_item)
            return new_product
        
        
