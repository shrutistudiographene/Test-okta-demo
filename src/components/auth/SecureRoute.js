import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import Login from './Login';

const RequireAuth = ({ children }) => {
    console.log('children', children);
  const { authState } = useOktaAuth();
  console.log('authState', authState);
  if (!authState.isAuthenticated) {
    return <Login />
  }

  return <React.Fragment>{children}</React.Fragment>;
};

const SecureRoute = ({ element, ...props }) => {
    console.log('element', element);
  const WrappedComponent = (wrappedProps) => <RequireAuth>{element}</RequireAuth>;
  return <WrappedComponent />
};

export default SecureRoute;