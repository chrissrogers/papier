"""
  config module

  Configuration for Flask app

  Important: Keys are in the secret_keys.py module, 
             which should be kept out of version control.
"""

import os

from secret_keys import CSRF_SECRET_KEY, SESSION_KEY

# Set secret keys for CSRF protection
SECRET_KEY = CSRF_SECRET_KEY
CSRF_SESSION_KEY = SESSION_KEY

CSRF_ENABLED = True

# Local development
if 'SERVER_SOFTWARE' in os.environ and os.environ['SERVER_SOFTWARE'].startswith('Dev'):
  DEBUG = True
else:
  DEBUG = False
