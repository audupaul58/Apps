from django import forms
from django.forms import ModelForm
from .models import PropsImage, Property


class PropertyForm(ModelForm):
    
    class Meta:
        model = Property
        exclude = ('properties')
        
class PropsImage(ModelForm):
    
    class Meta:
        model = PropsImage
        fields = ['images']