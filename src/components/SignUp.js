import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { currentCredentials } from "../App";


const handleErrors = async (response) => {
    if (!response.ok){
        const { message } = await response.json();
        throw Error(message);
    }
    return response.json();
}

export default function SignUp(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [, setCredentials] = useContext(currentCredentials);


    const signUp = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
            .then(handleErrors)
            .then(() => {
                setCredentials({
                    username,
                    password,
                });
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const navigate = useNavigate();

    return(
        <div>
            SignUp Page!
            {error && <span style={{color : 'purple'}}>{error}</span>}
            <form onSubmit={signUp}>
                <input onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"/>
                <br/>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"/>
                <br/>
                <button type="submit"> Sign Up</button>
            </form>
        </div>
    );
}