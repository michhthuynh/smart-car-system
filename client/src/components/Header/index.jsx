import React, { useState } from 'react';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavLink } from 'reactstrap';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    window.location.reload();
  }
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Smart Car System</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Button onClick={logout} color='primary'>Logout</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;