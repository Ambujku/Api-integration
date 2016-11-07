from django.conf.urls import url

from . import views

urlpatterns = [
    # ex: /
    url(r'^$', views.response, name='response'),
    url(r'^login/$', views.login, name='login'),
	url(r'^update/$', views.update, name='update'),
	url(r'^upload/$', views.kyc, name='kyc'),
	url(r'^goal/$', views.goal, name='goal'),
	url(r'^success/$', views.success, name='success'),
	url(r'^error/$', views.error, name='error'),
	url(r'^kyc/$', views.kyc, name='kyc'),
	url(r'^dashboard/$', views.db, name='db'),
    url(r'^resp/$', views.gl, name='gl'),
    ]