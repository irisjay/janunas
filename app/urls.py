from django.conf.urls import url
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    url (r'^$', views.app, name = "app"),
    url (r'^(.+)$', views.static, name = "static")
]