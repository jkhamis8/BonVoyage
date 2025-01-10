import { NavLink } from "react-router-dom"

const BackSearch = ()=>{
  return(
    <>
      <div className='flexSpaceInBetween' id="profileSearch">
        <NavLink to='/journey/:id'>
        <svg width="23" height="23" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.4761 1.52404L2.00012 18L18.4761 34.476" stroke="black" stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </NavLink>
        <svg className='icons' viewBox="-1.25 -1.25 27.50 27.50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" stroke="#071702" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M15.989 15.4905L19.5 19.0015" stroke="#071702" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
        </svg>
      </div>
    </>
  )
}

export default BackSearch