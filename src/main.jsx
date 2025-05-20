// src/index.js or src/index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap the entire App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
