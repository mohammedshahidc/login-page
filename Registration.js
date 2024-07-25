import React from 'react'
import { useNavigate } from 'react-router-dom'


const Registration = () => {
    const navigate= useNavigate()
    const goLoginpage=()=>{
        navigate('/Login')
    }
    return (
        <div className='main'>
            <div className='form'>
                <h1>Registration page</h1>
                <form>
                    <div className='name'>
                        <label>First Name:</label>
                        <input type='text' placeholder='enter your first name' required></input>
                    </div>
                    <div className='secondname'>
                        <label>Second Name:</label>
                        <input type='text' placeholder='enter your second name'></input>
                    </div>
                    <div className='email'>
                        <label>Email:</label>
                        <input type='email' placeholder='enter your email'></input>
                    </div>
                    <div className='password'>
                        <label>Password:</label>
                        <input type='password' placeholder='enter password'></input>
                    </div>
                    <div className='cpassword'>
                        <label>Conform password</label>
                        <input type='password' placeholder='conform password'></input>
                    </div>
                </form>
                <button id='reg' onClick={goLoginpage}>submit</button>
            </div>
        </div>
    )
}

export default Registration
