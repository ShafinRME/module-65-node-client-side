import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this content');
        if (proceed) {
            console.log('deleting user with id', id);
        }

    }

    return (
        <div>
            <h2>Available Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >Name: {user.name} Email: {user.email}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Home;