import { NavLink } from "react-router-dom"
import Nav from '../components/Nav'
import JourneyBox from "../components/JourneyBox"
import BackSearch from "../components/BackSearch"
import * as entryService from "./../services/entryService"
import { useState,useEffect } from "react"

const AllEntries = (props) =>{
  const journey=props.journey
    const[entrys, setEntrys] = useState([])
      const getAllEntrys = async() =>{
        try {
        const response = await entryService.getAllEntrys(journey._id)
        setEntrys(response.entryObj)
        }catch (error) {
          console.log(`error in useEffect: ${error}`)
        }
      }
      useEffect(()=>{
        getAllEntrys()
      },[])

  return(
    <>
      <div className='container'>
        <div className="fullHeight paddingBottom">
          <BackSearch journey={journey}/>
          {entrys.length?
            <div className='grid maxWidth'>
              {entrys.map((entry,index)=>{                
                    return(
                      <JourneyBox key={index} entry={entry}/>
                    )
              })}
            </div>
          :
              <div className="flexColumn bigMargin">
                <h3 className="marginBottom">No entries yet!</h3>
                <NavLink to={'/EntryForm'} className='button'>Add an entry</NavLink>
              </div>
          }
        </div>
        <Nav />
      </div>
    </>
  )
}

export default AllEntries