import './css/App.css'
import './css/GeneralStructure.css'
import './css/Fonts.css'
import './css/Elements.css'
import './css/classes.css'
import { useEffect, useState } from 'react'
import { Routes, Route ,useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import ProfileForm from "./pages/ProfileForm"
import AllJourneys from "./pages/AllJourneys"
import JourneyForm from "./pages/JourneyForm"
import Journey from "./pages/Journey"
import AllEntries from "./pages/AllEntries"
import EntryForm from "./pages/EntryForm"
import Entry from "./pages/Entry"
import AllMedia from "./pages/AllMedia"
import TestPage from "./pages/TestPage"
import * as authService from '../src/services/authService';
import * as journeyService from '../src/services/journeyService';

function App() {
  const [user, setUser] = useState(authService.getUser());
  const [journey, setJourney] = useState([]);
  const navigate = useNavigate()
  const handleSignout = () => {
    navigate('/')
    authService.signout()
    setUser(null)
    }

  
  return (
    <>
      <main>
      {authService.getUser() !=null ? 
        <Routes>
          <Route path='/' element={
            <Home user={user} />
          } />
          <Route path='/profile' element={
            <Profile user={user} handleSignout={handleSignout}/>
          }/>
          <Route path='/editProfile' element={
            <ProfileForm user={user} handleSignout={handleSignout}/>
          }/>
          <Route path='/allJourneys' element={
            <AllJourneys user={user}/>
          }/>
          <Route path='/JourneyForm' element={
            <JourneyForm user={user}/>
          }/>
          <Route path='/JourneyForm/:journeyId' element={
            <JourneyForm />
          }/>
          <Route path='/Journey/:journeyId' element={
            <Journey setJourney={setJourney}/>
          }/>
          <Route path='/AllEntries' element={
            <AllEntries journey={journey}/>
          }/>
          <Route path='/EntryForm' element={
            <EntryForm journey={journey}/>
          }/>
          <Route path='/EntryForm/:entryId' element={
            <EntryForm journey={journey}/>
          }/>
          <Route path='/Entry/:entryId' element={
            <Entry />
          }/>
          <Route path='/AllMedia' element={
            <AllMedia />
          }/>
          <Route path='/testPage' element={
            <TestPage />
          }/>
          <Route path="*" element={
          <h3>Page Not Found</h3>
        }/>
        </Routes>
        :
        <Routes>
        <Route path='/' element={
            <SignIn setUser={setUser}/>
          }/>
          <Route path='/signUp' element={
            <SignUp setUser={setUser}/>
          }/>
        </Routes>
}
      </main>
    </>
  )
}

export default App
