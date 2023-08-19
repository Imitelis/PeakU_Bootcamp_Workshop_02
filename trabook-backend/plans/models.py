from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Plan(models.Model):
    city = models.CharField(max_length=200, blank=False, null=False)
    country = models.CharField(max_length=200, blank=False, null=False)
    rated = models.DecimalField(default=0, max_digits=2, decimal_places=1, validators=[ MinValueValidator(0), MaxValueValidator(5) ], blank=False, null=False)
    price = models.IntegerField(default=0, validators=[ MinValueValidator(0), MaxValueValidator(9999) ], blank=False, null=False)
    discount = models.IntegerField(default=models.F('price'), validators=[MinValueValidator(0), MaxValueValidator(9999) ], blank=False, null=False)
    description = models.CharField(max_length=1200, blank=False, null=False)
    available = models.BooleanField(default=True, blank=False, null=False)
    plan_image = models.ImageField(upload_to='plan_images', blank=True, null=True)

    def __str__(self):
        return self.city