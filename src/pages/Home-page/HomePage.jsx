import React from 'react'
import { Outlet } from "react-router-dom"
import TopSection from './components/TopSection'
const HomePage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <TopSection/>
      <Outlet/>
    </>
  )
}

export default HomePage