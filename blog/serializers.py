from rest_framework import serializers
from .models import Post, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']

class PostSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    author = serializers.StringRelatedField()
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'slug', 'content', 'image', 
                 'author', 'categories', 'created_at'] 