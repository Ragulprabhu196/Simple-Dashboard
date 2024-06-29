// src/context/AdminOrganizationContext.js
import React, { createContext, useState } from 'react';

export const AdminOrganizationContext = createContext();

export const AdminOrganizationProvider = ({ children }) => {
  const [admins, setAdmins] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  const addAdmin = (admin) => {
    setAdmins([...admins, admin]);
  };

  const addOrganization = (organization) => {
    setOrganizations([...organizations, organization]);
  };

  return (
    <AdminOrganizationContext.Provider value={{ admins, organizations, addAdmin, addOrganization }}>
      {children}
    </AdminOrganizationContext.Provider>
  );
};
