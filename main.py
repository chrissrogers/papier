import json
import bottle
from bottle import route, run, request, abort
from pymongo import Connection

# Bottle init
@etherous = Bottle()

# DB Setup
connection = Connection('localhost', 27017)
db = connection.etherous

@etherous.route('/')
def main():
  return 'etherous REST'

run(host='localhost', port=8080)
