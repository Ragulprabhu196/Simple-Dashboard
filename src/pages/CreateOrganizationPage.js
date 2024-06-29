// src/pages/CreateOrganizationPage.js
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

const CreateOrganizationPage = ({ onCreate }) => {
  const navigate = useNavigate();
  const [organization, setOrganization] = useState({
    name: '',
    address: '',
    description: ''
  });

  const handleChange = (e) => {
    setOrganization({ ...organization, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(organization);
    navigate('/dashboard');
  };

  return (
    <FormContainer>
      <h2>Create Organization</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Organization Name"
          value={organization.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={organization.address}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={organization.description}
          onChange={handleChange}
        />
        <Button type="submit">Create Organization</Button>
      </form>
    </FormContainer>
  );
};

export default CreateOrganizationPage;
