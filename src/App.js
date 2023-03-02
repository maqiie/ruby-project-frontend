import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/Home";
import SignUp from "./components/register";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

