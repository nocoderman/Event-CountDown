import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { currentCredentials } from "../App";
import Aot from "./Aot";
import CreateEvent from "./CreateEvent";

export default function HomePage(){
    const [credentials] = useContext(currentCredentials);
    return(
        <div>
            <div className="credentials-container">
                <h1>
                    Hello {credentials && credentials.username}
                </h1>
            </div>
            {!credentials && <Link to="/login">Login</Link>}
            <br/>
            {!credentials && <Link to="/signup">Sign Up!</Link>}
            
            {/**
             * Event Countdown 
             */}
            {credentials &&
                <div className="countdown-container">
                    {/* <div className="aot-container">
                        <Aot/>
                    </div> */}
                    <CreateEvent/>
                </div>
            }
        </div>
    );
}