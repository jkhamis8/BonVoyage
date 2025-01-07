import { NavLink } from "react-router-dom"
import placeholder from '../assets/placeholder.webp'

const Gallery = () => {
  return (
    <>
      <div className='flex'>
        <div id='gallery' className='maxWidth'>
          <div className="flex">
            <div id="media">
              <img className='image' src={placeholder} alt="test" />
            </div>
            <div id="media">
              <img className='image' src={placeholder} alt="test" />
            </div>
          </div>
          <div className="flexRight">
            <NavLink to='/AllMedia' className='button marginRight'>View all</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery