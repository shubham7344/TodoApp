import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TodoContext from '../context/TodoContext';
import logo from '../assets/logo.png';

function Navigation(props) {

 
  const navigate=useNavigate();

  const {userData,setUserData}=useContext(TodoContext);

 

  const logOut=()=>{
    localStorage.removeItem("user");
    setUserData(null);
    navigate('/');

  }
    return (
        <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       
       <Link to="/"><img src={logo} alt="logo"/></Link>

        <ul className="nav col-12 col-lg-auto ms-lg-auto mb-2 justify-content-center mb-md-0">
        {
            !userData?
            <>
          <li><Link to="/" className="nav-Link px-2 text-secondary">Home</Link></li>
          <li><Link to="/about" className="nav-Link px-2 text-white">About</Link></li>
          </>
          :
          <>
          <li><Link to="/task-list" className="nav-Link px-2 text-white">Task List</Link></li>
          <li><Link to="/create-task" className="nav-Link px-2 text-white">Create Task</Link></li>
          <li><Link to="/profile" className="nav-Link px-2 text-white">{userData?.name}</Link></li>
          <li className="nav-Link px-2 text-white" onClick={logOut}>LogOut</li>
          </>
        }
        </ul>


        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div> */}
      </div>
    </div>
  </header>
    );
}

export default Navigation;