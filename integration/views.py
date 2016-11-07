from django.shortcuts import render, HttpResponse
from django.http import HttpResponseRedirect

from .forms import NameForm
import json
import requests


def update(request):
	return render(request, 'html3.html')

def response(request):
    return render(request, 'html2.html')

def login(request):
    return render(request, 'login.html')

def kyc(request):
    return render(request, 'upload.html')

def success(request):
    return render(request, 'success.html')

def goal(request):
    return render(request, 'html4.html')

def error(request):
    return render(request, 'error.html')

def db(request):
    return render(request, 'dashboard.html')

def gl(request):
    return render(request, 'goal.html')