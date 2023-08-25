from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=300, blank=False, null=False)
    author = models.CharField(max_length=100, blank=False, null=False)
    text = models.CharField(max_length=2000, blank=False, null=False)
    blog_image = models.ImageField(upload_to='blog_images', blank=True, null=True)
    published_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title