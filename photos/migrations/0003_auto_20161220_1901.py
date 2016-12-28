# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0002_auto_20161220_1854'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='photo',
            field=models.ImageField(default=b'pic_folder/None/no-img.jpg', upload_to=b'static/photos', blank=True),
            preserve_default=True,
        ),
    ]
