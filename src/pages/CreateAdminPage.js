// src/pages/CreateAdminPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CreateAdminPage = ({ onCreate }) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(admin);
    navigate('/dashboard');
  };

  return (
    <FormContainer>
      <h2>Create Admin</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={admin.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={admin.address}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={admin.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={admin.phone}
          onChange={handleChange}
        />
        <Button type="submit">Create Admin</Button>
      </form>
    </FormContainer>
  );
};

export default CreateAdminPage;
