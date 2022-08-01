import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();

  if (!authState) {
    return <div>Loading ...</div>;
  }

  const handleLogin = async () => navigate('/login');

  const handleLogout = async () => oktaAuth.signOut();

  return (
    <div id='home'>
      {authState.isAuthenticated ? (
        <div>
          <p className='lead'>You are in home Page </p>
          <button className='btn btn-light btn-lg' onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className='lead'>please get your credentials </p>
          <button className='btn btn-dark btn-lg' onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
