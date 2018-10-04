from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime

from .. import Base


class Sickness(Base):
    __tablename__ = 'sicknesses'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer) # Contains a relationship
    description = Column(String(30))

    """
    def __init__():
        pass
    """

    def __repr__(self):
        return "<Sickness(Id={}, Customer_id={})".format(self.id, self.customer_id)
    