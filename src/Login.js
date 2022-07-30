import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './login.css'
import swal from 'sweetalert'

function Login() {

    const[username, setUsername]=useState('');
    const[password,setPassword]=useState('');

    function isValid(event)
    {
        event.preventDefault();
        if(username==='javascript' && password==='react')
        {
            swal('Login Successful!','Congrats! you have successfully login!','success');
        }
        else 
        {
            swal('Invalid username or password!','please check valid details ','error');
        }
    }

  return (
    <div>
    
      <div className="row justify-content-center">
        <div className="col-md-4">
        <br />
        <h1>User Authentication</h1>
        <br />
          <form onSubmit={isValid}>
            <input
              type="text"
              placeholder="username"
              className="form-control"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br />
            <br />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
