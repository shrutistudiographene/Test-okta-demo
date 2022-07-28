/* eslint-disable import/no-anonymous-default-export */

export default {
  oidc: {
    issuer: 'https://trial-2354760.okta.com/oauth2/default',
    clientId: '0oa1ty7xiipJa2aXD697',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: `${window.location.origin}/login/callback`,
    pkce: true,
    useInteractionCodeFlow:true
  },
  widget: {
    issuer: 'https://trial-2354760.okta.com/oauth2/default',
    clientId: '0oa1ty7xiipJa2aXD697',
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ['openid', 'profile', 'email'],
    useInteractionCodeFlow: true,
  },
};
