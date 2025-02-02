import { useState } from "react"
import ProfileHeader from "../components/ProfileHeader"
import Cancel from "../components/Cancel"
import Save from "../components/Save"
import * as authService from "./../services/authService"

const ProfileForm = (props) =>{
  const [formData, setFormData] = useState(props.user)

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      await authService.editUserProfile(formData)
      props.handleSignout()
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
              <input type="text" readOnly id='username' placeholder='your username' value={formData.username} name='username' onChange={handleChange}/>
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