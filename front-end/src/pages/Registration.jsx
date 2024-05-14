import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import { NavLink, useNavigate } from 'react-router-dom';
import heroLeft from "../assets/images/hero-left.svg"
import heroRight from "../assets/images/hero-right.svg"
import { server_url } from '../utils/utils';


function Registration() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const onPwdChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = async () => {

        const credentials = {
            username,
            password
        }

        const result = await fetch(`${server_url}/auth/register`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

        const data = await result.json()
        if (data) return navigate('/login')
    }

    return (

        <>
            <Navbar />
            <div className='form__container'>
                <h1>Register</h1>
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
                <button onClick={handleRegister}> Sign up </button>
                <NavLink to={"/login"}> Already registered </NavLink>
                <img src={heroLeft} className='hero__left' alt="hero-left" />
                <img src={heroRight} className='hero__right' alt="hero-right" />
            </div>
        </>
    );
}

export default Registration;