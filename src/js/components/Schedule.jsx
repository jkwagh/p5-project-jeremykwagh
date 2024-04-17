import React from "react";
import { useNavigate } from "react-router-dom";
import { useApiContext } from "./AppContext";


const Schedule = () => {
    const { activities, user } = useApiContext();
    const navigate = useNavigate();

    console.log(user)

    const handleNavigate = (id) => {
        navigate(`/schedule/${id}`)
    }

    return (
        <div>
          <h2>Schedule</h2>
          <ul>
            {activities.map((activity) => (
              <div key={activity.id} className="row">
                <div className="col-sm-6">
                  <div>
                    <strong >{activity.name}</strong>
                  </div>
                  <div>{activity.location}, {activity.time}, {activity.topic}</div>
                </div>
                <div className="col-sm-3">
                  <button className="btn btn-sm btn-secondary fw-bold border-white bg-white" onClick={() => handleNavigate(activity.id)}>Details</button>
                </div>
                <div className="activity-break"></div>
              </div>
            ))}
            
          </ul>
          
        </div>
      );
}

export default Schedule;