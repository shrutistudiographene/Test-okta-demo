import './App.css';
import Navbar from './components/layout/Navbar';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/auth/Login';

import SecureRoute from './components/auth/SecureRoute';

const oktaAuth = new OktaAuth({
  issuer: 'https://trial-2354760.okta.com/oauth2/default',
  clientId: '0oa1ty7xiipJa2aXD697',
  redirectUri: window.location.origin + '/login/callback',
});

const App = () => {
  const navigate = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  const onAuthRequired = () => {
    console.log('in ');
    navigate('/Login');
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={onAuthRequired}
    >
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Dashboard' exact element={<SecureRoute path='/Dashboard' element={<Dashboard />} /> } />
            <Route path='/login/callback' component={LoginCallback} />
          </Routes>
        </div>
        {/*  */}
      </div>
    </Security>
  );
};

export default App;
