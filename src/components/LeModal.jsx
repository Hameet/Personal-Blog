import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Button } from 'react-bootstrap';
import './LeModal.css'

const style = {
  content: {
    border: '0',
    // borderRadius: '10px',
    bottom: '40%',
    height: '100px',  // set height
    left: '50%',
    padding: '20rem',
    // position: 'fixed',
    right: '50%',
    top: '20%', // start from center
    transform: 'translate(-80%,-' + ')', // adjust top "up" based on height
    width: '60%',
    maxWidth: '80rem'
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
        <button onClick={this.handleOpenModal}>Contact Info</button>
        <ReactModal 
           isOpen={this.state.showModal}
           style={style}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}