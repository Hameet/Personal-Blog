import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React+Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
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
</Navbar>
    )
  }
}