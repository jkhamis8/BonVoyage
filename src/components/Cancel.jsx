import { NavLink } from "react-router-dom"

const Cancel = ({location})=>{
  return(
    <>
      <NavLink to={`/${location}`} id="cancel" className='marginTop'>Cancel</NavLink>
    </>
  )
}

export default Cancel