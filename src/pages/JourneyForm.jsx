import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormFooter from "../components/FormFooter"

const initialFormData = {
  title: '',
  destination: '',
  startDate: '',
  endDate: '',
  numberOfPeople: 1,
  Budget: 0,
  Notes: '',
  coverImage: '',
  googleMapsLink: '',
  emergencyNumbers: '',
  activities: ['']
}

const JourneyForm = () =>{
  
  const [formData, setFormData] = useState(initialFormData)
  const navigate=useNavigate()

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    try {
      setFormData(initialFormData)
      navigate('/allJourneys')
    } catch (error) {
      console.log(`couldn't add a new journey, error in submit: ${error}`);
    }
  }

  return(
    <>
      <div className='container'>
        <div className='contentWrap'>
          <form onSubmit={handleSubmit} className='flex'>
            <div id="addJourney">
              <div className='headerInput flexSpaceInBetween'>
                <label htmlFor="title" id="titleLabel">Title:</label>
                <input type="text" id='title' placeholder='ex. my first journey' value={formData.title} name='title' onChange={handleChange}/>
              </div>
              <div className='headerInput flexSpaceInBetween'>
                <label htmlFor="destination" id="otherLabel">Destination:</label>
                <input type="text" id='destination' value={formData.destination} name='destination' onChange={handleChange}/>
              </div>
              <div className='headerInput flexSpaceInBetween'>
                <label htmlFor="startDate" id="otherLabel">Start Date:</label>
                <input type="date" id='startDate' value={formData.startDate} name='startDate' onChange={handleChange}/>
              </div>
              <div className='headerInput flexSpaceInBetween'>
                <label htmlFor="endDate" id="otherLabel">end Date:</label>
                <input type="date" id='endDate' placeholder='ex. america' value={formData.endDate} name='endDate' onChange={handleChange}/>
              </div>
            </div>
            <div className="maxWidth flexSpaceAround">
              <div className='inputHalf'>
                <label htmlFor="numberOfPeople">People:</label>
                <input type="number" id='numberOfPeople' value={formData.numberOfPeople} name='numberOfPeople' onChange={handleChange}/>
              </div>
              <div className='inputHalf'>
                <label htmlFor="Budget">Budget:</label>
                <input type="number" id='Budget' value={formData.Budget} name='Budget' onChange={handleChange}/>
              </div>
            </div>
            <div className='longInput'>
              <label htmlFor="Notes">Notes:</label>
              <textarea name="Notes" id="Notes" placeholder='insert your notes' value={formData.Notes} onChange={handleChange}></textarea>
            </div>
            <div className='longInput'>
              <label htmlFor="coverImage">cover Image:</label>
              <input type="text" id='coverImage' value={formData.coverImage} name='coverImage' onChange={handleChange}/>
            </div>
            <div className='longInput'>
              <label htmlFor="googleMapsLink">Google maps link:</label>
              <input type="text" id='googleMapsLink' placeholder="insert google maps link" value={formData.googleMapsLink} name='googleMapsLink' onChange={handleChange}/>
            </div>
            <div className='longInput'>
              <label htmlFor="emergencyNumbers">Emergency contact::</label>
              <input type="text" id='emergencyNumbers' placeholder="ex. 00000001 police" value={formData.emergencyNumbers} name='emergencyNumbers' onChange={handleChange}/>
            </div>
            <div className='longInput' id="addActivities">
              <label htmlFor="activities">activities</label>
              <input type="text" id='activities' placeholder="ex. visit Taj Mahal" value={formData.activities} name='activities' onChange={handleChange}/>
            </div>
          </form>
          <FormFooter />
          </div>
        </div>
    </>
  )
}

export default JourneyForm