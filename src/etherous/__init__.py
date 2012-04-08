"""
  Initialize Flask app
"""

from flask import Flask

app = Flask('etherous')
app.config.from_object('etherous.config')

import routes

if app.debug:
  import debug
