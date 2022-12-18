from rest_framework import serializers
from .models import User, Session, Notification, Request


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'google_id', 'role', 'first_name', 'last_name', 'verified']


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['id', 'session_id', 'google_id', 'ip_address', 'user_agent', 'creation_date']


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'publisher_google_id', 'title', 'content', 'publish_date', 'receivers_google_ids']


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ['id', 'generated_id', 'publish_date', 'room', 'type', 'description', 'monitors_google_id', 'done']
