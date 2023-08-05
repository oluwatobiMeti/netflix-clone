import React, { useEffect, useState } from 'react'
import "./nav.css";
import "../../images/png-transparent-netflix-logo-netflix-television-show-streaming-media-film-netflix-logo-television-text-trademark-thumbnail.png"
export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll");

  }, []);
  const handleScroll = () => {
    if (window.scrollY > "100px") {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  return (
    <div className={`nav ${(show)? "nav__black" : ""}`}>
      <div className="nav__contents">
        {/* <img className='nav__logo' src="../../images/png-transparent-netflix-logo-netflix-television-show-streaming-media-film-netflix-logo-television-text-trademark-thumbnail.png" alt="netflix logo" srcset="" />
         
        <img className='nav__avatar' src="https://pbs.twing.com/profile_images/1240119990411550720/hbEe3tdn_400x400.png" alt="netflix avatar image" srcset="" /> */}
      
      <img className='nav__logo' src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" width="200" alt="netflix logo history png" />
      
      <span className='nav__avatar'>avatar</span>

      </div>
    </div>
  )
}
