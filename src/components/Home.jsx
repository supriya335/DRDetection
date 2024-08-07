import React from 'react'

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-2 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className='py-8'>
            <h2 className="text-2xl font-semibold mb-4">Information about Diabetic Retinopathy</h2>
            <p className="text-gray-700 mb-4 text-justify">
              Diabetic retinopathy is a diabetes complication that affects eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).
            </p>
            <p className="text-gray-700 text-justify">
              At first, diabetic retinopathy may cause no symptoms or only mild vision problems. Eventually, it can cause blindness. Here's a comprehensive overview of the causes, symptoms, diagnosis, and treatment of diabetic retinopathy.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <img src={require("../images/dr1.png")} alt="Diabetic Retinopathy" className="w-auto rounded-lg" />
          </div>
        </div>
      </div>

      <div>
        <p className="ml-20 font-bold text-lg">The symptoms of Diabetic Retinopathy in the early stages,diabetic retinopathty may not cause any noticeable symptoms.</p>
        <p className="ml-20 font-bold text-lg">As the condition progresse,symptoms may include:</p>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-wrap max-w-screen-lg">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <img src={require("../images/symptom1.png")} alt="Image 1" class="w-full h-auto" />
            <div class="mt-2">
              <p class="text-lg font-bold">Blurred vision</p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <img src={require("../images/symptom2.png")} alt="Image 2" class="w-full h-auto" />
            <div class="mt-2">
              <p class="text-lg font-bold">Fluctuating vision</p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <img src={require("../images/symptom3.png")} alt="Image 3" class="w-full h-auto" />
            <div class="mt-2">
              <p class="text-lg font-bold">Dark spots or strings(floaters)</p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <img src={require("../images/symptom4.png")} alt="Image 4" class="w-full h-auto" />
            <div class="mt-2">
              <p class="text-lg font-bold">Blurred or distorted vision</p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <img src={require("../images/symptom5.png")} alt="Image 5" class="w-full h-auto" />
            <div class="mt-2">
              <p class="text-lg font-bold">Partial or total loss of vision</p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
