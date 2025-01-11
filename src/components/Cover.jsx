import placeholder from '../assets/placeholder.webp'

const Cover = (image) =>{  
  return(
    <>
      <div id='cover'>
        {image?
        <img className='image' src={image.image} alt="test" />
        :
        <img className='image' src={placeholder} alt="test" />
        }
      </div>
    </>
  )
}

export default Cover