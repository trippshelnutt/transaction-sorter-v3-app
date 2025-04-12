import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transactions from './Transactions';
import NotFound from './NotFound';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import './App.css';

export default function App() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="app-picker">
        <header className="app-picker-header">
          <p>Please log in to continue</p>
        </header>
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
