from flask import Flask, request, render_template, request_started
from flaskext.mongoengine import MongoEngine
from flaskext.compass import Compass

# Init
etherous = Flask(__name__, template_folder = 'views')
etherous.config.from_envvar('ETHEROUS_CONFIG')

# DB Setup

# Routes
@etherous.route("/")
def main():
  return render_template('main.jinja')

# Debug logic
if etherous.config['DEBUG']:

  import os

  # Serve static content 
  from werkzeug import SharedDataMiddleware
  etherous.wsgi_app = SharedDataMiddleware(etherous.wsgi_app, {
    '/': os.path.join(os.path.dirname(__file__), 'static')
  })

  # Logging
  import logging
  from logging import FileHandler
  file_handler = FileHandler(etherous.config['LOG_FILE'])
  file_handler.setLevel(logging.WARNING)
  etherous.logger.addHandler(file_handler)

# Compass
compass = Compass(etherous)

# Run debug server
if __name__ == "__main__":
  etherous.run()
