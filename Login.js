import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigateHome = useNavigate()
    const goHome = () => {
        navigateHome('/Home')
    }
    return (
        <div>
            <div className='cform'>

                <div className='ccform'>
                    <h1>Login for continue</h1>
                    <div className='username'>
                        <label>User name:</label>
                        <input type='text' placeholder='enter user name'></input>
                    </div>
                    <div className='email'>
                        <label>Email:</label>
                        <input type='email' placeholder='enter your email'></input>
                    </div>
                    <div className='lopass'>
                        <label>password</label>
                        <input type='password' placeholder='enter pass word'></input>
                    </div>
                    <button id='reg' onClick={goHome}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
