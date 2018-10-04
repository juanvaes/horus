from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime

from .. import Base


class Assistance(Base):
    __tablename__ = 'assistances'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer) # Contains a relationship
    date = Column(DateTime)

    """
    def __init__():
        pass
    """

    def __repr__(self):
        return "<Assistance(Customer={}, assistance_id={})".format(self.customer_id, self.id)
    