import React, { useState } from 'react'
import FaqsDropdown from './FaqsDropdown';
function Faqs({DropdownContent, title}) {
    const [show, SetShow] = useState(false);
  return (
    <div className='Faqs'>
       <div onClick={() => SetShow(true)} className="faq__question">{title}</div>
      {
         show && <FaqsDropdown>
            {DropdownContent}
         </FaqsDropdown>
      }
    </div>
  )
}

export default Faqs
