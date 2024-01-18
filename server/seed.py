from random import randint, choice as rc 
from models import Attendee, Activity, Admin, ActivityAttendee

from faker import Faker

from app import app 
from models import db 

with app.app_context():
   
    Attendee.query.delete()
    Activity.query.delete()
    Admin.query.delete()
    
    activity1 = Activity(name = "Discussions Regarding Things", location = "Conference Room 1", time = "09:00 AM", topic = "Things", speaker = "Alyosha Vernon")
    activity2 = Activity(name = "Lecture on How To Do", location = "Conference Room 2", time = "09:00 PM", topic = "How to do", speaker = "Louise Oscar")
    activity3 = Activity(name = "What is Happening?", location = "Conference Room 1", time = "11:00 AM", topic = "Happenings", speaker = "Braiden Assuncao")
    activity4 = Activity(name = "The Life of Someone", location = "Conference Room 2", time = "01:00 PM", topic = "Someone", speaker = "Anita Devi")
    activity5 = Activity(name = "A Brief History of a Place", location = "Conference Room 1", time = "03:00 PM", topic = "Things", speaker = "Tina Sanjaya")
    
    admin1 = Admin(first_name = "Jeremy", last_name = "Kwagh", email = "jeremy@flatiron.com", password = "123456789", access_level = "A")
    
    attendee1 = Attendee(first_name = "Henrich", last_name = "Tevin", organization = "IronFlats", phone = "111-111-1111", email = "henrich@ironflats.com", address = "123 Street, Philadelphia, PA", password = "1111111111")
    attendee2 = Attendee(first_name = "Ellie", last_name = "Madchen", organization = "IronFlats", phone = "111-111-2222", email = "ellie@ironflats.com", address = "222 Road, Philadelphia, PA", password = "1111111111")
    attendee3 = Attendee(first_name = "Chloe", last_name = "Elmira", organization = "Flatty", phone = "222-222-2222", email = "chloe@flatty.com", address = "333 Avenue, Miami, FL", password = "1111111111")
    attendee4 = Attendee(first_name = "Xavi", last_name = "Rebeckah", organization = "Flatty", phone = "222-222-6666", email = "xavi@flatty.com", address = "444 Pike, Miami, FL", password = "1111111111")
    attendee5 = Attendee(first_name = "Latasha", last_name = "Rosaline", organization = "IndieFlat", phone = "333-333-3333", email = "Latasha@indieflat.com", address = "555 Street Road, Columbus, OH", password = "1111111111")
    
    db.session.add_all([activity1, activity2, activity3, activity4, activity5])
    db.session.add_all([admin1])
    db.session.add_all([attendee1, attendee2, attendee3, attendee4, attendee5])
    db.session.commit()
    
    print("Table Seeded Successfully")