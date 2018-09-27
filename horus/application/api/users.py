from flask import jsonify
from application.api import appi

@appi.route('/users')
def get_users():
    return jsonify({'message':'<h1> User 1 </h1>'})