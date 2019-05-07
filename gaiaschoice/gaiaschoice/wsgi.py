"""
WSGI config for gaiaschoice project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/
"""
import os, sys

from django.core.wsgi import get_wsgi_application

sys.path.append('/var/www/gaias-choice/gaiaschoice/bin/python') 
sys.path.append('/var/www/gaias-choice/gaiaschoice/lib/python3.4/site-packages') 
sys.path.append('/var/www/gaias-choice/gaiaschoice/') 
sys.path.append('/var/www/gaias-choice/gaiaschoice/gaiaschoice/')

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "gaiaschoice.production_settings")

application = get_wsgi_application()
