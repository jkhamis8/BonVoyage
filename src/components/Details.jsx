const Details = ({name, value})=>{
  return(
    <>
      <div className='flex'>
        <div className='flexSpaceInBetween maxWidth details'>
          <h3 className='main bold'>{name} :</h3>
          {name=='Password' ?
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.33125 11.88C2.11792 12.0133 1.89125 12.06 1.65125 12.02C1.41125 11.9667 1.20458 11.8533 1.03125 11.68C0.87125 11.4933 0.79125 11.2667 0.79125 11C0.79125 10.6267 0.957917 10.3333 1.29125 10.12L8.03125 6.08V6.94L1.29125 2.94C0.957917 2.74 0.79125 2.44 0.79125 2.04C0.79125 1.65333 0.957917 1.37333 1.29125 1.2C1.62458 1.01333 1.97125 1.01333 2.33125 1.2L9.71125 5.64C10.0713 5.89333 10.2513 6.19333 10.2513 6.54C10.2513 6.92667 10.0713 7.23333 9.71125 7.46L2.33125 11.88Z" fill="black"/>
            </svg>
            :
            <p className='bigP bold'> {value} </p>
          }
        </div>
      </div>
    </>
  )
}

export default Details