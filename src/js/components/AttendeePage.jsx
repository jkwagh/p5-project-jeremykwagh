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
        <h2></h2>
        <button class="btn btn-primary" onClick={onDeleteClick} value={userToEdit.id}>
          Delete User
        </button>
        <form className="edit-form" onSubmit={handleSubmit}>
            <label>First Name
                <input type="text" name="first_name" placeholder={userToEdit.first_name} defaultValue={userToEdit.first_name} onChange={onChange}/>
            </label>
            <br />
            <label>Last Name
                <input type="text" name="last_name" placeholder={userToEdit.last_name} defaultValue={userToEdit.last_name} onChange={onChange}/>
            </label>
            <br />
            <label>Organization
                <input type="text" name="organization" placeholder={userToEdit.organization} defaultValue={userToEdit.organization} onChange={onChange}/>
            </label>
            <br />
            <label>Phone
                <input type="text" name="phone" placeholder={userToEdit.phone} defaultValue={userToEdit.phone} onChange={onChange}/>
            </label>
            <br />
            <label>Email
                <input type="text" name="email" placeholder={userToEdit.email} defaultValue={userToEdit.email} onChange={onChange}/>
            </label>
            <br />
            <label>Address
                <input type="text" name="address" placeholder={userToEdit.address} defaultValue={userToEdit.address} onChange={onChange}/>
            </label>
            <br />
            <label>Password
                <input type="text" name="password" placeholder={userToEdit.password} defaultValue={userToEdit.password} onChange={onChange}/>
            </label>
            <br />
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
        <button class="btn btn-primary" onClick={() => navigate('/attendees')}>Back to Attendees List</button>
    </div>
}

export default AttendeePage;