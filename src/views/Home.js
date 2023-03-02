import React, { Component } from 'react';
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
          <button
            onClick={this.logInClick}
            className="border border-gray-400 text-gray-700 font-bold py-2 px-4 mb-4 rounded-lg transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white"
          >
            Log in
          </button>
          <div className="mb-4 text-gray-600 font-bold">or</div>
          <button
            onClick={this.signUpClick}
            className="border border-gray-400 text-gray-700 font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
