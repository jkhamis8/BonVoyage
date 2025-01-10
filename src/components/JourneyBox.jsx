import { NavLink } from "react-router-dom"
import placeholder from '../assets/placeholder.webp'

const JourneyBox = (props)=>{
  
  return(
    <>
      {props.journey?
      <NavLink to={`/journey/${props.journey._id}`} journey={props.journey} className={'flex'}>
        <div id='journeyBox' className='marginBottom'>
          <div className='objectFooterSmall'>
            <p className='bigP bold'>Your Journey to {props.journey.destination}</p>
          </div>
          <img className='image' src={placeholder} alt="test" />
        </div>
      </NavLink>
      :
      <NavLink to={`/entry/${props.entry.destination}`} className={'flex'}>
        <div id='journeyBox' className='marginBottom'>
          <div className='objectFooterSmall'>
            <p className='bigP bold'>{props.entry.title}</p>
          </div>
          <img className='image' src={placeholder} alt="test" />
        </div>
      </NavLink>
      }
    </>
  )
}

export default JourneyBox