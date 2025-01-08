import { NavLink } from "react-router-dom"
import Nav from '../components/Nav'
import placeholder from '../assets/placeholder.webp'
import ProfileSearch from "../components/ProfileSearch"

const Home = () =>{
  return(
    <>
      <div className='container'>
        <ProfileSearch />
        <div className='contentWrap'>
          <div className='flex marginBottom'>
            <div id='calendarSub'>imagine this is a calendar</div>
          </div>
          <div className='flex'>
            <div id='home'>
              <NavLink to='/journey/:id' className='button' id="homeButton">View</NavLink>
              <div className='objectFooter'>
                <p className='bigP bold'>Get excited! your journey is planned for 20th of feb</p>
              </div>
              <img className='image' src={placeholder} alt="test" />
            </div>
            {/* <p className="bigP bold">No journeys in the upcoming three months</p> */}
          </div>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Home