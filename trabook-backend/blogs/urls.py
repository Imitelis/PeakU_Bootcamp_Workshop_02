from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from blogs import views

# App configuration
app_name = 'blogs'

# Router
router = routers.DefaultRouter()
router.register(r'blogs', views.BlogView, basename='blogs')

# Api and docs
urlpatterns = [
    path("api/", include(router.urls)),
    path("docs/blogs/", include_docs_urls(title = "Blog API"))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)