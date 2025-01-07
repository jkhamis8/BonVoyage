import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProfileHeader from "../components/ProfileHeader"
import Cancel from "../components/Cancel"
import Save from "../components/Save"

const initialFormData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const ProfileForm = () =>{

  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    try {
      // edit profile logic
      navigate('/profile')
    } catch (error) {
      console.log(`error in editing profile form handle submit: ${error}`);
    }
  }

  return(
    <>
      <div className='container'>
        <ProfileHeader />
        <div className='contentWrap'>
          <div id='spaceBig'></div>
          <form onSubmit={handleSubmit} className='flex'>
            <div className='input'>
              <label htmlFor="username">Username:</label>
              <input type="text" id='username' placeholder='your username' value={formData.username} name='username' onChange={handleChange}/>
            </div>
            <div className="input">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" placeholder="your email" value={formData.email} name="email" onChange={handleChange}/>
            </div>
            <div className='input'>
              <label htmlFor="password">Password:</label>
              <input type="text" id='password' placeholder='your password' value={formData.password} name='password' onChange={handleChange}/>
            </div>
            <div className="input">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="text" id="confirmPassword" placeholder="confirm your password" value={formData.confirmPassword} name="confirmPassword" onChange={handleChange}/>
            </div>
            <div className="flexSpaceInBetween maxWidth">
              <Cancel location='profile'/>
              <Save />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProfileForm