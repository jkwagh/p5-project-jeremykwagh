from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates

from config import db

class Attendee(db.Model, SerializerMixin):
    __tablename__ = 'attendees'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable = False)
    last_name = db.Column(db.String(80), nullable = False)
    organization = db.Column(db.String(80))
    phone = db.Column(db.String(80), nullable = False)
    email = db.Column(db.String(80), nullable = False, unique = True)
    address = db.Column(db.String(80), nullable = False)
    password = db.Column(db.String(80), nullable = False)
    
    activityattendee = db.relationship('ActivityAttendee', back_populates='attendees')
    
    @validates('email')
    def validate_email(self, key, value):
        if not value:
            raise ValueError('Please enter an email address!')
        if "@" not in value:
            raise ValueError('Please enter a valid email address!')
        return value
    
    @validates('phone')
    def validate_phone(self, key, value):
        if len(value) < 10:
            raise ValueError('Please enter a valid phone number')
        else:
            return value
            
    def __repr__(self):
        return f"<Attendee {self.id}: {self.first_name}: {self.last_name}: {self.organization}: {self.phone}: {self.email}: {self.address}>"
    
class Speaker(db.Model, SerializerMixin):
    __tablename__ = 'speakers'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable = False)
    last_name = db.Column(db.String(80), nullable = False)
    organization = db.Column(db.String(80))
    phone = db.Column(db.String(80), nullable = False)
    email = db.Column(db.String(80), nullable = False, unique = True)
    password = db.Column(db.String(80), nullable = False)
    address = db.Column(db.String(80), nullable = False)
    subject = db.Column(db.String(80), nullable = False)
    
    activityattendee = db.relationship('ActivityAttendee', back_populates='speaker')
    
    @validates('email')
    def validate_email(self, key, value):
        if not value:
            raise ValueError('Please enter an email address!')
        if "@" not in value:
            raise ValueError('Please enter a valid email address!')
        return value
    
    @validates('phone')
    def validate_phone(self, key, value):
        if len(value) < 10:
            raise ValueError('Please enter a valid phone number')
        else:
            return value
    
    def __repr__(self):
        return f"<Speaker {self.id}: {self.first_name}: {self.last_name}: {self.phone}: {self.email}: {self.organization}: {self.subject}>"
    
class Activity(db.Model, SerializerMixin):
    __tablename__ = 'activities'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable = False)
    location = db.Column(db.String(80), nullable = False)
    time = db.Column(db.String(80), nullable = False)
    topic = db.Column(db.String(80), nullable = False)
    
    activityattendee = db.relationship('ActivityAttendee', back_populates='attendees')
    
    def __repr__(self):
        return f"<Activity {self.id}: {self.name}: {self.location}: {self.time}: {self.topic}>"
    
class Admin(db.Model, SerializerMixin):
    __tablename__ = 'admin'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable = False)
    last_name = db.Column(db.String(80), nullable = False)
    email = db.Column(db.String(80), nullable = False)
    password = db.Column(db.String(80), nullable = False)
    access_level = db.Column(db.String(80), nullable = False)
    
    @validates('email')
    def validate_email(self, key, value):
        if not value:
            raise ValueError('Please enter an email address!')
        if "@" not in value:
            raise ValueError('Please enter a valid email address!')
        return value
    
    def __repr__(self):
        return f"<Admin {self.id}: {self.first_name}: {self.last_name}: {self.email}: {self.access_level}>" 
    
class Event(db.Model, SerializerMixin):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    start_date = db.Column(db.String(80))
    end_date = db.Column(db.String(80))
    
    def __repr__(self):
        return f"<Event {self.id}: {self.name}: {self.start_date}>"
    
class ActivityAttendee(db.Model, SerializerMixin):
    __tablename__ = 'activityattendee'
    id = db.Column(db.Integer, primary_key=True)
    attendee_id = db.Column(db.Integer, db.ForeignKey('attendees.id'))
    activity_id = db.Column(db.Integer, db.ForeignKey('activities.id'))
    speaker_id = db.Column(db.Integer, db.ForeignKey('speakers.id'))
    
    activity = db.relationship('Activity', back_populates='activityattendees')
    attendees = db.relationship('Attendee', back_populates='activityattendees')
    speaker = db.relationship('Speaker', back_populates='activityattendees')
    
    def __repr__(self):
        return f"<ActivityAttendee {self.id}: {self.attendee_id}: {self.activity_id}: {self.speaker_id}"
    
    