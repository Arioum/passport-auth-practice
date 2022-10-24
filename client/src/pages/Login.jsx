import React, { useState } from 'react'
import Axios from "axios"

const Login = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);

    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        }).then((res) => console.log(res));
    };

    const google = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    };

    const facebook = () => {
        window.open("http://localhost:4000/auth/facebook", "_self");
    };
    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                        Facebook
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)} />
                    <input type="text" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} />
                    <button className="submit" onClick={register}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login