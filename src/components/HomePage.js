import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { currentCredentials } from "../App";

export default function HomePage(){
    const [credentials] = useContext(currentCredentials);
    return(
        <div>
            <div className="credentials-container">
                <h1>
                    Hello {credentials && credentials.username}
                </h1>
            </div>
            {!credentials && <Link to="/signup">Sign Up!</Link>}
        </div>
    );
}