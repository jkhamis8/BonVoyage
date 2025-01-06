import Nav from '../components/Nav'

const Home = () =>{
  return(
    <>
      <div className='container'>
        <div className='contentWrap'>
          <div id='header' className='flexSpaceInBetween'>
            <svg className='icons' viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              <g id="SVGRepo_iconCarrier"> <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#071702" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#071702" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#071702" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
            <svg className='icons' viewBox="-1.25 -1.25 27.50 27.50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" stroke="#071702" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15.989 15.4905L19.5 19.0015" stroke="#071702" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
          </div>
          <div className='flex'>
            <div className='calendarSub'>imagine this is a calendar</div>
            <div id='home'></div>
          </div>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Home