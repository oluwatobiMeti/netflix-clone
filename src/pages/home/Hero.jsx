import React from 'react'
import "./hero.css"
import  {IoIosArrowForward}  from "react-icons/io"

export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero__background">
        <img className='hero__logo' src='https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png' width="200" alt="netflix logo history png"/>
        <button className='hero__btn'>sign in</button>
      </div>
      <div className="hero__gradient">
      <div className="hero__body">
        <h1 className='hero__text'>
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className='hero__subtext'>
          Watch anywhere. Cancel anytime.
        </h2>
        <div className="hero__form">
          <h2 className='hero__subtext'>
            Ready to watch? Enter your email to create or restart your membership.
          </h2>
          <form>
            <input className='hero__form--input' type="text" placeholder='Email address' />
            <button className='hero__form--btn'>Get Started <IoIosArrowForward/></button>
          </form>

        </div>
      </div>
      </div>
    </div>
  )
}
