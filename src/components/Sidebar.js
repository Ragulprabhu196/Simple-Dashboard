// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #333;
  height: 100vh;
  position: fixed;
  top: 60px; /* Align with navbar height */
  left: 0;
  padding-top: 20px;
  color: white;
`;

const SidebarItem = styled.div`
  padding: 20px;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background-color: #444;
  }
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ddd;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <SidebarLink to="/dashboard">Dashboard</SidebarLink>
      </SidebarItem>
      <SidebarItem>
        <SidebarLink to="/create-admin">Create Admin</SidebarLink>
      </SidebarItem>
      <SidebarItem>
        <SidebarLink to="/create-organization">Create Organization</SidebarLink>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
