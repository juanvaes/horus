from sqlalchemy import Column, ForeignKey, Integer, String
from application import Base

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    fname = Column(String(30))
    lname = Column(String(30))
    username = Column(String(30))
    email = Column(String(30))
    password = Column(String(30))

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def __repr__(self):
        return "<User(username={}, email={})".format(self.username, self.email)

