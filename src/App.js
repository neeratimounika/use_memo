import React,{useState} from 'react'

const App = () => {

  
  const [email,setEmail] = useState('');
  // const[password,setPassword]=useState('');
  const [password,setPassword] = useState('');
  
  const [errors,setErrors] = useState({
    email:'',
    password:''
  })
  
  const emailPattern = /^[a-zA-Z0-9,_%+-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,}$/;
  
  
  function handleSubmit(){
  
    if(email.trim()===''){
      setErrors((errors)=>({...errors,email:'Enter email address'}))
    }
  
    else if(!emailPattern.test(email)){
      setErrors((errors)=>({...errors,email:'Enter Valid email address'}))
  
    }
    else{
      setErrors((errors)=>({...errors,email:''}))
    }
  
    if(password.trim()===''){
      setErrors((errors)=>({...errors,password:'Enter Valid password'}))
    }
  
    else if(password.trim().length<8){
      setErrors((errors)=>({...errors,password:'Password min8 characters'}))
  
  
    }
    else{
      setErrors({...errors,password:''})
    }
  
  }

   return(
    <>
<div className='border w-25 mt-5 m-auto p-3'>
<h2 className='text-primary text-center'>Login Form </h2>
  <div className='mt-3'>
  <label>Email</label>
        <input type='email' className='form-control' value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
          {errors.email&& <span className='text-danger'>{errors.email}</span>}
        </div>
      

<div className='mt-3'>
<label>Password</label>
<input type='password' className='form-control' value={password}
onChange={(e)=>{setPassword(e.target.value)}}/>
  {errors.password&& <span className='text-danger'>{errors.password}</span>}
</div>

<div className='mt-3'>
        <button className='btn btn-primary w-100' onClick={handleSubmit}>Login</button>
    </div>

  </div>
</>

   )
}

export default App
