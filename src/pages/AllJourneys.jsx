import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav'
import ProfileSearch from '../components/ProfileSearch'
import Gallery from "../components/Gallery"
import JourneyBox from "../components/JourneyBox"

const AllJourneys = () =>{
  return(
    <>
      <div className='container'>
        {/* use this one when no entires
        <div className='fullHeight'>
          <div className="flexColumn middle">
            <h3>No journeys yet!</h3>
            <NavLink to={'/journeyForm'} className='button'>Add a journey</NavLink>
          </div>
        </div>*/}
        <div className='fullHeight'>
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
        </div>
        <Nav />
      </div>
    </>
  )
}

export default AllJourneys