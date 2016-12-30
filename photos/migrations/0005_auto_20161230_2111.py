# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import photos.models


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0004_photo_isprimary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='photo',
            field=models.ImageField(default=b'pic_folder/None/no-img.jpg', upload_to=photos.models.uploadAWS, blank=True),
            preserve_default=True,
        ),
    ]
