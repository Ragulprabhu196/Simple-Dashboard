// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CreateAdminPage from './pages/CreateAdminPage';
import CreateOrganizationPage from './pages/CreateOrganizationPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const ContentContainer = styled.div`
  margin-left: 250px; /* Sidebar width */
  margin-top: 60px; /* Navbar height */
  padding: 20px;
  background-color: #f4f6f8;
  min-height: 100vh;
`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  const handleCreateAdmin = (admin) => {
    setAdmins((prevAdmins) => [...prevAdmins, admin]);
  };

  const handleCreateOrganization = (organization) => {
    setOrganizations((prevOrganizations) => [...prevOrganizations, organization]);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        {isAuthenticated && <Sidebar />}
        <ContentContainer>
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            {isAuthenticated ? (
              <>
                <Route
                  path="/dashboard"
                  element={<DashboardPage admins={admins} organizations={organizations} />}
                />
                <Route
                  path="/create-admin"
                  element={<CreateAdminPage onCreate={handleCreateAdmin} />}
                />
                <Route
                  path="/create-organization"
                  element={<CreateOrganizationPage onCreate={handleCreateOrganization} />}
                />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </ContentContainer>
      </div>
    </Router>
  );
}

export default App;
