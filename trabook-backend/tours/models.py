from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Tour(models.Model):
    city = models.CharField(max_length=200, blank=False, null=False)
    country = models.CharField(max_length=200, blank=False, null=False)
    rated = models.DecimalField(default=0, max_digits=2, decimal_places=1, validators=[ MinValueValidator(0), MaxValueValidator(5) ], blank=False, null=False)
    price = models.IntegerField(default=0, validators=[ MinValueValidator(0), MaxValueValidator(9999) ], blank=False, null=False)
    days = models.IntegerField(default=0, validators=[ MinValueValidator(0), MaxValueValidator(14) ], blank=False, null=False)
    available = models.BooleanField(default=True, blank=False, null=False)
    tour_image = models.ImageField(upload_to='tour_images', blank=True, null=True)

    def __str__(self):
        return self.city