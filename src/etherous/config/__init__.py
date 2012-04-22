"""
  config module

  Configuration for Flask app

  Important: Keys are in the secret_keys.py module, 
             which should be kept out of version control.
"""

import os

# Auto-set debug mode based on App Engine dev environ
if 'SERVER_SOFTWARE' in os.environ and os.environ['SERVER_SOFTWARE'].startswith('Dev'):
  import development
else:
  import production
