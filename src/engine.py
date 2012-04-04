"""
engine.py

Primary App Engine app handler

"""

import sys, os

package_dir_path = os.path.join(os.path.dirname(__file__), 'packages')

# Allow unzipped packages to be imported
# from packages folder
sys.path.insert(0, package_dir_path)

# Append zip archives to path for zipimport
for filename in os.listdir(package_dir_path):
  if filename.endswith((".zip", ".egg")):
    sys.path.insert(0, "%s/%s" % (package_dir_path, filename))

from etherous import app


def start (url_mapping, debug = False):
  from google.appengine.ext.webapp.util import run_wsgi_app
  if app.debug:
    # Run debugged app
    from werkzeug_debugger_appengine import get_debugged_app
    run_wsgi_app(get_debugged_app(app))
  else:
    # Run production app
    run_wsgi_app(app)


# Use App Engine app caching
if __name__ == "__main__":
  start()
