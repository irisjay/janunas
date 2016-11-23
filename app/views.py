from django.shortcuts import render, HttpResponse, render_to_response, loader
from django.http.response import *
import magic
import os

mime = magic.Magic(mime=True, uncompress=True)

def static(request, filename):
	filename = 'templates/static/' + filename
	filename = os.path.join(os.path.dirname(__file__), filename)
	try:
	    with open(os.path.join(os.path.dirname(__file__), filename), "rb") as f:
	        return HttpResponse(f.read(), content_type=mime.from_file(filename))
	except IOError:
	    return HttpResponseNotFound()
	    