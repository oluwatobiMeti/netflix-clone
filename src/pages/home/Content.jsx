import React from 'react'
import "./content.css"
function Content({title, Content, image, position, empty}) {
  return (
    <div className={`content ${(position === "normal")? "": "content__right"} ${empty}`}>
      <div className="content__text">
        <h1 className='content__title'>
            {title}
        </h1>
        <h2 className='content__content'>
          {Content}
        </h2>
      </div>
      <div className="content__image">
           <img src={image} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Content
