from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime

from .. import Base


class EmergencyContact(Base):
    __tablename__ = 'emergencycontacts'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer)
    fname = Column(String(30))
    lname = Column(String(30))
    password = Column(String(30))
    phone = Column(Integer)
    relation = Column(Integer)

    """
    def __init__():
        pass
    """

    def __repr__(self):
        return "<EmergencyContact(Id={}, Person={} {})".format(self.id, self.fname, self.lname)
    