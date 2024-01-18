import React, { useContext, useState } from 'react'
import { useApiContext } from './AppContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const { postData } = useApiContext();
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
        postData(formData);
    }

    
    return (
        <div className='signup'>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up!</h2>
                <div class='row'>
                    <div class='col-auto'>
                        <input type='text' class="form-control" name='first_name' value={formData.first_name} onChange={handleInputchange} placeholder='Enter your First Name!' required />
                    </div>ß
                    <div class='col-auto'>
                        <input type='text' class="form-control" name='last_name' value={formData.last_name} onChange={handleInputchange} placeholder='Enter your Last Name!' required />
                    </div>
                    <div class='col-auto'>
                        <input type='text' class="form-control" name='organization' value={formData.organization} onChange={handleInputchange} placeholder='Enter your Organization Name!' required />
                    </div>
                </div>
                <div class='form-group'>
                    <input type='text' class="form-control" name='phone' value={formData.phone} onChange={handleInputchange} placeholder='Enter your Phone Number!' required />
                </div>
                <div class='form-group'>
                    <input type='text' class="form-control" name='email' value={formData.email} onChange={handleInputchange} placeholder='Enter your Email Address!' required />
                </div>
                <div class='form-group'>
                    <input type='text' class="form-control" name='address' value={formData.address} onChange={handleInputchange} placeholder='Enter your Address!' required />
                </div>
                <div class='form-group'>
                    <input type='text' class="form-control" name='password' value={formData.password} onChange={handleInputchange} placeholder='Enter your Password!' required />
                </div>
                <button type='submit' class="btn btn-primary">
                    Sign Up!
                </button>
            </form>
        </div>
    )
}

export default SignUp;