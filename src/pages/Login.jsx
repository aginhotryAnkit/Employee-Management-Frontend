import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { handleError, handleSuccess } from '../util'

function LoginInfo() {

    const [loginInfo, setloginInfo] = useState({
        email:'',
        password:''
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        console.log(name,value);
        const copyloginInfo = {...loginInfo}
        copyloginInfo[name] = value;    
        setloginInfo(copyloginInfo)
    }

    const handleSignup = (e)=>{
        e.preventDefault();
        const {email,password} = loginInfo;
        if(!email || !password){
            return handleError('email,password are required!')
        }
        return handleSuccess('Signup Successfull!')
    }
  return (
    <>
      <h1 className='welcome-heading text-center text-3xl font-semibold'>Welcome to the HR Portal</h1>
      <div className="custom-container">
      <h1>Login</h1>
      <form className='form' onSubmit={handleSignup}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type="email" placeholder="Enter your email..." name='email' autoFocus
          onChange={handleChange} value={loginInfo.email}
          />
        </div>

        <div>
          <label htmlFor='password'>Password:</label>
          <input type="password" placeholder="Enter your password..." name='password' 
          onChange={handleChange} value={loginInfo.password}
          />
        </div>

        <button className='authbutn'>
          Login
        </button>

        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
    
    </>
  )
}

export default LoginInfo