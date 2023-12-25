import { useState } from 'react'

import './App.css';
import Header from './components/Header/Header';
import Pin from './components/Pin/Pin';
import SignupPage from './pages/SignupPage/SignupPage';
import { useSignal } from '@preact/signals-react';
import HomePage from './pages/HomePage/HomePage';
import TodayPage from './pages/TodayPage/TodayPage';
import CreatePage from './pages/CreatePage/CreatePage';


function App() {
  
  return (
    <>
      <Header/>
      {/* <SignupPage/> */}
      {/* <HomePage/> */}
      {/* <TodayPage/> */}
      <CreatePage/>
    </>
  )
}

export default App
