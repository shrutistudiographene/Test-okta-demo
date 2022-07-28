import React, { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import config from './Config';

const SignInWidget = ({ onSuccess, onError }) => {
  const widgetRef = useRef();
  useEffect(() => {
    if (!widgetRef.current) {
      return false;
    }
      const widget = new OktaSignIn(config.widget);
      console.log('widget', widget);
    // Search for URL Parameters to see if a user is being routed to the application to recover password
    var searchParams = new URL(window.location.href).searchParams;
    widget.otp = searchParams.get('otp');
    widget.state = searchParams.get('state');
    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(onSuccess)
      .catch(onError);

       // Note: Can't distinguish CORS error from other network errors
    const isCorsError = (err) => err?.name === "AuthApiError" && !err.statusCode;
  
      widget.on("afterError", (_context, error) => {
        if (isCorsError(error)) {
          console.log(error?.message);
        }
      });

    return () => widget.remove();
  }, [onSuccess, onError]);

  return <div ref={widgetRef} />;
};

export default SignInWidget;
