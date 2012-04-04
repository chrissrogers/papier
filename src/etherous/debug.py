"""
  debug.py

  code executed near end of init when in dev/debug mode
"""

import os

from etherous import app
from werkzeug import SharedDataMiddleware
from google.appengine.tools.dev_appserver import FakeFile
from flaskext.gae_mini_profiler import GAEMiniProfiler
from flaskext.flask_scss import Scss

# allow file writing in dev to support scss
FakeFile.ALLOWED_MODES = frozenset(['a','r', 'w', 'rb', 'U', 'rU'])

# compile scss locally
Scss(app, asset_dir = os.path.join(app.root_path, 'static/assets/scss'), static_dir = os.path.join(app.root_path, 'static/assets/css'))

# run profiler
GAEMiniProfiler(app)

# Serve static content 
app.wsgi_app = SharedDataMiddleware(app.wsgi_app, {
  '/': os.path.join(os.path.dirname(__file__), 'static')
})
