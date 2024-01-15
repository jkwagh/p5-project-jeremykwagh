import React from "react";
import { useNavigate } from "react-router-dom";
import { useApiContext } from "./AppContext";


const Schedule = () => {
     
    const { activities } = useApiContext();
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/activities/${id}`)
    }

    return (
        <div>
          <h2>Schedule</h2>
          <ul>
            {activities.map((activity) => (
              <li key={activity.id}>
                {/* Use onClick to trigger navigation */}
                <span onClick={() => handleNavigate(activity.id)}>
                 {activity.name}, {activity.location}, {activity.time}, {activity.topic}
                </span>
              </li>
            ))}
          </ul>
          
        </div>
      );
}

export default Schedule;