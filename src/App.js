import React from "react";

function AuthCheck(Component){
  let authenticated = true; 

  return (props)=>{
    if(authenticated){
      return <Component {...props}/>
    }
    else{
      return <Login/>
    }
  }

}

function User(props){
  return (
    <>
    <h1 className="text-info">This Is <span className="text-primary">User</span></h1>
  <h2>Hello <span className="text-success">{props.username}</span></h2></>
  )
}

function Login(){
  return <h1>This Login Component</h1>
}

const AuthChecked = AuthCheck(User)

function App(){
  return (
    <AuthChecked username={'Mounika Neerati'}/>

  )
}

export default App