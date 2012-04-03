"""
Initialize Flask app

"""

from flask import Flask
from flaskext.gae_mini_profiler import GAEMiniProfiler
from flaskext.flask_scss import Scss

app = Flask('etherous')
app.config.from_object('etherous.config')

import routes

if app.debug:
  Scss(app, asset_dir = 'static/assets/scss', static_dir = 'static/assets/css')
