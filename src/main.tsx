import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-r0soh4nzbzdmqtp3.us.auth0.com"
      clientId="T4zCQQEGl6NbV8l3CUanMMQkGyd3YC7E"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
