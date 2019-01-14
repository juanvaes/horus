from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime, inspect

from application import Base, session

class Client(Base):
    __tablename__ = 'clients'

    id = Column(Integer, primary_key=True)
    fname = Column(String(30))
    lname = Column(String(30))
    identification = Column(String(30))
    cellphone = Column(String(30))
    phone = Column(String(30))
    email = Column(String(30))
    password = Column(String(30))
    birthday = Column(DateTime)
    sex = Column(String(30))
    # address = Column(String(30))
    country = Column(String(30)) # Contains a relationship
    state = Column(String(30))
    city = Column(String(30)) # Contains a relationship
    postal_code = Column(Integer)
    sicknesses = Column(String(30)) # Contains a relationship
    surgeries = Column(String(30)) # Contains a relationship
    emergency_contact = Column(String(30)) # Contains a relationship
    profession = Column(String(30)) # Contains a relationship
    hobbies = Column(String(30))
    last_day_visited = Column(String(30)) 
    visited_days = Column(Integer) # Contains a relationship
    is_competitor = Column(Boolean) 
    is_frozen = Column(Boolean)
    payment_id = Column(Integer) # Contains a relationship
    picture = Column(String(30)) 

    """
    def __init__(
        self, fname, lname, identification,
        cellphone, phone, email, password,
        birthday, sex, country, state, city,
        postal_code, sicknesses, surgeries, emergency_contact,
        profession, hobbies
        ):
        self.fname = fname
        self.lname = lname
        self.identification = identification
        self.cellphone = int(cellphone)
        self.phone = int(phone)
        self.email = email
        self.password = password
        self.birthday = birthday
        self.sex = sex
        self.country = country
        self.state = state
        self.city = city
        self.postal_code = postal_code
        self.sicknesses = sicknesses
        self.surgeries = surgeries
        self.emergency_contact = emergency_contact
        self.profession = profession
        self.hobbies = hobbies
    """

    def __repr__(self):
        return "<Object Client <Name={} {}, identification={}>".format(self.fname, self.lname, self.identification)

    def to_dict(self):
        client_info = dict(
            fname = self.fname,
            lname = self.lname,
            identification = self.identification,
            cellphone = self.cellphone,
            phone = self.phone,
            email = self.email,
            password = self.password,
            birthday = self.birthday,
            sex = self.sex,
            country = self.country,
            state = self.state,
            city = self.city,
            postal_code = self.postal_code,
            sicknesess = self.sicknessess,
            surgeries = self.surgeries,
            emergency_contact = self.emergency_contact,
            profession = self.profession,
            hobbies = self.hobbies,
        )
        return client_info
    
    def to_obj(self, data):
        print(data)
        self.fname = data['user']['fname']
        self.lname = data['user']['lname']
        self.identification = data['user']['identification']
        self.cellphone = data['user']['cellphone']
        self.phone = data['user']['phone']
        self.email = data['user']['email']
        self.password = data['user']['password']
        self.birthday = data['user']['birthdate']
        self.sex = data['user']['sex']
        self.country = data['user']['country']
        self.state = data['user']['state']
        self.city = data['user']['city']
        self.postal_code = data['user']['postal_code']
        self.sickneses = data['user']['sicknesess']
        self.surgeries = data['user']['surgeries']
        self.emergency_contact = data['user']['emergency_contact']
        self.profession = data['user']['profession']
        self.hobbies = data['user']['hobbies']

    
    @staticmethod
    def create(client):
        try:
            # Verify client doesn't exist
            # Insert client to the databasex
            ins = inspect(client)
            session.add(client)
            print('Transient: {}; Pending: {}; Persistent: {}; Detached: {}'.format(ins.transient, ins.pending, ins.persistent, ins.detached))
            session.commit()
            print('Transient: {}; Pending: {}; Persistent: {}; Detached: {}'.format(ins.transient, ins.pending, ins.persistent, ins.detached))
            # Get a response from database and return it
            msg = "Client created successfully"
            response = { "data":msg }
            return response
        except Exception as e:
            print(e)
            session.rollback()
    
    def get(self, client):
        pass
    
    def update(self, client):
        pass
    
    def delete(self, client):
        pass
        

