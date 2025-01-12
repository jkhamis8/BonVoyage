import { NavLink } from "react-router-dom"
import Nav from '../components/Nav'
import placeholder from '../assets/placeholder.webp'
import calendar from '../assets/calendar.png'
import ProfileSearch from "../components/ProfileSearch"
import { useNavigate } from "react-router-dom"
import * as journeyService from "./../services/journeyService"
import { useState,useEffect } from "react"

const Home = (props) =>{
    const [journey, setJourney] = useState([])
    const navigate=useNavigate()
  
    const getComingJourney = async() =>{
        try {
        const response = await journeyService.getComingJourney(props.user._id)        
        setJourney(response.journeyObj[0])        
        } catch (error) {
        console.log(`error in useEffect: ${error}`)
        }
      }
      
  
    useEffect(()=>{
      getComingJourney()      
    },[])
  
  return(
    <>
      <div className='container'>
        <ProfileSearch />
        <div className='fullHeight'>
          <div className='flex marginBottom'>
            <div id='calendarSub'>
              <img className='image' src={calendar} alt="test" />
            </div>
          </div>
          <div className='flex'>
              {journey?
              <div id='home'>
              <NavLink to={`/journey/${journey._id}`} className='button' id="homeButton">View</NavLink>
              <div className='objectFooter'>
                <p className='bigP bold'>Get excited! your journey is planned for {journey.destination}</p>
              </div>
              {journey.coverImage?
              <img className='image' src={journey.coverImage} alt="test" />
              :
              <img className='image' src={placeholder} alt="test" />
              }
            </div>
              :
            <p className="bigP bold">No journeys in the upcoming three months</p>
            }
          </div>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Home