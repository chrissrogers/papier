
from secret_keys import CSRF_SECRET_KEY, SESSION_KEY

DEBUG = False

# Set secret keys for CSRF protection
SECRET_KEY = CSRF_SECRET_KEY
CSRF_SESSION_KEY = SESSION_KEY

CSRF_ENABLED = True
