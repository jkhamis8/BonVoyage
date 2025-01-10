import { NavLink } from "react-router-dom"
import Nav from '../components/Nav'
import Cover from '../components/Cover'
import DetailsTitle from '../components/DetailsTitle'
import { useNavigate, useParams } from "react-router-dom"
import * as journeyService from "./../services/journeyService"
import { useState,useEffect } from "react"

const Journey= () =>{
  const {journeyId} = useParams();
  const [formData, setFormData] = useState([])
  const navigate=useNavigate()

  const getJourney = async() =>{
    if(journeyId){
      try {
      const response=await journeyService.getJourney(journeyId)
      response.JourneyObj.startDate = response.JourneyObj.startDate.split('T')[0]
      response.JourneyObj.endDate = response.JourneyObj.endDate.split('T')[0]
      setFormData(response.JourneyObj)
      } catch (error) {
      console.log(`error in useEffect: ${err}`)
      }
    }
    }

  useEffect(()=>{
    getJourney()
  },[])

  const handleDeleteJourney = async(e)=>{
    try {
      await journeyService.deleteJourney(journeyId)
      navigate('/allJourneys')
    }
    catch (error) {
      console.log(`couldn't delete the journey, error in submit: ${error}`);
    }
    }
  return(
    <>
      <div className='container'>
        <Cover />
        <div className='contentWrap'>
          <div className='flexSpaceInBetween'>
            <h3>Your journey to {formData.destination}</h3>
            <div className='flex'>
              <NavLink to={`/AllEntries/${formData._id}`}>
                <svg className="icons" fill="#000000" viewBox="-307.2 -307.2 1638.40 1638.40" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                  <g id="SVGRepo_iconCarrier">
                  <path d="M235.52 143.36h757.76c16.966 0 30.72 13.754 30.72 30.72s-13.754 30.72-30.72 30.72H235.52c-16.966 0-30.72-13.754-30.72-30.72s13.754-30.72 30.72-30.72zm0 225.28h757.76c16.966 0 30.72 13.754 30.72 30.72s-13.754 30.72-30.72 30.72H235.52c-16.966 0-30.72-13.754-30.72-30.72s13.754-30.72 30.72-30.72zm0 235.52h757.76c16.966 0 30.72 13.754 30.72 30.72s-13.754 30.72-30.72 30.72H235.52c-16.966 0-30.72-13.754-30.72-30.72s13.754-30.72 30.72-30.72zm0 225.28h757.76c16.966 0 30.72 13.754 30.72 30.72s-13.754 30.72-30.72 30.72H235.52c-16.966 0-30.72-13.754-30.72-30.72s13.754-30.72 30.72-30.72zM61.44 235.52C27.508 235.52 0 208.012 0 174.08s27.508-61.44 61.44-61.44 61.44 27.508 61.44 61.44-27.508 61.44-61.44 61.44zm0 225.28C27.508 460.8 0 433.292 0 399.36s27.508-61.44 61.44-61.44 61.44 27.508 61.44 61.44-27.508 61.44-61.44 61.44zm0 235.52C27.508 696.32 0 668.812 0 634.88s27.508-61.44 61.44-61.44 61.44 27.508 61.44 61.44-27.508 61.44-61.44 61.44zm0 225.28C27.508 921.6 0 894.092 0 860.16s27.508-61.44 61.44-61.44 61.44 27.508 61.44 61.44-27.508 61.44-61.44 61.44z"/>
                  </g>
                </svg>
              </NavLink>
              <NavLink to={`/JourneyForm/${journeyId}`}>
                <svg className="icons" viewBox="-6 -4.5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144" />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"  stroke="#000000"  strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </NavLink>
            </div>
          </div>
          <DetailsTitle title={formData.title}/>
          <div className='flex'>
            <div className='maxWidth'>
              <div className='flex'>
                <div className='readOnlyRight flex'>
                  <p className='bigP bold'>From {formData.startDate}</p>
                </div>
                <div className='readOnlyLeft flex'>
                  <p className='bigP bold'>To {formData.endDate}</p>
                </div>
              </div>
              <div className='flex'>
                <div className='readOnlyRight flex'>
                  <p className='bigP bold'>{formData.budget} budget</p>
                </div>
                <div className='readOnlyLeft flex'>
                  <p className='bigP bold'>{formData.budget} expense</p>
                </div>
              </div>
              <div className='flex'>
                <div className='readOnlyRightLong flex'>
                  <a className='bigP bold' href="{formData.mapLink}">{formData.mapLink}</a>
                </div>
                <div className='readOnlyLeftShort flex'>
                  <p className='bigP bold'>for {formData.people}</p>
                </div>
              </div>
              <div className='readOnly flex'>
                <p className='bigP bold'>{formData.emergencyNumbers}</p>
              </div>
              <div className='readOnlyBig'>
                <p className='bigP main bold'>Notes: </p>
                <p className='bigP bold'>{formData.notes}</p>
              </div>
              <div className='readOnlyBig marginBottom'>
                <p className='bigP main bold'>Activities: </p>
                <p className='bigP bold'>{formData.activities}</p>
              </div>
              <div className="flexSpaceInBetween">
                <button id="cancel" onClick={handleDeleteJourney}>Delete</button>
                <NavLink to={'/EntryForm'} className='button'>Add an entry</NavLink>
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Journey