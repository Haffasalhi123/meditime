import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';   
import Appointment from './pages/Appointment';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import About from './pages/About';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments'; 
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/doctors" element = {<Doctors/>} />
        <Route path="/doctors/:speciality" element = {<Doctors/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/my-profile" element = {<MyProfile/>} />
        <Route path="/my-appointments" element = {<MyAppointments/>} />
        <Route path="/Appointment/:docId" element = {<Appointment/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App