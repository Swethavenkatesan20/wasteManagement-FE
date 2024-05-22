import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles.css';

const Dashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Waste Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/dashboard/profile">user profile</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/wastedisposal">Waste Disposal</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/effects">Effects </Nav.Link>
            <Nav.Link as={Link} to="/dashboard/reviews">User comments</Nav.Link>
            



          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Dashboard;
