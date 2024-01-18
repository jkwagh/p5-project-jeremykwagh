import React from "react";
import { useApiContext } from "./AppContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const AttendeePage = () => {
    const { patchData, userToEdit, deleteData, attendeeData } = useApiContext();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        attendeeData(id);
    }, [])

    const [editForm, setEditForm] = useState({
        first_name: "",
        last_name: "",
        organization: "",
        phone: "",
        email: "",
        address: "",
        password: ""
    })

    const [initialForm, setInitialForm] = useState({});

        // Set the initial form state when userToEdit changes

    useEffect(() => {
        if(userToEdit){
            setEditForm({
                first_name: userToEdit.first_name,
                last_name: userToEdit.last_name,
                organization: userToEdit.organization,
                phone: userToEdit.phone,
                email: userToEdit.email,
                address: userToEdit.address,
                password: userToEdit.password
            });
            
            // Save the initial form state for comparison
            setInitialForm({
                first_name: userToEdit.first_name,
                last_name: userToEdit.last_name,
                organization: userToEdit.organization,
                phone: userToEdit.phone,
                email: userToEdit.email,
                address: userToEdit.address,
                password: userToEdit.password
            });
        }
    }, [userToEdit])

    const onChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const hasChanged = Object.keys(editForm).some(
            (key) => editForm[key] !== initialForm[key]
    );

        if (hasChanged) {
            patchData({ id: userToEdit.id, ...editForm });
        } else {
            console.log("No changes detected");
        }
    };

    const onDeleteClick = () => {
        deleteData(id)
    }


    return <div>
        <h1>Attendee Details</h1>
        <form class="row g-3" onSubmit={handleSubmit}>
            <div class="col-md-4">
                <label class="form-label">First Name</label>
                <input type="text" class="form-control" name="first_name" placeholder={userToEdit.first_name} defaultValue={userToEdit.first_name} onChange={onChange}/>
            </div>
            <div class="col-md-4">
                <label class="form-label">Last Name</label>
                <input type="text" class="form-control" name="last_name" placeholder={userToEdit.last_name} defaultValue={userToEdit.last_name} onChange={onChange}/>
            </div>
            <div class="col-md-4">
                <label class="form-label">Organization</label>
                <input type="text" class="form-control" name="organization" placeholder={userToEdit.organization} defaultValue={userToEdit.organization} onChange={onChange}/>
            </div>
            <div class="col-md-2">
                <label class="form-label">Phone</label>
                <input type="text" class="form-control" name="phone" placeholder={userToEdit.phone} defaultValue={userToEdit.phone} onChange={onChange}/>
            </div>
            <div class="col-md-2">
                <label class="form-label">Email</label>
                <input type="text" class="form-control" name="email" placeholder={userToEdit.email} defaultValue={userToEdit.email} onChange={onChange}/>
            </div>
            <div class="col-md-3">
                <label>Address</label>
                <input type="text" class="form-control" name="address" placeholder={userToEdit.address} defaultValue={userToEdit.address} onChange={onChange}/>
            </div>
            <div class="col-md-2">
                <label>Password</label>
                <input type="text" class="form-control" name="password" placeholder={userToEdit.password} defaultValue={userToEdit.password} onChange={onChange}/>
            </div>
            <div class="col-12">
                <button class="btn btn-primary col-md-1" type="submit">Submit</button>
            </div>
        </form>
        <br/>
        <div class="col-12">
            <button class="btn btn-primary" onClick={onDeleteClick} value={userToEdit.id}>
            Delete User
            </button>
            <br/>
            <button class="btn btn-primary" onClick={() => navigate('/attendees')}>Back to Attendees List</button>
        </div>
    </div>
}

export default AttendeePage;