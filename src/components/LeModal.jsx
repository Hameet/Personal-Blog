import React from 'react'
import Modal from 'react-responsive-modal'
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
        <button className="btn btn-primary btn-lg btn-block" onClick={this.onOpenModal}>Contact Info</button>
        <Modal open={open} onClose={this.onCloseModal} style={modalStyle} >
         
          <div className="modal-footer">
            <h5>Contact</h5>
              <a className="project-link" href="https://github.com/Hameet" target="_blank" className="fa fa-github"></a>
              <a className="project-link" href="https://www.linkedin.com/in/hameet-boparai-79951827/" target="_blank" className="fa fa-linkedin"></a>
          </div>
        </Modal>
      </div>
    );
  }
}