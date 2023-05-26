import React from 'react'
import './Rightnav.css'
import {BsArrowLeft} from 'react-icons/bs'

const Rightnav = () => {
  return (
    <div className='rightnav'>
     <div className="header2">
      <span className='name1'>0.2 $XYZ</span>
      <span className='name2'>Tier1</span>
     </div>
      <div className="horizontalline2"> </div>
      <div className="content1">
        
        <span className='edit'>Edit Todo</span>
      </div>
      <div className="content2">
        <span>Carrot</span>
      </div>
      <div className="content3">
        <span>Carrot improves eyesight.</span>
      </div>

      <button className='btn'>Save</button>
      <div className="icon8"><BsArrowLeft/></div>



    </div>
  )
}

export default Rightnav
