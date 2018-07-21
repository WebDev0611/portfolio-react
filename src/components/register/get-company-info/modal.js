import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    width       : '380px',
    height      : '386px',
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)',
    border      : 'white'
  }
};

class ConfigModal extends Component {

  state = {
    modalIsOpen: false
  }

  componentWillMount() {
    this.setState({ modalIsOpen: this.props.openModal })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Success Modal"
      > 
        <div className="modal-background">
          <div className="logo-div"><img className="modal-logo" src={'/images/square-logo@3x.png'} alt="logo-image" /></div>
          <div className="body-modal">
            <h2 className="modal-h2-1">Congratulations!</h2>
            <h2 className="modal-h2-2">Your account has <br /> been created.</h2>
            <p className="modal-p">Please verify [USER EMAIL<br /> ADDRESS] via the link in your<br />inbox.</p>
            <Link to="/"><button  className="modal-btn" onClick={this.closeModal}>Continue Registration</button></Link>
          </div>
        </div>
      </Modal>  
    )
  }
}

export default ConfigModal;