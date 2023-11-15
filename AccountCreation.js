import React, { useState } from 'react';

const AccountCreation = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = () => {
        fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Account created successfully:', data);

            })
            .catch((error) => console.error('Error creating account:', error));
    };

    return (
        <div>
            <h2>Account Creation</h2>
            <form onSubmit={createAccount}>
                <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                    required
                />

                <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                    required
                />

                <button type="submit" style={{ padding: '10px', background: '#3498db', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default AccountCreation;
