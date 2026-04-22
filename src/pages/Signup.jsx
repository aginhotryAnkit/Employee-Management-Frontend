import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { handleError, handleSuccess } from '../util'

function Signup() {

    const [signupInfo, setsignupInfo] = useState({
        name: '',
        email:'',
        password:''
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        console.log(name,value);
        const copySignupInfo = {...signupInfo}
        copySignupInfo[name] = value;    
        setsignupInfo(copySignupInfo)
    }

    const handleSignup = (e)=>{
        e.preventDefault();
        const {name,email,password} = signupInfo;
        if(!name || !email || !password){
            return handleError('name,email,password are required!')
        }
        return handleSuccess('Signup Successfull!')
    }
  return (
    <>
      <h1 className='welcome-heading text-center text-3xl font-semibold'>Welcome to the HR Portal</h1>
          <div className="custom-container">
              <h1>Signup</h1>
              <form className='form' onSubmit={handleSignup}>
                  <div>
                      <label htmlFor='name'>Name:</label>
                      <input type="text" placeholder="Enter your name..." name='name' autoFocus
                          onChange={handleChange} value={signupInfo.name}
                      />
                  </div>

                  <div>
                      <label htmlFor='email'>Email:</label>
                      <input type="email" placeholder="Enter your email..." name='email' autoFocus
                          onChange={handleChange} value={signupInfo.email}
                      />
                  </div>

                  <div>
                      <label htmlFor='password'>Password:</label>
                      <input type="password" placeholder="Enter your password..." name='password'
                          onChange={handleChange} value={signupInfo.password}
                      />
                  </div>

                  <button className='authbutn'>
                      Signup
                  </button>

                  <span>
                      Already have an account? <Link to="/login">Login</Link>
                  </span>
              </form>

              <ToastContainer />
          </div>
    </>
  )
}

export default Signup