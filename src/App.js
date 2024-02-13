import React, { useRef, useState } from 'react'

const App = () => {
    const [email,setEmail]=useState('');
    // const[password,setPassword]=useState('');
    const pwd = useRef();

  return (
    <>
    <div className='border w-25 mt-5 m-auto p-3'>
        <h2 className='text-primary text-center'>Login Form </h2>
        <div className='mt-3'>
            <label>Email</label>
            <input type='email' className='form-control' value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
      
        <div className='mt-3'>
            <label>Password</label>
            <input type='password' className='form-control' ref={pwd}
            />
        </div>

        <div className='mt-3'>
            <button className='btn btn-primary w-100' onClick={()=>{
              console.log('password:',pwd.current.value)

            }}>Login</button>
        </div>
      
      </div>
    </>
  )
}

export default App
