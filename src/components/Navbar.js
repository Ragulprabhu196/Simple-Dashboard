// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
  width: 100%;
  background-color: #007bff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 60px;
`;

const NavbarBrand = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavbarButton = styled.button`
  background-color: #ff4757;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e84118;
  }
`;

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <NavbarContainer>
      <NavbarBrand>System Administration</NavbarBrand>
      <NavbarButton onClick={handleLogout}>Logout</NavbarButton>
    </NavbarContainer>
  );
};

export default Navbar;
