from django.db import models

# Create your models here.

class Technology(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='technologies/', blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = 'Technologies'

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    technologies = models.ManyToManyField(Technology)
    image = models.ImageField(upload_to='projects/')
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
