import React, {useState, useEffect} from 'react';
import { useApiContext } from './AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const ActivityPage = () => {

    const { activityData, activityToReg, user } = useApiContext();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        activityData(id);
        console.log(activityToReg)
    }, [])

    const handleClick = () => {
        
    }


    return <div>
        <h2>{activityToReg.name}</h2>
        <h3>{activityToReg.topic}</h3>
        <p>{activityToReg.location}, {activityToReg.time}</p>
        <button onClick={handleClick}>Register</button>
    </div>
}

export default ActivityPage;