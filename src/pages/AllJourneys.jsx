import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav'
import ProfileSearch from '../components/ProfileSearch'
import Gallery from "../components/Gallery"
import JourneyBox from "../components/JourneyBox"
import * as journeyService from '../services/journeyService'
import { useState,useEffect } from "react"

const AllJourneys = (props) =>{

  const[journeys, setJourneys] = useState([])
    const getAllJourneys = async() =>{
      try {
      const response = await journeyService.getAllJourneys(props.user._id)
      setJourneys(response.journeyObj)
      }catch (error) {
        console.log(`error in useEffect: ${error}`)
      }

    }
    useEffect(()=>{
      getAllJourneys()
    },[])

  return(
    <>
      <div className='container'>
        <div className='fullHeight'>
          <ProfileSearch />
          <Gallery />
          <div className='flex'>
            {journeys.length?
            <div className='grid maxWidth'>
              {journeys.map((journey,index)=>{                
                return(
                  <JourneyBox key={index} journey={journey}/>
                )
              })}
            </div>
            :
              <div className='fullHeight'>
                <div className="flexColumn middle">
                  <h3>No journeys yet!</h3>
                  <NavLink to={'/journeyForm'} className='button'>Add a journey</NavLink>
                </div>
              </div>
            }

          </div>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default AllJourneys