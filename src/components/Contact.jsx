import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment,faMobileAlt } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
  return (
    <>
     <div className="bg-gray-100">
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form>
            <div className="mb-4 flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon icon={faUser} className="text-gray-500" />
              </div>
              <input type="text" id="name" name="name" placeholder="Your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4 flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
              </div>
              <input type="email" id="email" name="email" placeholder="Your Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4 flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon icon={faMobileAlt} className="text-gray-500" />
              </div>
              <input type="number" id="email" name="email" placeholder="Your Mobile Number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4 flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon icon={faComment} className="text-gray-500" />
              </div>
              <textarea id="message" name="message" rows="4" placeholder="Your Message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div> 


    </>
  )
}
