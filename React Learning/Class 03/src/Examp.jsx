import React from 'react'
import { useState, useEffect } from 'react'
const Examp = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
            .then(data => setUsers(data));
        console.log("click")
    }, [])

    return (
        <>
            <h2>Users</h2>
            {users.map(user => (
                <ul>
                    <li key={user.id}>
                        {user.name} , {user.email}
                    </li>
                </ul>
            ))}
        </>
    )
}

export default Examp