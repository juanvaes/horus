"""
APPLICATION FACTORY FUNCTION
"""

from flask import Flask, jsonify
from flask_cors import CORS

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


DATABASE_URI = 'mysql+pymysql://dellsupport@localhost/horux'

# Base is a factory function that constructs a base class, and the entities 
# are going to inherit from it 
Base = declarative_base()
# To connect to the database
# create_engine() produces an Engine object based on a URL
engine = create_engine(DATABASE_URI, echo=False)
Base.metadata.bind = engine
Session = sessionmaker(bind=engine)
session = Session()

def register_blueprints(app):
    # Register blueprints
    from application.api import appi
    app.register_blueprint(appi, url_prefix='/api')

def initialize_extensions(app):
    # Bootstrap(app)
    pass

def create_app(config_filename = None):
    app = Flask(__name__)
    # Enable CORS
    # One of the simplest configurations. Exposes all resources matching /api/* to
    # CORS and allows the Content-Type header, which is necessary to POST JSON
    # cross origin.
    CORS(app, resources=r'/api/*')
    # Initialize extensions
    initialize_extensions(app)
    register_blueprints(app)
    return app




from .models import Client
# Customer.metadata.create_all(bind=engine)
