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
          {props.journey.coverImage?
          <img className='image' src={props.journey.coverImage} alt="test" />
          :
          <img className='image' src={placeholder} alt="test" />
          }
        </div>
      </NavLink>
      :
      <NavLink to={`/Entry/${props.entry._id}`} className={'flex'}>
        <div id='journeyBox' className='marginBottom'>
          <div className='objectFooterSmall'>
            <p className='bigP bold'>{props.entry.title}</p>
          </div>
          {props.entry.images?
          <img className='image' src={props.entry.images} alt="test" />
          :
          <img className='image' src={placeholder} alt="test" />
          }        </div>
      </NavLink>
      }
    </>
  )
}

export default JourneyBox