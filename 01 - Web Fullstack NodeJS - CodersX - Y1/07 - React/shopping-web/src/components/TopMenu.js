import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom';

import {CartContext} from '../contexts/Cart';

function TopMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand>
                <Link to="/">Shopping-web</Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                    <Link to="/products">Products</Link>
                </NavItem>
                <NavItem>
                    <CartContext.Consumer>
                      {context => `Cart(${context.cart.length})`}
                    </CartContext.Consumer>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
}

export default TopMenu;