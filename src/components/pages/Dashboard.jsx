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

        <button className='btn btn-light btn-lg'>
            <a href="https://trial-2354760.okta.com/signin/forgot-password">forgot password</a> 
        </button>
    </div>;
}

export default Dashboard;
// https://abc.xyz.com/forgetpwd 
// example.app.com/signin/password-reset
// https://trial-2354760.okta.com/signin/forgot-password