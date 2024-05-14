import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import { NavLink } from 'react-router-dom';
import heroLeft from "../assets/images/hero-left.svg"
import heroRight from "../assets/images/hero-right.svg"

function Login() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const onUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const onPwdChange = (e) => {
        setPassword(e.target.value)
    }


    return (

        <>
            <Navbar />
            <div className='form__container'>
                <h1>Login</h1>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => onUserNameChange(e)}
                    placeholder='username'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => onPwdChange(e)}
                    placeholder='password'
                />
                <button> Login </button>
                <NavLink to={"/register"}> Not registered </NavLink>
                <img src={heroLeft} className='hero__left' alt="hero-left" />
                <img src={heroRight} className='hero__right' alt="hero-right" />
            </div>
        </>
    );
}

export default Login;