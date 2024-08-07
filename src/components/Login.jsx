// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
// export default function Login() {
//   return (
//     <div>
//        <div className="flex justify-center items-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
//         <form className="grid grid-cols-1 gap-6">
//           <div className="flex items-center border border-gray-300 rounded-md py-2 px-3">
//             <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
//             <input type="text" id="username" name="username" placeholder="Your Username" className="bg-transparent outline-none focus:ring-0 flex-grow" />
//           </div>
//           <div className="flex items-center border border-gray-300 rounded-md py-2 px-3">
//             <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
//             <input type="password" id="password" name="password" placeholder="Your Password" className="bg-transparent outline-none focus:ring-0 flex-grow" />
//           </div>
//           <div className="text-center">
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
//           </div>
//         </form>
//         <p className="mt-4 text-center text-gray-600">If you don't have an account, <a href="#" className="text-blue-500 hover:text-blue-700">sign up here</a>.</p>
//       </div>
//     </div>
//     </div>

//   )
// }
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
    //   <div className="bg-white shadow-md rounded-lg p-10 max-w-md w-full">
    //     <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
    //     <form className="grid grid-cols-1 gap-6">
    //       <div className="flex items-center border border-gray-300 rounded-md py-2 px-3">
    //         <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
    //         <input type="text" id="username" name="username" placeholder="Your Username" className="bg-transparent outline-none focus:ring-0 flex-grow" />
    //       </div>
    //       <div className="flex items-center border border-gray-300 rounded-md py-2 px-3">
    //         <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
    //         <input type="password" id="password" name="password" placeholder="Your Password" className="bg-transparent outline-none focus:ring-0 flex-grow" />
    //       </div>
    //       <div className="text-center">
    //         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
    //       </div>
    //     </form>
    //     <p className="mt-4 text-center text-gray-600">If you don't have an account, <a href="#" className="text-blue-500 hover:text-blue-700">sign up here</a>.</p>
    //   </div>
    // </div>

    <div className="bg-gray-100">

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form>
            <div className="mb-4 flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon icon={faUser} className="text-gray-500" />
              </div>
              <input type="text" id="name" name="name" placeholder="Your Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4 flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon icon={faLock} className="text-gray-500" />
              </div>
              <input type="email" id="email" name="email" placeholder="Your Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>


            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
            </div>
            <p className="mt-4 text-center text-gray-600">If you don't have an account, <a href="#" className="text-blue-500 hover:text-blue-700">sign up here</a>.</p>

          </form>
        </div>
      </div>
    </div>



  );
}

