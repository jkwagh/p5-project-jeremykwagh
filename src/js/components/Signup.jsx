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
            <form class="row g-3" onSubmit={handleSubmit}>
                <h2>Sign Up!</h2>
                <div class='row'>
                    <div class='col-auto'>
                        <label class="form-label">First Name</label>
                        <input type='text' class="form-control" name='first_name' value={formData.first_name} onChange={handleInputchange} placeholder='Enter your First Name!' required />
                    </div>
                    <div class='col-auto'>
                        <label class="form-label">Last Name</label>
                        <input type='text' class="form-control" name='last_name' value={formData.last_name} onChange={handleInputchange} placeholder='Enter your Last Name!' required />
                    </div>
                    <div class='col-auto'>
                        <label class="form-label">Organization</label>
                        <input type='text' class="form-control" name='organization' value={formData.organization} onChange={handleInputchange} placeholder='Enter your Organization Name!' required />
                    </div>
                </div>
                <div class='col-md-3'>
                    <label class="form-label">Phone</label>
                    <input type='text' class="form-control" name='phone' value={formData.phone} onChange={handleInputchange} placeholder='Enter your Phone Number!' required />
                </div>
                <div class='col-md-3'>
                    <label class="form-label">Email</label>
                    <input type='text' class="form-control" name='email' value={formData.email} onChange={handleInputchange} placeholder='Enter your Email Address!' required />
                </div>
                <div class='col-md-3'>
                    <label class="form-label">Address</label>
                    <input type='text' class="form-control" name='address' value={formData.address} onChange={handleInputchange} placeholder='Enter your Address!' required />
                </div>
                <div class='col-md-3'>
                <label class="form-label">Password</label>
                    <input type='text' class="form-control" name='password' value={formData.password} onChange={handleInputchange} placeholder='Enter your Password!' required />
                </div>
                <div class="col-1">
                    <button type='submit' class="btn btn-primary">
                        Sign Up!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;