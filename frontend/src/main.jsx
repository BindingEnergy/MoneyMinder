import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { GlobalProvider } from './context/globalContext.jsx';


const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;
const publishableKey = VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ClerkProvider>
  </StrictMode>
);