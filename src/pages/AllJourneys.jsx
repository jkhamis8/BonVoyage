import Nav from '../components/Nav'
import ProfileSearch from '../components/ProfileSearch'
import Gallery from "../components/Gallery"
import JourneyBox from "../components/JourneyBox"

const AllJourneys = () =>{
  return(
    <>
      <div className='container'>
        <ProfileSearch />
        <Gallery />
        <div className='flex'>
          <div className='grid maxWidth'>
            <JourneyBox id={1} place={'america'}/>
            <JourneyBox id={1} place={'india'}/>
            <JourneyBox id={1} place={'france'}/>
            <JourneyBox id={1} place={'japan'}/>
          </div>
        </div>
        <div className='contentWrap'>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default AllJourneys