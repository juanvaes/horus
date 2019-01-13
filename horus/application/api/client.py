from flask import jsonify, request
from application import session
from urllib.parse import urlparse

from application.api import appi
from application.models import Client

@appi.route('/client/search', methods=['GET'])
def get_client():
    custest = Client('Juan','Valencia','jcvalencia22@gmail.com','123456')
    custest = str(custest)
    return jsonify({'message':custest})

@appi.route('/client/', methods=['POST'])
def post_client():
    data = request.json # gets the data as dictionary
    print(data)
    client = Client(data['user']['fname'],data['user']['lname'], data['user']['email'], data['user']['password'])
    response = Client.create(client)
    print(response)
    return jsonify({'message':'<h1> Client saved </h1>'})

@appi.route('/client/', methods=['PUT'])
def put_client():
    return jsonify({'message':'<h1> Client updated </h1>'})

@appi.route('/client/', methods=['DELETE'])
def delete_client():
    return jsonify({'message':'<h1> Client deleted </h1>'})
