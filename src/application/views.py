"""
  views.py

  URL route handlers

  Note that any handler params must match the URL route params.
  For example the *say_hello* handler, handling the URL route '/hello/<username>',
    must be passed *username* as the argument.
"""

from flask import render_template, flash, url_for, redirect

# from models import ExampleModel
from decorators import login_required, admin_required

def production_placeholder():
  return render_template('placeholder.jinja')

def home():
  return render_template('main.jinja')

def warmup():
  """
  App Engine warmup handler
  See http://code.google.com/appengine/docs/python/config/appconfig.html#Warming_Requests
  """
  return ''
