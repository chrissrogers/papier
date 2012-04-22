"""
  Initialize Flask app
"""

from flask import Flask

import config as app_config

app = Flask('etherous')
app.config.from_object(app_config)

import routes

if app.debug:
  import debug
