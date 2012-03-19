import json
import bottle
from bottle import Bottle, route, view, run, request, abort
from pymongo import Connection

# Bottle init
etherous = Bottle()
bottle.debug(True)

# DB Setup
connection = Connection('localhost', 27017)
db = connection.etherous

@etherous.route('/')
@view('main')
def main():
  return {}

@etherous.route('/documents', method = 'PUT')
def put_document():
  data = request.body.readline()
  if not data:
    abort(400, 'No data received')
  entity = json.loads(data)
  if not entity.has_key('_id'):
    abort(400, 'No _id specified')
  try:
    db['documents'].save(entity)
  except ValidationError as ve:
    abort(400, str(ve))
  
@etherous.route('/documents/<id:int>', method = 'GET')
def get_document(id):
  entity = db['documents'].find_one({'_id':id})
  if not entity:
    abort(404, 'No document with id %s' % id)
  return entity

run(etherous, host = 'localhost', port = 8080, reloader = True)
