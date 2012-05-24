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

from application import app
