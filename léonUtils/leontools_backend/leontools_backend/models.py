from django.utils import timezone

from django.db import models


class User(models.Model):
    google_id = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    role = models.CharField(max_length=255, default="user")
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.google_id


class Session(models.Model):
    session_id = models.CharField(max_length=255, unique=True)
    google_id = models.EmailField()
    ip_address = models.CharField(max_length=255)
    user_agent = models.CharField(max_length=1000)
    creation_date = models.DateTimeField(default=timezone.now)


class Notification(models.Model):
    publisher_google_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    content = models.CharField(max_length=2500)
    publish_date = models.DateTimeField(default=timezone.now)
    receivers_google_ids = models.CharField(max_length=600)

    def __str__(self):
        return self.title


class Request(models.Model):
    generated_id = models.CharField(max_length=255, unique=True)
    publish_date = models.DateTimeField(default=timezone.now)
    room = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    monitors_google_id = models.CharField(max_length=6000)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.generated_id


