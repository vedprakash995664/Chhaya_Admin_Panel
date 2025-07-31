import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Admin/Dashboard';
import SMM from './Pages/Admin/SSM'
import Login from './Pages/Admin/Login';
import StaffHead from './Pages/Admin/StaffHead';
import Zone from './Pages/Admin/Settings/Zone';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Login Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route path="/social-media-manager" element={
          <Dashboard>
            <SMM />
          </Dashboard>
        } />
        <Route path="/staffHead" element={
          <Dashboard>
            <StaffHead />
          </Dashboard>
        } />






          {/* //inner  side */}

          
        <Route path="/settings/zone" element={
          <Dashboard>
            <Zone />
          </Dashboard>
        } />





        {/* You can add more like this */}
        {/* <Route path="/settings" element={<Dashboard><Settings /></Dashboard>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
