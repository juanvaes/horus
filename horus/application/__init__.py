from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Base is a factory function that constructs a base class, and the entities 
# are going to inherit from it 
Base = declarative_base()
app = Flask(__name__)
# To connect to the database
# create_engine() produces an Engine object based on a URL
engine = create_engine('mysql://juancamilo:4454861@localhost/horus', echo=False)
Base.metadata.bind = engine
Session = sessionmaker(bind=engine)
session = Session()

# Register blueprints
from application.api import appi
app.register_blueprint(appi, url_prefix='/api')


from .models import Customer
Customer.metadata.create_all(bind=engine)
