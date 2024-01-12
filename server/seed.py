from random import randint, choice as rc 
from models import Attendee, Speaker, Activity, Admin, Event

from faker import Faker

from app import app 
from models import db 

with app.app_context():
   
    Attendee.query.delete()
    Activity.query.delete()
    Speaker.query.delete()
    Admin.query.delete()
    Event.query.delete()
    
    activity1 = Activity(name = "Discussions Regarding Things", location = "Conference Room 1", time = "09:00 AM", topic = "Things")
    activity2 = Activity(name = "Lecture on How To Do", location = "Conference Room 2", time = "09:00 PM", topic = "How to do")
    activity3 = Activity(name = "What is Happening?", location = "Conference Room 1", time = "11:00 AM", topic = "Happenings")
    activity4 = Activity(name = "The Life of Someone", location = "Conference Room 2", time = "01:00 PM", topic = "Someone")
    activity5 = Activity(name = "A Brief History of a Place", location = "Conference Room 1", time = "03:00 PM", topic = "Things")
    
    admin1 = Admin(first_name = "Jeremy", last_name = "Kwagh", email = "jeremy@flatiron.com", password = "123456789", access_level = "A")
    
    attendee1 = Attendee(first_name = "Henrich", last_name = "Tevin", organization = "IronFlats", phone = "111-111-1111", email = "henrich@ironflats.com", address = "123 Street, Philadelphia, PA", password = "1111111111")
    attendee2 = Attendee(first_name = "Ellie", last_name = "Madchen", organization = "IronFlats", phone = "111-111-2222", email = "ellie@ironflats.com", address = "222 Road, Philadelphia, PA", password = "1111111111")
    attendee3 = Attendee(first_name = "Chloe", last_name = "Elmira", organization = "Flatty", phone = "222-222-2222", email = "chloe@flatty.com", address = "333 Avenue, Miami, FL", password = "1111111111")
    attendee4 = Attendee(first_name = "Xavi", last_name = "Rebeckah", organization = "Flatty", phone = "222-222-6666", email = "xavi@flatty.com", address = "444 Pike, Miami, FL", password = "1111111111")
    attendee5 = Attendee(first_name = "Latasha", last_name = "Rosaline", organization = "IndieFlat", phone = "333-333-3333", email = "Latasha@indieflat.com", address = "555 Street Road, Columbus, OH", password = "1111111111")
    
    
    speakers1 = Speaker(first_name = "Alyosha", last_name = "Vernon", organization = "Flatiron Fund", phone = "444-444-1111", email = "alyosha@fif.com", address = "111 Main Street, New York, NY", password = "1111111111")
    speakers2 = Speaker(first_name = "Louise", last_name = "Oscar", organization = "Flatiron Fund", phone = "444-444-2222", email = "louise@fif.com", address = "222 Main Street, New York, NY", password = "1111111111")
    speakers3 = Speaker(first_name = "Braiden", last_name = "Assuncao", organization = "Flatiron Fund", phone = "444-444-3333", email = "braiden@fif.com", address = "333 Main Street, New York, NY", password = "1111111111")
    speakers4 = Speaker(first_name = "Anita", last_name = "Devi", organization = "Flatiron Fund", phone = "444-444-4444", email = "anita@fif.com", address = "444 Main Street, New York, NY", password = "1111111111")
    speakers5 = Speaker(first_name = "Tina", last_name = "Sanjaya", organization = "Flatiron Fund", phone = "444-444-5555", email = "tina@fif.com", address = "555 Main Street, New York, NY", password = "1111111111")
    