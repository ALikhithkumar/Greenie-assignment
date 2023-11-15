// App.js
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import AccountCreation from '../../AccountCreation';

const App = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <div className="tabs" style={{ display: 'flex', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('userDetails')}
          style={{ flex: 1, padding: '10px', backgroundColor: activeTab === 'userDetails' ? '#3498db' : '#2c3e50', color: '#fff', border: 'none' }}
        >
          User Details
        </button>
        <button
          onClick={() => setActiveTab('accountCreation')}
          style={{ flex: 1, padding: '10px', backgroundColor: activeTab === 'accountCreation' ? '#3498db' : '#2c3e50', color: '#fff', border: 'none' }}
        >
          Account Creation
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'userDetails' && <UserDetails />}
        {activeTab === 'accountCreation' && <AccountCreation />}
      </div>
    </div>
  );
};

export default App;
