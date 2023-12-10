import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";


class App extends Component {
  render() {
    return (
      <div>
      <Router>
          <Routes>
          <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
           
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;