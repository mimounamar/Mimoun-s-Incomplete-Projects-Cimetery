from django.contrib import admin
from .models import User, Session, Notification, Request

admin.site.register(User)
admin.site.register(Session)
admin.site.register(Notification)
admin.site.register(Request)
