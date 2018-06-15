import React, { Component } from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap';
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
    <strong>Home</strong>
    </NavItem>
      
    <NavItem eventKey={2} href="/about">
    <strong>About</strong>
    </NavItem>
    <NavItem eventKey={3} href="/news">
    <strong>Phase-0</strong>
    </NavItem>
  </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}