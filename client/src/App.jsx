import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Dashboard from "./pages/Dashboard/Dashboard";
import DietPlanner from "./pages/DietPlanner/DietPlanner";
import Notification from './pages/Notification/Notification';
import Profile from './pages/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<Register />}></Route>
        <Route path='/sign-in' element={<Login />}></Route>
       
        <Route path="/dashboard/:userId" element={<Dashboard />}></Route>
        <Route path="/diet-planner" element={<DietPlanner />}></Route>
        <Route path="/notifications" element={<Notification />}></Route>
        <Route path="/profile/:userId" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
