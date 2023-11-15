import React, { useState, useEffect } from 'react';

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showReportModal, setShowReportModal] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    const openReportModal = (user) => {
        setSelectedUser(user);
        setShowReportModal(true);
    };

    const closeReportModal = () => {
        setShowReportModal(false);
    };

    const generateReport = () => {
        console.log('Generating report for user:', selectedUser);

        console.log('Report generated successfully!');
    };

    return (
        <div>
            <h2>User Details</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                { }
                <thead>
                    <tr style={{ background: '#3498db', color: '#fff' }}>
                        <th style={{ padding: '10px' }}>Username</th>
                        <th style={{ padding: '10px' }}>Email</th>
                        <th style={{ padding: '10px' }}>Phone</th>
                        <th style={{ padding: '10px' }}>ID</th>
                        <th style={{ padding: '10px' }}>Creation Date</th>
                    </tr>
                </thead>


                <tbody>

                    {users.map((user) => (
                        <tr
                            key={user.id}
                            onClick={() => openReportModal(user)}
                            style={{ cursor: 'pointer', borderBottom: '1px solid #ddd' }}
                        >
                            <td style={{ padding: '10px' }}>{user.username}</td>
                            <td style={{ padding: '10px' }}>{user.email}</td>
                            <td style={{ padding: '10px' }}>{user.phone}</td>
                            <td style={{ padding: '10px' }}>{user.id}</td>
                            <td style={{ padding: '10px' }}>{user.creationDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showReportModal && (
                <div style={{ marginTop: '20px' }}>
                    <div>
                        <h3>User Report</h3>
                        <p>Username: {selectedUser.username}</p>
                        <p>Email: {selectedUser.email}</p>
                        <p>Phone: {selectedUser.phone}</p>

                    </div>
                    <button
                        style={{ padding: '10px', background: '#3498db', color: '#fff', border: 'none', cursor: 'pointer' }}
                        onClick={generateReport}
                    >
                        Generate Report
                    </button>
                    <button
                        style={{ padding: '10px', background: '#e74c3c', color: '#fff', border: 'none', cursor: 'pointer', marginLeft: '10px' }}
                        onClick={closeReportModal}
                    >
                        Close Report
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
