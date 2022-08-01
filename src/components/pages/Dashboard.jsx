import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Dashboard = () => {
    console.log('useOktaAuth', useOktaAuth())
    const { authState } = useOktaAuth();
    const [currentUserName] = useState(authState?.idToken?.claims?.name);
    const [currentUserEmail] = useState(authState?.idToken?.claims?.email);
    return <div>
        <h1>Dashboard</h1>
        <p>Name :{currentUserName}</p>
        <p>Email : {currentUserEmail}</p>
    </div>;
}

export default Dashboard;