from rest_framework import viewsets
from .serializer import PlanSerializer
from .models import Plan

# Create your views here.
class PlanView(viewsets.ModelViewSet):
    serializer_class = PlanSerializer
    queryset = Plan.objects.all()