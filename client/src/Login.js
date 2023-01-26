import React, { useState } from 'react';


function Login({onLogin, onLogout}){

const [email, setEmail] = useState("")

function handleSubmit(e) {
e.preventDefault()
fetch("/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({email}),
}).then((response) => {
    if (response.ok) {
        response.json().then((user) => onLogin(user))
    }
});
}

function handleLogout(){
    fetch("/logout", {
        method: "DELETE",
    })
    .then(() => onLogout())
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name= "email" 
                placeholder="email" 
                value={email} 
                onChange ={(e) => setEmail(e.target.value)}></input>
                <button type="submit">Login</button>
            </form>
            <button onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default Login;