from django.shortcuts import render
from rest_framework import viewsets
from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.views.generic import ListView, DetailView

# Create your views here.

# API Views
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(is_published=True)
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'

# Template Views
class BlogListView(ListView):
    model = Post
    template_name = 'blog/post_list.html'
    context_object_name = 'posts'
    queryset = Post.objects.filter(is_published=True)

class BlogDetailView(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'
    context_object_name = 'post'
    slug_url_kwarg = 'slug'
