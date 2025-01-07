import profile from '../assets/profilePicture.svg'

const ProfileHeader = () =>{
  return(
    <>
      <div id='profileHeader' className='flex'>
        <img src={profile} alt="profile picture" id='profilePicture'/>
      </div>
    </>
  )
}

export default ProfileHeader