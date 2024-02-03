import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="container">
    <div className="row">
       <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
          <div className="full">
             <div className="center-desk">
                <div className="logo"> <a href="/"><img className='logo-image'  src="user/images/logo.png" alt="logo"/></a> </div>
             </div>
          </div>
       </div>
       <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
          <div className="menu-area">
             <div className="limit-box">
                <nav className="main-menu nav-title">
                  
                      <NavLink to='/' isActive={(match,location)=>{
                            return location.pathname === "/" && location.hash === ""
                      }} activeClassName="active">Home</NavLink>
                     <NavLink to="/blog">Blog</NavLink>
                       <NavLink to="/about">About</NavLink>
                  
                </nav>
             </div>
          </div>
       </div>
      
    </div>
 </div>
  )
}

export default Navbar
