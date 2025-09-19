import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import "./index.css"; 
import PartyPresentation from './pages/PartyPresentation.jsx'
import MainPage from './pages/MainPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/presentation" element={<PartyPresentation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
