from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime

from .. import Base

class PaymentMethod(Base):
    __tablename__ = 'paymentmethods'

    id = Column(Integer, primary_key=True) # Contains a relationship
    method = Column(Integer) 

    """
    def __init__():
        pass
    """

    def __repr__(self):
        return "<PaymentMethod(Method={}, Id={})".format(self.method, self.id)
    