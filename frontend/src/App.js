import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './pages/LoginSignupPage';
import TaskManagement from './pages/TaskManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginSignup />} />
        <Route exact path="/TaskManagement" element={<TaskManagement />} />

      </Routes>
    </Router>
  );
}

export default App;
