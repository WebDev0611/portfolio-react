import React, { Component } from 'react';
import './styles.scss';

class GetEmail extends Component {
  
  state = {
    username: '',
    useremail: '',
    getStarted: false
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  isUserNameValid = () => {
    const { username, getStarted } = this.state;
    if(getStarted && username.length < 2)
      return 'error';
    else
      return 'success';
  }

  isUserEmailValid = () => {
    const { useremail, getStarted } = this.state;
    if(getStarted && (!this.emailValidate(useremail) || useremail.length < 2))
      return 'error';
    else 
      return 'success';
  }

  emailValidate = email => {
    let re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleGetStarted = e => {
    e.preventDefault();
    const { username, useremail } = this.state;
    let data = { username, useremail }
    this.setState({ getStarted: true }, () => {
      if(this.isUserNameValid() === 'success' && this.isUserEmailValid() === 'success') {
        this.props.postUserInfo(data);
        this.backendResponse();
      }
    })
  }

  backendResponse = () => {
    if(localStorage.users) {
      this.props.history.push('/get-company-info')
    }
  }

  render() {
    const { username, useremail } = this.state;

    return (
      <div>
        <div id="container">
          <div className="main">
            <div className="logo-container">
              <img src={'/images/square-logo@3x.png'} alt="logo-image" />
            </div>
            <div className="info-panel">
              <div className="title">Create Account</div>
              <form name="form" onSubmit={ this.handleGetStarted }>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="username"
                    value={ username }
                    onChange={ this.handleChange }
                  />
                  { this.isUserNameValid() === 'error' &&
                    <div className="help-block">The length of username should be at least 2</div>
                  }
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="useremail"
                    value={ useremail }
                    onChange={ this.handleChange }
                  />
                  { this.isUserEmailValid() === 'error' &&
                    <div className="help-block">User Email is Invalid</div>
                  }
                </div>
                <div className="form-group">
                  <button className="btn btn-success">Get Started</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetEmail;
