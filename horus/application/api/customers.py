from flask import jsonify, request
from application import session
from urllib.parse import urlparse

from application.api import appi

@appi.route('/customer/search', methods=['GET'])
def get_customer():
    return jsonify({'message':'<h1> Customer retrieve </h1>'})

@appi.route('/customer/', methods=['POST'])
def post_customer():
    data = request.json # Data gets the data as dictionary
    return jsonify({'message':'<h1> Customer saved </h1>'})

@appi.route('/customer/', methods=['PUT'])
def put_customer():
    return jsonify({'message':'<h1> Customer updated </h1>'})

@appi.route('/customer/', methods=['DELETE'])
def delete_customer():
    return jsonify({'message':'<h1> Customer deleted </h1>'})
