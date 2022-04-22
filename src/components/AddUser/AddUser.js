import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        // Send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
            })
    }
    return (
        <div>
            <h1>Please Add a New User</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" placeholder='Name' required />  <br />
                <input type="email" name="email" id="" placeholder='Email' required />  <br />
                <input type="submit" value="Add User" />

            </form>
        </div>
    );
};

export default AddUser;