"""
  config.py

  Configuration for Flask app

  Important: Keys are in the secret_keys.py module, 
             which should be kept out of version control.
"""

import os

from etherous import app
from secret_keys import CSRF_SECRET_KEY, SESSION_KEY

# Auto-set debug mode based on App Engine dev environ
if 'SERVER_SOFTWARE' in os.environ and os.environ['SERVER_SOFTWARE'].startswith('Dev'):
  DEBUG = True
  COMPASS_CONFIGS = [os.path.join(app.root_path, 'config/compass/config.rb')]
  COMPASS_SKIP_MTIME_CHECK = True
else:
  DEBUG = False

# Set secret keys for CSRF protection
SECRET_KEY = CSRF_SECRET_KEY
CSRF_SESSION_KEY = SESSION_KEY

CSRF_ENABLED = True
