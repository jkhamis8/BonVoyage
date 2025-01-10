import { NavLink } from "react-router-dom"
import Nav from '../components/Nav'
import Cover from '../components/Cover'
import DetailsTitle from '../components/DetailsTitle'
import Gallery from "../components/Gallery"

const Entry = () =>{
  return(
    <>
      <div className='container'>
      <Cover />
        <div className='contentWrap'>
          <div className='flexSpaceInBetween'>
            <h3>in [place user gave in form]</h3>
            <NavLink to={'/EntryForm/:id'}>
                  <svg className="icons" viewBox="-6 -4.5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144" />
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"  stroke="#000000"  strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
            </NavLink>
          </div>
          <DetailsTitle title={'[Title of the entry]'}/>
          <div className="flex">
            <div className="maxWidth">
              <div className='flex'>
                <div className='readOnlyRight flex'>
                  <p className='bigP bold'>[today's date]</p>
                </div>
                <div className='readOnlyLeft flex'>
                  <p className='bigP bold'>[#] expenses</p>
                </div>
              </div>
              <div className='readOnly flex'>
                <p className='bigP bold'>[google maps link]</p>
              </div>
              <div className='readOnlyBig'>
                <p className='bigP bold'>[notes]</p>
              </div>
              <div className='readOnlyBig marginBottom'>
                <p className='bigP main bold'>Activities: </p>
                <p className='bigP bold'>[Activities]</p>
              </div>
            </div>
          </div>
        </div>
        <Gallery />
        <div className="marginLeftBig marginBottom">
          <button id="cancel">Delete</button>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Entry