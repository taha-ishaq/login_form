
import './App.css';

function App() {
  return (
    <div className='wrapper'>
    <div className='login_box'>
        <div className='login-header'>
            <span>Login</span>
        </div>

        <div className='input_box'>
            <input type='text' id='user' className='input-field' required></input>
                <label for="user" className='label'></label>
        </div>

        <div className='input_box'>
            <input type="password" id='pass' className='input-field' required></input>
            <label for="pass" className='label'></label>
        </div>

        <div className='remember-forgot'>
            <div className='remember-me'>
                <input type='checkbox' id='remember'></input>
                <label for="remember">Remember Me</label>
            </div>

            <div className='forgot'>
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

export default App;
