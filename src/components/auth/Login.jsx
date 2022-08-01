import React from 'react';
import { Navigate } from 'react-router-dom';
import SignInWidget from './SignInWidget';
import { useOktaAuth } from '@okta/okta-react';

const Login = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log('Sign in error:', err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }
    console.log('in Login');
  return authState.isAuthenticated ?
    <Navigate to='/Dashboad'/> :
    <SignInWidget config={config} onSuccess={onSuccess} onError={onError}/>;
};

export default Login;