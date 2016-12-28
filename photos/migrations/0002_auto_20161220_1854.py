# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='code',
        ),
        migrations.RemoveField(
            model_name='photo',
            name='language',
        ),
        migrations.RemoveField(
            model_name='photo',
            name='linenos',
        ),
        migrations.RemoveField(
            model_name='photo',
            name='style',
        ),
        migrations.AddField(
            model_name='photo',
            name='album',
            field=models.CharField(default=b'Main', max_length=100, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='photo',
            name='comment',
            field=models.TextField(default=b'', blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='photo',
            name='photo',
            field=models.ImageField(default=b'pic_folder/None/no-img.jpg', upload_to=b'static', blank=True),
            preserve_default=True,
        ),
    ]
