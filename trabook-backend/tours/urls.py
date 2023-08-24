from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tours import views

# App configuration
app_name = 'tours'

# Router
router = routers.DefaultRouter()
router.register(r'tours', views.TourView, basename='tours')

# Api and docs
urlpatterns = [
    path("api/", include(router.urls)),
    path("docs/tours/", include_docs_urls(title = "Tour API"))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)