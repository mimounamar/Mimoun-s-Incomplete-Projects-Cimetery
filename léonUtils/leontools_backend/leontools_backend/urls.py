"""leontools_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from leontools_backend import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', views.users_list),
    path('api/users/<str:google_id>', views.user_details),
    path('api/sessions/', views.sessions_list),
    path('api/sessions/<str:session_id>', views.session_details),
    path('api/notifications/<str:recipient_google_id>/<int:page>', views.notifications_list),
    path('api/requests/<str:monitors_google_id>/<int:page>', views.requests_list)
]
