import React, { useState } from "react";

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
        .then(() => {})
        .catch((error) => {
            setError(error.message);
        })
    }
    return(
        <div>
            SignUp Page!
            {error}
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