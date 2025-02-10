from django.shortcuts import render
from rest_framework import viewsets
from .models import Project, Technology
from .serializers import ProjectSerializer, TechnologySerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.views.generic import ListView, DetailView

# Create your views here.

# API Views
class TechnologyViewSet(viewsets.ModelViewSet):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'

# Template Views
class ProjectListView(ListView):
    model = Project
    template_name = 'projects/project_list.html'
    context_object_name = 'projects'

class ProjectDetailView(DetailView):
    model = Project
    template_name = 'projects/project_detail.html'
    context_object_name = 'project'
    slug_url_kwarg = 'slug'
