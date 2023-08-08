import React from 'react'
import "./faq.css";
import Faqs from './Faqs';

function Faq() {
  return (
    <div className='Faq'>
      <h1 className='faq__Header'>
          Frequently Asked Questions
      </h1>
      <Faqs title={"What is Netflix?"} DropdownContent="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                                       You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"/>
    </div>
  )
}

export default Faq
