const Image = ({image}) =>{
  return(
    <>
      <div id='mediaGrid'>
        <img className='image' src={image} alt="test" />
      </div>
    </>
  )
}

export default Image