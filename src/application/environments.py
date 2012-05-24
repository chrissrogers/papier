"""
  environments.py

  Establish which environment we are in
"""

from flask import request
from application import app

if app.config['DEBUG']:
  app.config['ENVIRONMENT'] = 'development-local'
elif request.environ['HTTP_HOST'] == 'dev.papier.io':
  app.config['ENVIRONMENT'] = 'development-public'
else:
  app.config['ENVIRONMENT'] = 'production'