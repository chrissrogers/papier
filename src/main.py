"""
main.py

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

from wsgiref.handlers import CGIHandler

from etherous import app


def main():
  if app.debug:
    # Run debugged app
    from werkzeug_debugger_appengine import get_debugged_app
    debugged_app = get_debugged_app(app)
    CGIHandler().run(debugged_app)
  else:
    # Run production app
    from google.appengine.ext.webapp.util import run_wsgi_app
    run_wsgi_app(app)


# Use App Engine app caching
if __name__ == "__main__":
  main()
