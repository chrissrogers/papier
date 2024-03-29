"""
  routes.py

  URL dispatch route mappings and error handlers
"""

from flask import render_template

from application import app
from application import views


if not app.config['DEBUG']:

  app.add_url_rule('/', 'home', view_func = views.production_placeholder)

else: 

  ## URL dispatch rules
  # App Engine warm up handler
  # See http://code.google.com/appengine/docs/python/config/appconfig.html#Warming_Requests
  app.add_url_rule('/_ah/warmup', 'warmup', view_func = views.warmup)

  # Home page
  app.add_url_rule('/', 'home', view_func = views.home)


  ## Error handlers
  # Handle 404 errors
  @app.errorhandler(404)
  def page_not_found(e):
    return render_template('main.jinja'), 404

  # Handle 500 errors
  @app.errorhandler(500)
  def server_error(e):
    return render_template('main.jinja'), 500
