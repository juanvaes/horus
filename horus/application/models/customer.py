from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime

from application import Base, session

class Customer(Base):
    __tablename__ = 'customers'

    id = Column(Integer, primary_key=True)
    fname = Column(String(30))
    lname = Column(String(30))
    password = Column(String(30))
    email = Column(String(30))
    genre = Column(Boolean)
    address = Column(String(30))
    phone = Column(Integer)
    country = Column(String(30)) # Contains a relationship
    city = Column(String(30)) # Contains a relationship
    birthday = Column(DateTime)
    sicknesses = Column(String(30)) # Contains a relationship
    surgeries = Column(String(30)) # Contains a relationship
    emergency_contact = Column(String(30)) # Contains a relationship
    last_day_visited = Column(String(30)) 
    visited_days = Column(Integer) # Contains a relationship
    profession = Column(String(30)) # Contains a relationship
    is_competitor = Column(Boolean) 
    is_frozen = Column(Boolean)
    payment_id = Column(Integer) # Contains a relationship
    postal_code = Column(Integer)
    picture = Column(String(30)) 

    
    def __init__(self, fname, lname, email, password):
        self.fname = fname
        self.lname = lname
        self.email = email
        self.password = password


    def __repr__(self):
        return "<Customer(Name={} {}, id={})".format(self.fname, self.lname, self.id)
    
    def create_customer(self):
        pass

