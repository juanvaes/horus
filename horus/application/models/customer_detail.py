from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime
from .. import Base


class CustomerDetail(Base):
    __tablename__ = 'customerdetails'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer) # Contains a relationship
    size = Column(Integer)
    weight = Column(Integer)
    fat_percentage = Column(Integer)

    """
    def __init__():
        pass
    """

    def __repr__(self):
        return "<CustomerDetail(Id={}, Customer_id={})".format(self.id, self.customer_id)
