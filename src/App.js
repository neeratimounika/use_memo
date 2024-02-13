import React, { lazy,Suspense,useState } from 'react'


const Form =lazy(()=>import('./components/form'))

const App = () => {
  
  const [show,setShow]=useState(false)

  return (
    <>
    <div className='text-center'>
      <h1>Lazy Loading</h1>
      <button className='btn btn-primary'
      onClick={()=>{
        setShow(true)
      }}>Open</button>
    </div>
    {
      show===true && (
        <Suspense>
          <Form/>
        </Suspense>
      )
    }
    </>
  )
}

export default App
