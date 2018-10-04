from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime

from .. import Base


class Profession(Base):
    __tablename__ = 'professions'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer)
    name = Column(String(30))
    description = Column(String(30))
    
    """
    def __init__():
        pass
    """

    def __repr__(self):
        return "<Profession(Id={}, Name={})".format(self.id, self.name)
    