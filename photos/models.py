from django.db import models
# from pygments.lexers import get_all_lexers
# from pygments.styles import get_all_styles
#
# LEXERS = [item for item in get_all_lexers() if item[1]]
# LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
# STYLE_CHOICES = sorted((item, item) for item in get_all_styles())

def uploadAWS(instance, filename):
    import os
    from django.utils.timezone import now
    filename_base, filename_ext = os.path.splitext(filename)
    return 'static/%s%s' % (
        now().strftime("%Y%m%d%H%M%S"),
        filename_ext.lower(),
        )

class Photo(models.Model):
    created = models.DateTimeField(auto_now_add=True, blank = True)
    isPrimary = models.BooleanField(default = False)
    title = models.CharField(max_length=100, blank=True, default='')
    album = models.CharField(max_length=100, blank=True, default='Main')
    comment = models.TextField(blank = True, default='')
    photo = models.ImageField(upload_to=uploadAWS, default = 'pic_folder/None/no-img.jpg', blank = True)

    class Meta:
        ordering = ('created',)
