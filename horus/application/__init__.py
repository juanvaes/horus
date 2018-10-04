"""
APPLICATION FACTORY FUNCTION
"""


from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


DATABASE_URI = 'mysql+pymysql://mac:09876@localhost/horus'

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

def create_app(config_filename = None):
    app = Flask(__name__)
    # Initialize extensions
    # initialize_extensions(app)
    register_blueprints(app)
    return app




from .models import Customer
# Customer.metadata.create_all(bind=engine)
