import React from "react";
import { useApiContext } from "./AppContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const AttendeePage = () => {
    //const { first_name, last_name, organization, phone, email, address, password} = attendee
    const { patchData, userToEdit, deleteData, attendeeData } = useApiContext();
    const { id } = useParams();

    console.log(userToEdit)

    // const [editForm, setEditForm] = useState({
    //     first_name: "",
    //     last_name: "",
    //     organization: "",
    //     phone: "",
    //     email: "",
    //     address: "",
    //     password: ""
    // })

    // const [initialForm, setInitialForm] = useState({});

    // useEffect(() => {
    //     // Set the initial form state when userToEdit changes
    //     setEditForm({
    //         first_name: first_name,
    //         last_name: last_name,
    //         organization: organization,
    //         phone: phone,
    //         email: email,
    //         address: address,
    //         password: password
    //     });
    
    //     // Save the initial form state for comparison
    //     setInitialForm({
    //         first_name: first_name,
    //         last_name: last_name,
    //         organization: organization,
    //         phone: phone,
    //         email: email,
    //         address: address,
    //         password: password
    //     });
    //   }, [userToEdit]);

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditForm({ ...editForm, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const hasChanged = Object.keys(editForm).some(
    //         (key) => editForm[key] !== initialForm[key]
    // );

    //     if (hasChanged) {
    //         patchData({ id: attendee.id, ...editForm });
    //     } else {
    //         console.log("No changes detected");
    //     }
    // };

    // const onDeleteClick = () => {
    //     console.log(attendee.id)
    // }
    // console.log(attendee)


    return <div>
        <h1>Attendee Details</h1>
        {/* <h2></h2>
        <button className="btton" onClick={onDeleteClick} value={userToEdit.id}>
          Delete User
        </button>
        <form className="edit-form" onSubmit={handleSubmit}>
            <label>First Name
                <input type="text" name="first_name" placeholder={first_name} defaultValue={first_name} onChange={onChange}/>
            </label>
            <br />
            <label>Last Name
                <input type="text" name="last_name" placeholder={last_name} defaultValue={last_name} onChange={onChange}/>
            </label>
            <br />
            <label>Organization
                <input type="text" name="organization" placeholder={organization} defaultValue={organization} onChange={onChange}/>
            </label>
            <br />
            <label>Phone
                <input type="text" name="phone" placeholder={phone} defaultValue={phone} onChange={onChange}/>
            </label>
            <br />
            <label>Email
                <input type="text" name="email" placeholder={email} defaultValue={email} onChange={onChange}/>
            </label>
            <br />
            <label>Address
                <input type="text" name="address" placeholder={address} defaultValue={address} onChange={onChange}/>
            </label>
            <br />
            <label>Password
                <input type="text" name="password" placeholder={password} defaultValue={password} onChange={onChange}/>
            </label>
            <br />
          <button className= "btton"type="submit">Submit</button>
        </form> */}
    </div>
}

export default AttendeePage;