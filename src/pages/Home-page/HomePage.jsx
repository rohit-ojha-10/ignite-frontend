import React from 'react'
import { Outlet } from "react-router-dom"
import TopSection from './components/TopSection'
import NavBar from '../../shared/NavBar'
const HomePage = () => {
  return (
    <>
      <NavBar/>
      <TopSection/>
      <Outlet/>
    </>
  )
}

export default HomePage