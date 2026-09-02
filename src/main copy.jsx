import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './icons-slider.css'
import { AuthProvider } from './context/AuthContext';   // ✅ import

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>          
      <App />
    </AuthProvider>
  </BrowserRouter>
);
