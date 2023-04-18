import React, { useState } from "react";

export default function SignUp(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
    }
    return(
        <div>
            SignUp Page!
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