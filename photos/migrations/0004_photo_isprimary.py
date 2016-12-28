# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0003_auto_20161220_1901'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='isPrimary',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
