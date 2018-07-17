import React from 'react';

const IsAdmin = ({ children }) => {
  if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
    return children;
  } else {
    return null;
  }
};

export default IsAdmin;
