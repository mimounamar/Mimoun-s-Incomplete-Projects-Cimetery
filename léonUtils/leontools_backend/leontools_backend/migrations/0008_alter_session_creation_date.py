# Generated by Django 4.0.5 on 2022-06-28 18:58

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('leontools_backend', '0007_alter_session_creation_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='creation_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 6, 28, 18, 58, 7, 888601, tzinfo=utc)),
        ),
    ]
