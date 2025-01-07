import Nav from '../components/Nav'
import ProfileSearch from '../components/ProfileSearch'
import Gallery from "../components/Gallery"

const AllJourneys = () =>{
  return(
    <>
      <div className='container'>
        <div className='contentWrap'>
          <ProfileSearch />
          <Gallery />
        </div>
        <Nav />
      </div>
    </>
  )
}

export default AllJourneys