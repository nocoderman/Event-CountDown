import './styles/App.css';
import Aot from "./components/Aot";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      {/* <div className="countdown-container">
        <div className="aot-container">
          <Aot/>
        </div>
      </div> */}
    </div>
  );
}

export default App;
