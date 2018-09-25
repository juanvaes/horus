from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from .models.user import User

# To connect to the database
# create_engine() produces an Engine object based on a URL
engine = create_engine('sqlite:///:memory:', echo=True)
# Base is a factory function that constructs a base class, and the entities 
# are going to inherit from it 
Base = declarative_base()
app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    u1 = User("juan","jcvalencia22","12345")
    print(u1)
    return jsonify({'message': 'Hello World'})

