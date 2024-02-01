import React from 'react'

function Login() {
  return (
    <div className='wrapper'>
        <div className='login_box'>
            <div className='login_header'>
                <span>Login</span>
            </div>

            <div className='input_box'>
                <input type='text' id='user' className='input-field' required></input>
                    <label for="user" className='label'>Username</label>
            </div>

            <div className='input_box'>
                <input type="password" id='pass' className='input-field' required></input>
                <label for="pass" className='label'>Password</label>
            </div>

            <div className='remember-forget'>
                <div className='remember-me'>
                    <input type='checkbox' id='remember'></input>
                    <label for="remember">Remember Me</label>
                </div>

                <div className='forget'>
                    <a href='#'>Forget Password</a>
                </div>
            </div>
            <div className='input_box'>
                <input type='submit' className='input-submit' value="login"></input>    
            </div>
            <div className='register'>
                <span>Dont have an account? <a href='#'>Register</a></span>
            </div>
        </div>
    </div>
  )
}

export default Login