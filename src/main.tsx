import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ServicesComponent from './components/ServicesComponent.tsx'
import './index.css';
import AppRouter from './AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>
);
