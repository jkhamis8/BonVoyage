import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FormFooter from "../components/FormFooter"
import * as journeyService from "./../services/journeyService"

const initialFormData = {
  title: '',
  destination: '',
  startDate: '',
  endDate: '',
  people: 1,
  budget: 0,
  notes: '',
  coverImage: '',
  mapLink: '',
  emergencyNumbers: '',
  activities: ['']
}


const JourneyForm = (props) =>{
  const {journeyId} = useParams();
  const [formData, setFormData] = useState(initialFormData)
  const navigate=useNavigate()

  const getJourney = async() =>{
    if(journeyId){
      try {
      const response=await journeyService.getJourney(journeyId)
      response.JourneyObj.startDate = response.JourneyObj.startDate.split('T')[0]
      response.JourneyObj.endDate = response.JourneyObj.endDate.split('T')[0]
      setFormData(response.JourneyObj)
      } catch (error) {
      console.log(`error in useEffect: ${err}`)
      }
    }
    }

  useEffect(()=>{
    getJourney()
  },[])

  const handleChange = (e)=>{
    console.log(formData);

    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit =  async(e)=>{
    e.preventDefault()
    if(journeyId){
      try {
        await journeyService.editJourney(formData)
        navigate('/allJourneys')
      } catch (error) {
        console.log(`couldn't edit the journey, error in submit: ${error}`);
      }
    }else{
      try {
        
        await journeyService.createJourney([formData,props.user._id])
        setFormData(initialFormData)
        navigate('/allJourneys')
      } catch (error) {
        console.log(`couldn't add a new journey, error in submit: ${error}`);
      }
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
                <input type="text" id='title' placeholder='ex. my first journey' value={formData.title} name='title' required onChange={handleChange}/>
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
                <input type="date" id='endDate' value={formData.endDate} name='endDate' onChange={handleChange}/>
              </div>
            </div>
            <div className="maxWidth flexSpaceAround">
              <div className='inputHalf'>
                <label htmlFor="people">People:</label>
                <input type="number" id='people' value={formData.people} name='people' onChange={handleChange}/>
              </div>
              <div className='inputHalf'>
                <label htmlFor="budget">Budget:</label>
                <input type="number" id='budget' value={formData.budget} name='budget' onChange={handleChange}/>
              </div>
            </div>
            <div className='longInput'>
              <label htmlFor="notes">Notes:</label>
              <textarea name="notes" id="notes" placeholder='insert your notes' value={formData.notes} onChange={handleChange}></textarea>
            </div>
            <div className='longInput'>
              <label htmlFor="coverImage">cover Image:</label>
              <input type="text" id='coverImage' value={formData.coverImage} name='coverImage' onChange={handleChange}/>
            </div>
            <div className='longInput'>
              <label htmlFor="mapLink">maps link:</label>
              <input type="text" id='mapLink' placeholder="insert google maps link" value={formData.mapLink} name='mapLink' onChange={handleChange}/>
            </div>
            <div className='longInput'>
              <label htmlFor="emergencyNumbers">Emergency contact::</label>
              <input type="text" id='emergencyNumbers' placeholder="ex. 00000001 police" value={formData.emergencyNumbers} name='emergencyNumbers' onChange={handleChange}/>
            </div>
            <div className='longInput' id="addActivities">
              <label htmlFor="activities">activities</label>
              <input type="text" id='activities' placeholder="ex. visit Taj Mahal" value={formData.activities} name='activities' onChange={handleChange}/>
            </div>
            <FormFooter handleSubmit={handleSubmit}/>
          </form>
          </div>
        </div>
    </>
  )
}

export default JourneyForm