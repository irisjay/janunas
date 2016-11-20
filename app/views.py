from django.shortcuts import render, HttpResponse, render_to_response, loader

def index(request):
	template = loader.get_template('templates/index.html')
	return HttpResponse(template.render())