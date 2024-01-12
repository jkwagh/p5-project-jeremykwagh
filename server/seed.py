from random import randint, choice as rc 
from models import Attendee, Speaker, Activity, Admin, Event

from faker import Faker

from app import app 
from models import db 

with app.app_context():
    fake = Faker()
    
    attendees = []
    
    for n in range(50):
        attendee = Attendee(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            organization=fake.oranization(),
            phone=fake.phone_number(),
            email=fake.email(),
            address=fake.address(),
            password=fake.password()
        )
        attendees.append(attendee)
        
    db.session.add_all(attendees)
    