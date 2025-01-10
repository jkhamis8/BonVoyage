import Nav from '../components/Nav'
import ProfileSearch from '../components/ProfileSearch'
import placeholder from '../assets/placeholder.webp'
import Image from '../components/Image'

const AllMedia = () =>{
  return(
    <>
      <div className='container'>
        <ProfileSearch />

        <div className='fullHeight'>
          <div className='flex'>
            <div className='grid maxWidth'>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
              <Image image={placeholder}/>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default AllMedia