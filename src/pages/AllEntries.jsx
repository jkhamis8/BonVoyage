import { NavLink } from "react-router-dom"
import Nav from '../components/Nav'
import JourneyBox from "../components/JourneyBox"
import BackSearch from "../components/BackSearch"

const AllEntries = () =>{
  return(
    <>
      <div className='container'>
        {/* use this one when no entires
          <div className='contentWrap fullHeight'>
            <div className="flexColumn middle">
              <h3>No entries yet!</h3>
              <NavLink to={'/EntryForm'} className='button'>Add an entry</NavLink>
            </div>
          </div>*/}
        <div className="fullHeight paddingBottom">
          <BackSearch />
          <div className='grid maxWidth'>
            <JourneyBox id={1} title={'america'}/>
            <JourneyBox id={1} title={'first day'}/>
            <JourneyBox id={1} title={'breakfast was bad'}/>
            <JourneyBox id={1} title={'I enjoy the beach'}/>
            <JourneyBox id={1} title={"never trust brother's decisions"}/>
            <JourneyBox id={1} title={'got sick before flight home'}/>
            <JourneyBox id={1} title={'Things i forgot to say'}/>
          </div>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default AllEntries