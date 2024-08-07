import React from 'react'

export default function Footer() {
  return (
   <>

<footer class="bg-blue-500 shadow-md text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8">
      <div class="flex flex-col space-y-4">
        <h4 class="text-lg font-semibold">About Us</h4>
        <p class="text-sm">We are dedicated to providing information and resources about diabetic retinopathy.</p>
       
      </div>
      <div class="flex flex-col space-y-4">
        <h4 class="text-lg font-semibold">Contact Us</h4>
        <p class="text-sm">Email: info@diabeticretinopathy.com</p>
        <p class="text-sm">Phone: +123456789</p>
      </div>
      <div class="flex flex-col space-y-4">
        <h4 class="text-lg font-semibold">Follow Us</h4>
        <div class="flex space-x-4 pl-24">
          <a href="#" class="text-sm">Facebook</a>
          <a href="#" class="text-sm">Twitter</a>
          <a href="#" class="text-sm">Instagram</a>
        </div>
      </div>
    </div>
   
    <div class="flex justify-between items-center">
      <p class="text-sm">© 2024 Diabetic Retinopathy Foundation. All rights reserved.</p>
     
    </div>
  </div>
</footer>

   </>
  )
}
