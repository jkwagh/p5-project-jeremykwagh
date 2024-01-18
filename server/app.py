import ipdb

# Standard library imports
import ipdb
# Remote library imports
from flask import request, make_response, session, Flask, jsonify
from flask_restful import Api, Resource

# Local imports
from config import app, db, api, migrate
# Add your model imports
from models import Attendee, Activity, ActivityAttendee, Admin

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

api = Api(app)

class AllAttendees(Resource):
    def get(self):
        response_body = [attendee.to_dict(only=('id', 'first_name', 'last_name', 'organization', 'phone', 'email', 'address')) for attendee in Attendee.query.all()]
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
            response_body = attendee.to_dict(only=('id', 'first_name', 'last_name', 'organization', 'phone', 'email', 'address'))
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
        response_body = [activities.to_dict(only=('id', 'name', 'location', 'time', 'topic', )) for activities in Activity.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_activity = Activity(name=request.json.get('name'))
            db.sessin.add(new_activity)
            db.session.commit()
            response_body = [new_activity.to_dict(only=('id', 'name', 'location', 'time', 'topic'))]
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
            response_body = activity.to_dict(only=('id','name', 'location', 'time', 'topic'))
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
        
class AllActivityAttendee(Resource):
    def get(self):
        response_body = [activityattendee.to_dict(only=('attendee_id', 'activity_id')) for activityattendee in ActivityAttendee.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        
        try:
            new_activityattendee = ActivityAttendee(attendee_id=request.json['attendee_id'], activity_id=request.json['activity_id'])
            db.session.add(new_activityattendee)
            db.session.commit()
            return make_response(new_activityattendee.to_dict(only=('attendee_id', 'activity_id')), 201)
        except:
            response_body = {
                'error': 'ActivityAttendee could not be created'
            }
            return make_response(response_body, 400)
    
api.add_resource(AllActivityAttendee, '/activityattendee')

class ActivityAttendeeByActivity(Resource):
    def get(self, id):
        activity_attendees = ActivityAttendee.query.filter(ActivityAttendee.activity_id == id).all()

        # Convert the activity data to a list of dictionaries
        activity_data = [{"id": attendee.id} for attendee in activity_attendees]

        # Return a JSON response using jsonify
        response_data = jsonify(activity_data)

        # Use make_response to set additional parameters if needed
        response = make_response(response_data, 201)

        return response

api.add_resource(ActivityAttendeeByActivity, '/activityattendee/<int:id>')


class Login(Resource):
    def get(self):
        pass
    
    def post(self):
        attendee = Attendee.query.filter(Attendee.email == request.get_json()['email']).first()
        
        if attendee:
            session['attendee_id'] = attendee.id
            response_body = attendee.to_dict(only=('id', 'first_name', 'last_name', 'organization', 'phone', 'email', 'address'))
            return make_response(response_body, 201)
        else:
            response_body = {
                'error': 'Invalid email address!'
            }
            return make_response(response_body, 400)
    
api.add_resource(Login, '/login')

class Logout(Resource):
    def delete(self):
        session['attendee_id'] = None
        return {'message': '204: No Content'}, 204
    
api.add_resource(Logout, '/logout')

class CheckSession(Resource):
    def get(self):
        attendee = Attendee.query.filter(Attendee.id == session.get('attendee_id')).first()
        if attendee:
            return attendee.to_dict(rules='-password', )
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')

class AllAdmins(Resource):
    def get(self):
        response_body = [admin.to_dict() for admin in Admin.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_admin = Admin(first_name=request.json.get('first_name'), last_name=request.json.get('last_name'), email=request.json.get('email'), password=request.json.get('password'), access_level=request.json.get('access_level'))
            return make_response(new_admin.to_dict(), 201)
        except:
            response_body = {
                'error': 'Admin could not be created'
            }
            return make_response(response_body, 400)

api.add_resource(AllAdmins, '/admins')
        

if __name__ == '__main__': 
    app.run(port=5555, debug=True)