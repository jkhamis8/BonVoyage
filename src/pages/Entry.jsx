import { NavLink } from "react-router-dom"
import Nav from '../components/Nav'
import Cover from '../components/Cover'
import DetailsTitle from '../components/DetailsTitle'
import Gallery from "../components/Gallery"
import { useNavigate, useParams } from "react-router-dom"
import * as entryService from "./../services/entryService"
import { useState,useEffect } from "react"

const Entry= () =>{

  const {entryId} = useParams();
  const [formData, setFormData] = useState([])
  const navigate=useNavigate()

  const getEntry = async() =>{
    if(entryId){
      try {
      const response=await entryService.getEntry(entryId)
      if(response.entryObj.date!==undefined && response.entryObj.date!==null){
        response.entryObj.date = response.entryObj.date.split('T')[0]
      }
      setFormData(response.entryObj)
      } catch (error) {
      console.log(`error in useEffect: ${error}`)
      }
    }
    }

  useEffect(()=>{
    getEntry()
  },[])

  const handleDeleteEntry = async(e)=>{
    try {
      await entryService.deleteEntry(entryId)
      navigate('/AllEntries')
    }
    catch (error) {
      console.log(`couldn't delete the Entry, error in submit: ${error}`);
    }
    }
    
  return(
    <>
      <div className='container'>
      <Cover />
        <div className='fullHeight margin'>
          <div className='flexSpaceInBetween'>
            <h3>in {formData.location}</h3>
            <NavLink to={`/EntryForm/${formData._id}`}>
                  <svg className="icons" viewBox="-6 -4.5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144" />
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"  stroke="#000000"  strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
            </NavLink>
          </div>
          <DetailsTitle title={formData.title} rate={formData.rate}/>
          <div className="flex">
            <div className="maxWidth">
              <div className='flex'>
                <div className='readOnlyRight flex'>
                  <p className='bigP main bold marginRight'>Date: </p>
                  <p className='bigP bold'>{formData.date}</p>
                </div>
                <div className='readOnlyLeft flex'>
                  <p className='bigP main bold marginRight'>Expenses: </p>
                  <p className='bigP bold'>{formData.expense}</p>
                </div>
              </div>
              <div className='readOnly flex'>
                {formData.map_link? 
                  <a className='bigP bold' href="{formData.map_link}">{formData.map_link}</a>
                  :
                  <p className='bigP main bold marginRight'>add a Google maps link </p>}
              </div>
              <div className='readOnlyBig'>
              <p className='bigP main bold marginRight'>Notes: </p>
                <p className='bigP bold'>{formData.content}</p>
              </div>
              <div className='readOnlyBig marginBottom'>
                <p className='bigP main bold'>Activities: </p>
                <p className='bigP bold'>{formData.content}</p>
              </div>
            </div>
          </div>
          <div className="marginLeftBig marginBottom">
            <button id="cancel" onClick={handleDeleteEntry}>Delete</button>
          </div>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Entry