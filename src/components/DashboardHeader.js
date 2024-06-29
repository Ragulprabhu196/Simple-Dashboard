// src/components/DashboardHeader.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
  border-bottom: 1px solid #e8e8e8;
`;

const DashboardHeader = () => {
  return (
    <HeaderContainer>
      <h2>Current Statistics</h2>
      {/* Add your statistics here */}
    </HeaderContainer>
  );
};

export default DashboardHeader;
