import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./sidebar.scss"


function Sidebar({links, close}) {
  return (
    <div className='sidebar' onClick = {close}>
      {links.map(link => (
        <a className='sidebar-link' href = "#!" key= {link.name}>
          <FontAwesomeIcon icon = {link.icon} />
          {link.name}
          </a> 
      ))}
      <p className='sidebar-text'>click here to close</p>
      
    </div>
  )
}

export default Sidebar
