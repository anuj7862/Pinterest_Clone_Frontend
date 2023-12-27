import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';



function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      
      {/* <SignupPage/> */}
      {/* <HomePage/> */}
      {/* <TodayPage/> */}
      {/* <CreatePage/> */}
      {/* <CreateBoard/> */}
      {/* <ProfilePage/> */}
    </>
  )
}

export default App
