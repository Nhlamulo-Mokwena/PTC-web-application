import React from 'react'

const Card = ({children,border_colour='white',styles}) => {
  return (
    <div className={`bg-white p-5 rounded-lg shadow border-${border_colour} border-l-4 
    ${styles}`}>
      {children}
    </div>
  )
}

export default Card