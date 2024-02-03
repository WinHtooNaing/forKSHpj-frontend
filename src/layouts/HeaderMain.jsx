import React from 'react'
import Navbar from '../admin/Navbar'
import { Outlet } from 'react-router-dom'

const HeaderMain = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default HeaderMain
