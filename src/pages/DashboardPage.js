// src/pages/DashboardPage.js
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f4f6f8;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #007bff;
  border-radius: 8px;
  color: white;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Stat = styled.div`
  padding: 20px;
  background-color: #0056b3;
  border-radius: 8px;
  text-align: center;
  color: white;
`;

const TableContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const DashboardPage = ({ admins, organizations }) => {
  return (
    <DashboardContainer>
      <Header>
        <h2>Current Statistics</h2>
        <Stats>
          <Stat>
            <h3>Admins</h3>
            <p>{admins.length}</p>
          </Stat>
          <Stat>
            <h3>Organizations</h3>
            <p>{organizations.length}</p>
          </Stat>
        </Stats>
      </Header>
      <TableContainer>
        <h3>Admins</h3>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index}>
                <Td>{admin.name}</Td>
                <Td>{admin.address}</Td>
                <Td>{admin.email}</Td>
                <Td>{admin.phone}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <h3>Organizations</h3>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Description</Th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((organization, index) => (
              <tr key={index}>
                <Td>{organization.name}</Td>
                <Td>{organization.address}</Td>
                <Td>{organization.description}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </DashboardContainer>
  );
};

export default DashboardPage;
