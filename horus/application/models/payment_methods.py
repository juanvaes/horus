from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime

from .. import Base

class Payment(Base):
    __tablename__ = 'payments'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer) # Contains a relationship
    payment_date = Column(DateTime)
    value = Column(Integer)
    quantity = Column(Integer)
    payment_method_id = Column(Integer) # Contains a relationship

    """
    def __init__():
        pass
    """

    def __repr__(self):
        return "<Payment(Customer={}, Payment_id={})".format(self.customer_id, self.id)
    