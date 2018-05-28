import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Button } from 'react-bootstrap';
import './LeModal.css'


const style = {
  content: {
    border: '0',
    borderRadius: '10px',
    bottom: '20%',
    height: '100px',  // set height
    left: '30%',
    padding: '20rem',
    position: 'fixed',
    right: '50%',
    top: '20%', // start from center
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
        <button onClick={this.handleOpenModal}>Contact Info</button>
        <ReactModal 
           isOpen={this.state.showModal}
           style={style}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false}
        >
          <div className="modal-header">
          <h1>Photos courtesty of
          <a href="http://lostfoundpets.herokuapp.com/#/" target="_blank" className="fa fa-instagram"></a></h1>
          </div>
          <div className="modal-footer">
          <h1>Contact</h1>
          <a href="http://lostfoundpets.herokuapp.com/#/" target="_blank" className="fa fa-github"></a> <br/>
          <a href="http://lostfoundpets.herokuapp.com/#/" target="_blank" className="fa fa-linkedin"></a>
          </div>
          
          
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}