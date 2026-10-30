import React from 'react'
import './whatssap.css'
import { FaWhatsapp } from "react-icons/fa";
const whatsapp = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=5491136839282" className="float" target="_blank">
        <FaWhatsapp className='my-float'/>
    </a>
  )
}

export default whatsapp