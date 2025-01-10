import './App.css'
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
  const [journey, setJourney] = useState([])
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const handleSignout = () => {
    navigate('/')
    authService.signout()
    setUser(null)
    }
  
  useEffect(()=>{
    setJourney(journeyService.getComingJourney())
  },[])
  
  return (
    <>
      <main>
      {authService.getUser() !=null ? 
        <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path='/profile' element={
            <Profile user={user} handleSignout={handleSignout}/>
          }/>
          <Route path='/editProfile' element={
            <ProfileForm user={user} handleSignout={handleSignout}/>
          }/>
          <Route path='/allJourneys' element={
            <AllJourneys />
          }/>
          <Route path='/JourneyForm' element={
            <JourneyForm />
          }/>
          <Route path='/JourneyForm/:id' element={
            <JourneyForm />
          }/>
          <Route path='/Journey/:id' element={
            <Journey />
          }/>
          <Route path='/AllEntries/:id' element={
            <AllEntries />
          }/>
          <Route path='/EntryForm' element={
            <EntryForm />
          }/>
          <Route path='/EntryForm/:id' element={
            <EntryForm />
          }/>
          <Route path='/Entry/:id' element={
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
