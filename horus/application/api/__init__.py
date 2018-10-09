from flask import Blueprint

appi = Blueprint('api',__name__)

from application.api import users
from application.api import customers
