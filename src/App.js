import './styles/App.css';
import Aot from "./components/Aot";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";

export const currentCredentials = React.createContext();

function App() {
  const credentialState = useState('');
  
  return (
    <div className="App">
      <currentCredentials.Provider value={credentialState}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
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
