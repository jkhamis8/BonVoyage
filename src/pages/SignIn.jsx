import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo'
import * as authService from "./../services/authService"

const initialFormData = {
  username: '',
  password: ''
}

const SignIn = (props) =>{
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const user = await authService.signin(formData)
      props.setUser(user);
      navigate('/')
    } catch (error) {
      console.log(`error in singIn handleSubmit: ${error}`);
    }
  }

  useEffect(()=>{
    if(authService.getUser()){
      navigate('/')
    }
  },[])

  return(
    <>
      <div className='container'>
        <div className='contentWrap'>
          <Logo />
          <form onSubmit={handleSubmit} className='flex'>
            <div className='input'>
              <label htmlFor="username">Username:</label>
              <input type="text" id='username' placeholder='your username' value={formData.username} name='username' onChange={handleChange}/>
            </div>
            <div className='input'>
              <label htmlFor="password">Password:</label>
              <input type="text" id='password' placeholder='your password' value={formData.password} name='password' onChange={handleChange}/>
            </div>
            <button type='submit' id='signIn' className='marginTop'>Sign in</button>
            <a className='marginTop bold' href='/no'>forgot password?</a>
          </form>
        </div>
        <div className='bottom'>
          <p className='marginRight'>don't have an account?</p><a href="/signup" className='bold main'>sign up</a>
        </div>
      </div>
    </>
  )
}

export default SignIn