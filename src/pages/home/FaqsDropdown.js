import React from 'react'

function FaqsDropdown({children}) {
  return (
    <div className={`faqs-dropdown ${(children.length == 2)? "faqs-dropdown--two":""}`}>
      {children}
    </div>
  )
}

export default FaqsDropdown
