from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base



# To connect to the database
# create_engine() produces an Engine object based on a URL
engine = create_engine('sqlite:///:memory:', echo=True)
# Base is a factory function that constructs a base class, and the entities 
# are going to inherit from it 
Base = declarative_base()
app = Flask(__name__)

# Register blueprints
from application.api import appi
app.register_blueprint(appi, url_prefix='/api')