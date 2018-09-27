from sqlalchemy import Column, ForeignKey, Integer, String
from application import Base

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    fname = Column(String)
    lname = Column(String)
    username = Column(String)
    email = Column(String)
    password = Column(String)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def __repr__(self):
        return "<User(username={}, email={})".format(self.username, self.email)

