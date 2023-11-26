import React from 'react'

import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div class="frame">    

    <div class="signup-box">

        <h1>Login</h1>
        <form>
            <label>Nome completo</label>
            <input type="text" placeholder="" />
            <label>Email</label>
            <input type="email" placeholder="" />
            <label>Senha</label>
            <input type="password" placeholder="" />
            <p><Link to="/home"  class = "btn btn-outline-dark">Login</Link></p>


        </form>
        <p>
        
        </p>
    
    </div>
    </div>
  )
}

export default Login