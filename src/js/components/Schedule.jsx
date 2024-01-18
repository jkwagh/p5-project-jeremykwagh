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
              <dl key={activity.id}>
                <dt class="col-sm-3"><span >
                 {activity.name}
                </span></dt>
                <dd class="col-sm-9">{activity.location}, {activity.time}, {activity.topic}</dd>
                <button class="btn btn-sm btn-secondary fw-bold border-white bg-white" onClick={() => handleNavigate(activity.id)}>Details</button>
              </dl>
            ))}
          </ul>
        </div>
      );
}

export default Schedule;