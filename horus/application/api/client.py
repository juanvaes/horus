from flask import jsonify, request
from application import session
from urllib.parse import urlparse

from application.api import appi
from application.models import Client

@appi.route('/clients', methods=['GET'])
def get_clients_all():
    clients = Client.get_all()
    print(clients)
    return jsonify({'data':clients})

@appi.route('/client/search', methods=['GET'])
def get_client():
    return jsonify({'data':'proving'})

@appi.route('/client/', methods=['POST'])
def post_client():
    data = request.json # gets the data as dictionary
    client = Client()
    client.to_obj(data)
    response = Client.create(client)
    return jsonify({'message': response})

@appi.route('/client/', methods=['PUT'])
def put_client():
    return jsonify({'message':'<h1> Client updated </h1>'})

@appi.route('/client/', methods=['DELETE'])
def delete_client():
    return jsonify({'message':'<h1> Client deleted </h1>'})
