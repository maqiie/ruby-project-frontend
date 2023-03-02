import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Logo from '../assets/logo.png';

class Home extends Component {
  logInClick = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/login');
  };

  signUpClick = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/signup');
  };

  componentDidMount() {
    if (localStorage.token) {
      const { history } = this.props;
      history.push('/projects');
    }
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="flex flex-col items-center">
          <img className="h-32 mb-8" id='home-logo' src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-col items-center">
          <Button
            onClick={this.logInClick}
            variant="outline-secondary"
            size="lg"
            className="mb-4"
          >
            Log in
          </Button>
          <div className="mb-4 text-gray-600 font-bold">or</div>
          <Button
            onClick={this.signUpClick}
            variant="outline-secondary"
            size="lg"
          >
            Sign Up
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
