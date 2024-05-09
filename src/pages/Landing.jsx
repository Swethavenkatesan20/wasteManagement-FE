import React from 'react';
import { Outlet } from 'react-router-dom'; 
import '../styles.css'


const Landing = () => {
  return (
    <div className="container-fluid bgImage">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-8 text-center">
          <h1 className="display-4 fw-bold">waste management</h1>
          <h3>Welcome waste management</h3>
          <p className="lead">
            to continue with the application <strong>Register</strong> or <strong>login</strong> to get started.
          </p>
          {/* Render child routes using Outlet */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Landing;
