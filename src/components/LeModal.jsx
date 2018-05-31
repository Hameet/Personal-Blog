import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import { Button, Col } from 'react-bootstrap';
import './LeModal.css'


const modalStyle = {
  fontFamily: "sans-serif",
  textAlign: "left",
  width: "90%"
};

export default class LeModal extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.state = {
      open: false,
    };
  }
 
  onOpenModal() {
    this.setState({ open: true });
  }
 
  onCloseModal() {
    this.setState({ open: false });
  }
 
  render() {
    const { open } = this.state;
    return (
      <div style={modalStyle}>
        <button class="btn btn-primary btn-lg btn-block" onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} little style={modalStyle} >
          
          <div className="modal-header">
          
          <h5>Photos courtesty of
          <a href="https://www.instagram.com/jassyboparai/" target="_blank" className="fa fa-instagram"></a>
          </h5>
          </div>
          
          <div className="modal-footer">
          <h5>Contact
          <a href="https://github.com/Hameet" target="_blank" className="fa fa-github"></a> <br/>
          <a href="https://www.linkedin.com/in/hameet-boparai-79951827/" target="_blank" className="fa fa-linkedin"></a></h5>
         
          </div>
        </Modal>
      </div>
    );
  }
}