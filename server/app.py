import ipdb

# Standard library imports
import ipdb
# Remote library imports
from flask import request, make_response, session, Flask
from flask_restful import Api, Resource

# Local imports
from config import app, db, api, migrate
# Add your model imports
from models import Attendee, Activity, Speaker, Event, ActivityAttendee

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

api = Api(app)

class AllAttendees(Resource):
    def get(self):
        response_body = [attendee.to_dict() for attendee in Attendee.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_attendee = Attendee(first_name=request.json.get('first_name'), last_name=request.json.get('last_name'), organization=request.json.get('organization'), phone=request.json.get('phone'), email=request.json.get('email'), address=request.json.get('address'), password=request.json.get('password'))
            db.session.add(new_attendee)
            db.session.commit()
            response_body = [new_attendee.to_dict()]
            return make_response(response_body, 201)
        except:
            response_body = {
                'error': 'User could not be created'
            }
            return make_response(response_body, 400)
        
api.add_resource(AllAttendees, '/attendees')

class AttendeeById(Resource):
    
    def get(self, id):
        attendee = Attendee.query.filter(Attendee.id == id).first()
        
        if attendee:
            response_body = attendee.to_dict()
            return make_response(response_body, 200)
        else:
            response_body = {
                'error': 'User not found'
            }
            
    def patch(self, id):
        attendee = Attendee.query.filter(Attendee.id == id).first()
        if attendee:
            for attr in request.json:
                setattr(attendee, attr, request.json.get(attr))
            
            db.session.commit()
            
            response_body = attendee.to_dict()
            return make_response(response_body, 200)
        else:
            response_body = {
                'error': 'User not found!'
            }
            return make_response(response_body, 404)
        
    def delete(self, id):
        attendee = Attendee.query.filter(Attendee.id == id).first()
        
        if attendee:
            db.session.delete(attendee)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        else:
            response_body = {
                'error': 'User not found!'
            }
            return make_response(response_body, 404)
        
api.add_resource(AttendeeById, '/attendees/<int:id>')

class AllActivities(Resource):
    def get(self):
        response_body = [activities.to_dict() for activities in Activity.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_activity = Activity(name=request.json.get('name'))
            db.sessin.add(new_activity)
            db.session.commit()
            response_body = [new_activity.to_dict(only=('name',))]
            return make_response(response_body, 201)
        except:
            response_body = {
                'error' : 'Activity could not be created!'
            }
            return make_response(response_body, 400)
        
api.add_resource(AllActivities, '/activities')

class ActivityById(Resource):
    def get(self, id):
        activity = Activity.query.filter(Activity.id == id).first()
        
        if activity:
            response_body = activity.to_dict()
            return make_response(response_body, 200)
        else:
            response_body = {
                'error': 'Activity not found!'
            }
            return make_response(response_body, 404)
        
    def patch(self, id):
        activity = Activity.query.filter(Activity.id == id).first()
        
        if activity:
            for attr in request.json:
                setattr(activity, attr, request.json.get(attr))
                
            db.session.commit()
            
            response_body = activity.to_dict()
            return make_response(response_body, 200)
        else:
            response_body = {
                'error': 'Activity not found!'
            }
            return make_response(response_body, 404)
        
    def delete(self, id):
        activity = Activity.query.filter(Activity.id == id).first()
        
        if activity:
            db.session.delete(activity)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        else:
            response_body = {
                'error': 'Activity not found!'
            }
            return make_response(response_body, 404)
        
api.add_resource(ActivityById, '/activities/<int:id>')

if __name__ == '__main__': 
    app.run(port=5555, debug=True)