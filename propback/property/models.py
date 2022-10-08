
from random import choices
from secrets import choice
from django.db import models
from autoslug import AutoSlugField
from multiselectfield import MultiSelectField
from django.utils.timezone import timezone



# Create your models here.


TagId = (
    ('Bungalow', 'bungalow'),
    ('Duplex', 'duplex'),
    ('Mansion', 'mansion'),
    ('Lekki', 'Lekki'),
    
)

class MyTags(models.Model):
    mytags = MultiSelectField( choices=TagId, max_choices=5, max_length=255, default=None, null=False, blank=True)
    def __str__(self):
        return self.mytags
    

MyAmenities = (
("Washers and dryers", "Washers and dryers"),
("Central air conditioning","Central air conditioning" ),
("Forced air heating", "Forced air heating"),
("Balconies", "Balconies"),
("Smart-home features", "Smart-home features"),
("Wi-Fi", "Wi-Fi"),
("High-speed internet", "High-speed internet"),
("Security", "Security"),
("CCTV Camera", "CCTV Camera"),
("High-end fixtures and finishes", "High-end fixtures and finishes"),
("Renovated spaces", "Renovated spaces"),
("Open floor plans", "Open floor plans"),
("Pet-friendly spaces", "Pet-friendly spaces"),
("Stainless steel appliances", "Stainless steel appliances"),
("Closets or storage space", "Closets or storage space"),
("Large windows and natural light", "Large windows and natural light")
)





    
class Property(models.Model):
    
    frequency = (
        ("None", None),
        ("Monthly", "Monthly"),
        ("Yearly", "Yearly")
    )
    
    sectionss = (
        ("sale", "sale"),
        ("rent", "rent"),
        ("land", "land"),
    )
    
    title = models.CharField(max_length=255, blank=True)
    tags = MultiSelectField (choices=TagId, max_length=255, max_choices=5)
    description = models.TextField()
    images = models.ImageField(upload_to='images/')
    category = models.CharField(choices=sectionss, default=None, max_length=50)
    prices = models.DecimalField(max_digits=11, decimal_places=1)
    rooms = models.IntegerField()
    baths = models.IntegerField()
    rentFrequencies = models.CharField(choices=frequency, default=None, max_length=50 )
    area = models.DecimalField(max_digits=5, decimal_places=2)
    isVerify = models.BooleanField(default=False)
    agency = models.ImageField()
    myamenity = MultiSelectField(choices=MyAmenities, max_choices=20, max_length=500, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    slug = AutoSlugField(populate_from="title", unique_with='created_at__month')
   
    
    class Meta:
        ordering = ('-created_at',)
    
    def __str__(self):
        return self.title
    
class PropsImage(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='photos')
    images = models.ImageField(upload_to='images/', max_length=100,null=True)
    
    def __str__(self):
        return self.property.title
    
    
    

