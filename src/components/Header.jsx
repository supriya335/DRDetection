import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
  return (
    <>
    <div class="bg-white h-10">

    </div>
        <nav className="bg-blue-500 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg flex items-center">
          <img src={require("../images/logo.png")} alt="Logo" className="h-8 mr-2" />
          Diabetic Retinopathy
        </Link>
        <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white  hover:font-bold transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/treatment" className="text-white  hover:font-bold transition-colors duration-300">Treatments</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white  hover:font-bold transition-colors duration-300">Contact Us</Link>
          </li>
          <li>
            <Link to="/testimg" className="text-white  hover:font-bold transition-colors duration-300">Test Image</Link>
          </li>
          </ul>
          </div>
          <li className="flex space-x-4">
            <Link to="/appointment" class="text-black font-semibold bg-blue-200 p-2 rounded-lg hover:bg-blue-300">Book an Appointment</Link>
          </li>
            
        
      </div>
    </nav> 
     
    </>
      
  )

}
