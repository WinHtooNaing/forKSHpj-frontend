import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    
    <aside class="left-sidebar">
      
      <div>
        <div class="brand-logo d-flex align-items-center justify-content-between">
          
            <h2>Admin Panel</h2>
         
          <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i class="ti ti-x fs-8"></i>
          </div>
        </div>
        <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Home</span>
            </li>
            <li class="sidebar-item">
              <Link class="sidebar-link" to="/admin/" aria-expanded="false">
                <span>
                  <i class="ti ti-layout-dashboard"></i>
                </span>
                <span class="hide-menu">Dashboard</span>
              </Link>
            </li>
            
            
            <li class="sidebar-item">
              <Link class="sidebar-link" to="/admin/post" aria-expanded="false">
                <span>
                  <i class="ti ti-cards"></i>
                </span>
                <span class="hide-menu">Posts</span>
              </Link>
            </li>
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">AUTH</span>
            </li>
            <li class="sidebar-item">
              <Link class="sidebar-link" to="/login" aria-expanded="false">
                <span>
                  <i class="ti ti-login"></i>
                </span>
                <span class="hide-menu">Logout</span>
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>
      
    </aside>
    <div class="body-wrapper">
      
      <header class="app-header">
        <nav class="navbar navbar-expand-lg navbar-light">
          
          <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <li class="nav-item">
                <a href="" class="nav-item">admin</a>
              </li>
              <li class="nav-item dropdown">
                <a href='' class="nav-link nav-icon-hover"  id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img src="../assets/images/profile/user-1.jpg" alt="" width="35" height="35" class="rounded-circle"/>
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div class="message-body">
                    
                    <a href="logout" class="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      
       
      </div>
    </div>
    </>
  )
}

export default Navbar
