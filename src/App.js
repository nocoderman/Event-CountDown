import './styles/App.css';
import "react-datepicker/dist/react-datepicker.css";
import Aot from "./components/Aot";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";

export const currentCredentials = React.createContext();

function App() {
  // const credentialState = useState('');
  const credentialState = useState({
    username: "robert",
    password: "123"
  });
  //^^temp(remove after changes)

  
  return (
    <div className="App">
      <currentCredentials.Provider value={credentialState}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/login" element={<Login/>}/>
          </Routes>
        </Router>
      </currentCredentials.Provider>
      {/* <div className="countdown-container">
        <div className="aot-container">
          <Aot/>
        </div>
      </div> */}
    </div>
  );
}

export default App;
