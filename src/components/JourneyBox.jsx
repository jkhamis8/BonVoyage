import { NavLink } from "react-router-dom"
import placeholder from '../assets/placeholder.webp'

const JourneyBox = ({id, place})=>{
  return(
    <>
      <NavLink to={`/journey/${id}`}>
        <div id='journeyBox' className='marginBottom'>
          <div className='objectFooterSmall'>
            <p className='bigP bold'>your journey to {place}</p>
          </div>
          <img className='image' src={placeholder} alt="test" />
        </div>
      </NavLink>
    </>
  )
}

export default JourneyBox