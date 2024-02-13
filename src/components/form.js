import React from 'react'

const form = () => {
  return (
    <>
     <div className='border w-25 mt-5 m-auto p-3'>
        <h2 className='text-primary text-center'>Login Form </h2>
        <div className='mt-3'>
            <label>Email</label>
            <input type='email' className='form-control'/>
        </div>
      
        <div className='mt-3'>
            <label>Password</label>
            <input type='password' className='form-control' 
            />
        </div>

        <div className='mt-3'>
            <button className='btn btn-primary w-100' o>Login</button>
        </div>
      
      </div>
      
    </>
  )
}

export default form

    
  