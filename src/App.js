import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';

import SignUp from "./components/register";
import Footer from "./views/Footer";
import LandingPage from "./components/landingPage";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route exact path="/" component={LandingPage} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

