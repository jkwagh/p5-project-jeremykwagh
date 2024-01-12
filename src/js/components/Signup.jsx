import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        organization: "",
        phone: "",
        email: "",
        address: "",
        password: ""
    })

    const handleInputchange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addAttendee(formData);
        navigate('/');
    }

    const addAttendee = (e) => {
        fetch('/attendees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((resp))
    }
    return (
        <div className='signup'>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up!</h2>
                <div className='form-group'>
                    <input type='text' name='first_name' value={formData.first_name} onChange={handleInputchange} placeholder='Enter your First Name!' required />
                </div>
                <div className='form-group'>
                    <input type='text' name='last_name' value={formData.last_name} onChange={handleInputchange} placeholder='Enter your Last Name!' required />
                </div>
                <div className='form-group'>
                    <input type='text' name='organization' value={formData.organization} onChange={handleInputchange} placeholder='Enter your Organization Name!' required />
                </div>
                <div className='form-group'>
                    <input type='text' name='phone' value={formData.phone} onChange={handleInputchange} placeholder='Enter your Phone Number!' required />
                </div>
                
            </form>
        </div>
    )
}

export default SignUp;