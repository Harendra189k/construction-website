import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import BookingForm from './BookingForm';


const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <header className='test-navbar'>
    <div className="top_nav">
        <div className="container">
            <ul className="list-inline info">
                <li><a href="#"><span className="fa fa-phone"> <FaPhone />
                </span> 1234 - 5678 - 9012</a></li>
                <li><a href="#"><span className="fa fa-envelope"><MdEmail />
                </span>jwalaconstructions@gmail.com</a></li>
                <li><a href="#"><span className="fa fa-clock-o"><MdAccessTimeFilled />
                </span> Mon - Sat 9:00 - 19:00</a></li>
            </ul>
            {/* <ul className="list-inline social_icon">
                <li><a href=""><span className="fa fa-facebook"></span></a></li>
            </ul> */}
        </div>
    </div>
    <nav className="navbar bootsnav">     

        <div className="container">
            <div className="attr-nav">
                <ul>
                    <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                </ul>
            </div>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="">
                    <h2>helllo</h2>
                    {/* <img className="logo" src="images/logo.png" alt=""/> */}
                    </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav menu">
                    <li><a href="">Home</a></li>                    
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#contact_form">Contact Us</a></li>
                    <li><a onClick={handleShow}>Booking form</a></li>
                </ul>
            </div>
        </div>   
    </nav>
</header>
<BookingForm show={show} handleClose={handleClose}/>
    </>
  )
}

export default NavBar
