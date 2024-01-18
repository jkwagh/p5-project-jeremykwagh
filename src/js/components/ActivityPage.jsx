import React, {useState, useEffect} from 'react';
import { useApiContext } from './AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const ActivityPage = () => {

    const { activityData, activityToReg, user, postActivityAttendee } = useApiContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        activity_id: "",
        attendee_id: "",
    })
    const activity_id = activityToReg.id
    const attendee_id = user.id

    useEffect(() => {
        activityData(id);
        console.log(activity_id)
        console.log(attendee_id)
        setPostData({
            activity_id: activity_id,
            attendee_id: attendee_id
        })
    }, [activity_id, attendee_id])

    // useEffect(() => {
    //     setPostData({
    //         activity_id: activity_id,
    //         attendee_id: attendee_id
    //     })
    // }, [])

    const handleClick = () => {
        postActivityAttendee(postData)
    }


    return <div>
        <h2>{activityToReg.name}</h2>
        <h3>{activityToReg.topic}</h3>
        <p>{activityToReg.location}, {activityToReg.time}</p>
        <button class="btn btn-primary" onClick={handleClick}>Register</button>
    </div>
}

export default ActivityPage;