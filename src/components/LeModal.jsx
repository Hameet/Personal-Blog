import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Button, Col } from 'react-bootstrap';
import './LeModal.css'


const style = {
  content: {
    border: '0',
    borderRadius: '10px',
    bottom: '35%',
    height: '200px',  // set height
    left: '30%',
    padding: '20rem',
    position: 'fixed',
    right: '50%',
    top: '30%', // start from center
    transform: 'translate(-90%,-' + ')', // adjust top "up" based on height
    width: '60%',
    maxWidth: '80rem',
    overflow: 'none',
    background: 'palevioletred'
  }
};

export default class LeModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div className="modal-container">
        <strong><button onClick={this.handleOpenModal}>Contact Info</button></strong>
        <ReactModal 
           isOpen={this.state.showModal}
           style={style}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false}
        >
          <Col xs={3} md={6}>
          <div className="modal-header">
          
          <h5>Photos courtesty of
          <a href="https://www.instagram.com/jassyboparai/" target="_blank" className="fa fa-instagram"></a>
          </h5>
          </div>
          
          <div className="modal-footer">
          <h5>Contact</h5>
          <a href="https://github.com/Hameet" target="_blank" className="fa fa-github"></a> <br/>
          <a href="https://www.linkedin.com/in/hameet-boparai-79951827/" target="_blank" className="fa fa-linkedin"></a>
         
          </div>
          </Col>

          <strong><button onClick={this.handleCloseModal}>Close Modal</button></strong>
          
        </ReactModal>
      </div>
    );
  }
}