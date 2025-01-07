import './App.css'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path='/signIn' element={
            <SignIn />
          }/>
          <Route path='/signUp' element={
            <SignUp />
          }/>
          <Route path='/profile' element={
            <Profile />
          }/>
          <Route path='/editProfile' element={
            <ProfileForm />
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
      </main>
    </>
  )
}

export default App
