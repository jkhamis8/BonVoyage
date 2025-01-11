import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FormFooter from "../components/FormFooter"
import Nav from "../components/Nav"
import * as entryService from "./../services/entryService"
const initialFormData = {
  title: '',
  date: '',
  location: '',
  expense: 0,
  content: '',
  images: [''],
  map_link: '' 
}

const EntryForm = (props) =>{
  const {entryId} = useParams();
  const [formData, setFormData] = useState(initialFormData)
  const navigate=useNavigate()

    const getEntry = async() =>{
      if(entryId){
        try {
        const response=await entryService.getEntry(entryId)
        if(response.entryObj.date){
        response.entryObj.date = response.entryObj.date.split('T')[0]
        }
        setFormData(response.entryObj)
        } catch (error) {
        console.log(`error in useEffect: ${error}`)
        }
      }
      }
  
    useEffect(()=>{
      getEntry()
    },[])

  const handleChange = (e)=>{    
    console.log(formData);
    
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleRate = (e)=>{
    const starId=parseInt(e.target.id)

    for(let x=starId;x>=0;x--){
      document.getElementById(x).setAttribute("fill",'#ffff00')
    }
    if(starId<4){
      for(let x=starId+1;x<5;x++){
        document.getElementById(x).setAttribute("fill",'#0bac99')
      }
    }
    setFormData({...formData, ['rate']:starId+1})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(entryId){
      try {
        await entryService.editEntry(formData)
        navigate(`/entry/${entryId}`)
      } catch (error) {
        console.log(`couldn't edit the entry, error in submit: ${error}`);
      }
    }else{
      try {
        await entryService.createEntry([formData,props.journey._id])
        setFormData(initialFormData)
        navigate(`/journey/${props.journey._id}`)
      } catch (error) {
        console.log(`couldn't add a new journey, error in submit: ${error}`);
      }
    }
  }
  return(
    <>
      <div className='container'>
        <div className='fullHeight'>
          <form onSubmit={handleSubmit} className='flex'>
            <div id="addJourney">
              <div className='headerInput flexSpaceInBetween'>
                <label htmlFor="title" id="titleLabel">Title:</label>
                <input type="text" id='title' placeholder='ex. my first journey' required value={formData.title} name='title' onChange={handleChange}/>
              </div>
              <div className='headerInput flexSpaceInBetween'>
                <label htmlFor="date" id="otherLabel">Date:</label>
                <input type="date" id='date' value={formData.date} name='date' onChange={handleChange}/>
              </div>
            </div>
            <div className="maxWidth flexSpaceAround">
              <div className='inputHalf'>
                <label htmlFor="in">in:</label>
                <input type="text" id='location' placeholder="ex. taj mahal" value={formData.location} name='location' onChange={handleChange}/>
              </div>
              <div className='inputHalf'>
                <label htmlFor="expense">spent:</label>
                <input type="number" id='expense' placeholder="ex. 50" value={formData.expense} name='expense' onChange={handleChange}/>
              </div>
            </div>
            <div className='longInput'>
              <textarea name="content" id="content" placeholder='insert your thoughts' value={formData.content} onChange={handleChange}></textarea>
            </div>
            <div className='longInput'>
              <label htmlFor="images">Images:</label>
              <input type="text" id='images' value={formData.images} name='images' onChange={handleChange}/>
            </div>
            <div className='longInput'>
              <label htmlFor="map_link">Map link:</label>
              <input type="text" id='map_link' placeholder="insert maps link" value={formData.map_link} name='map_link' onChange={handleChange}/>
            </div>
            <div className="flex">
              <svg className='icons' viewBox="-12 -12 48.00 48.00" fill="none"  xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path id="0" onClick={handleRate} d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#0bac99"/>
                </g>
              </svg>
              <svg className='icons' viewBox="-12 -12 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path id="1" onClick={handleRate} d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#0bac99"/> </g>
              </svg>
              <svg className='icons' viewBox="-12 -12 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path  id="2" onClick={handleRate} d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#0bac99"/> </g>
              </svg>
              <svg className='icons' viewBox="-12 -12 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path id="3" onClick={handleRate} d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#0bac99"/> </g>
              </svg>
              <svg className='icons' viewBox="-12 -12 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path id="4" onClick={handleRate} d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#0bac99"/> </g>
              </svg>
            </div>
            <FormFooter handleSubmit={handleSubmit}/>
          </form>
          </div>
          <Nav />
        </div>
    </>
  )
}

export default EntryForm