import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
  <Navbar.Header>
    
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav pullRight>
      
    <NavItem eventKey={1} href="/">
      <h9>Home</h9>
    </NavItem>
      
    <NavItem eventKey={2} href="/about">
      <h9>About</h9>
    </NavItem>
    <NavItem eventKey={3} href="/news">
      <h9>Phase-0</h9>
    </NavItem>
  </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}