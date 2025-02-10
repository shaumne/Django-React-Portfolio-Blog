from django.views.generic import TemplateView
from projects.models import Project

class HomeView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['projects'] = Project.objects.all()[:3]  # Son 3 proje
        return context 