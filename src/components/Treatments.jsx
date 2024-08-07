import React from 'react'



export default function Treatement() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-left font-bold mb-4 ">Treatments</h2>
      <p className="text-gray-700 text-base mb-8 text-justify">
        The Diabetic Retinopathy Treatment depends on the severity and stage of the disease. Early detection and treatment can help prevent vision loss or slow down its progresion. Here are some of the treatment options for diabetic retinopathy: </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"></div>

      <div className=" bg-gray-100 container mx-auto px-6 py-4  shadow-md">
        <div className='flex py-2'><img src={require("../images/blood.png")} alt="Logo" className="h-16 mr-8 " />
          <div className='border-l-2 border-gray-300 py-4'><h2 className="text-xl font-bold mb-2 pl-6">    Control of Blood Sugar Levels</h2></div>
        </div>
        <p className="text-gray-700 text-base text-justify">
          Keeping blood sugar levels under control is an important part of managing diabetic retinopathy. This can be achieved through a combination of lifestyle changes, such as exercise and a healthy diet, and medication, such as insulin or oral hypoglycemic agents.
        </p>
      </div> <br />

      <div className=" bg-gray-100 container mx-auto px-6 py-4  shadow-md">
        <div className='flex py-2'><img src={require("../images/laser.png")} alt="Logo" className="h-16 mr-10 " />
          <div className='border-l-2 border-gray-300 py-4'><h2 className="text-xl font-bold mb-2 pl-6"> Laser Therapy</h2></div>
        </div>
        <p className="text-gray-700 text-base text-justify">
          Laser therapy,also known as photocoagulation,is a common treatment for diabetic retionopathy.During this procedure,a laser beam is used to seal leaking blood vassels and prevent the growth of new ones.This can help prevent further damage to the retina and slow down the progression of the disease.
        </p>
      </div> <br />

      <div className=" bg-gray-100 container mx-auto px-6 py-4  shadow-md">
        <div className='flex py-2'>
          <img src={require("../images/injection.png")} alt="Logo" className="h-16 mr-6 " />
          <div className='border-l-2 border-gray-300 py-4'>
            <h2 className="text-xl font-bold mb-2 pl-6">  Intravitreal injections</h2></div>
        </div>
        <p className="text-gray-700 text-base text-justify">
          These are injections of medication directly into the eye.Anti-VEGF(vascular endothelial growth factor)injections can help reduce the growth of abnormal blood vessels and prevent them from leaking.Steroid injections can also be used to reduce inflammation in the eye.
        </p>
      </div> <br />

      <div className=" bg-gray-100 container mx-auto px-6 py-4  shadow-md">
        <div className='flex py-2'><img src={require("../images/Vitrectomy.png")} alt="Logo" className="h-16 mr-12 " />
          <div className='border-l-2 border-gray-300 py-4'><h2 className="text-xl font-bold mb-2 pl-6">  Vitrectomy  </h2></div>
        </div>
        <p className="text-gray-700 text-base text-justify">
          In advanced cases of diabetic retinopathy,vitrectomy may be necessary.This surgical procedure involves removing the vitreous gel that fills the center of the eye and repiacing it with a clear solution.This can help imorove vision by reducing the amount of scar tissue and blood in the eye.
        </p>
      </div> <br />

      <div className=" bg-gray-100 container mx-auto px-6 py-4  shadow-md">
        <div className='flex py-2'><img src={require("../images/medication.png")} alt="Logo" className="h-16 mr-10 " />
          <div className='border-l-2 border-gray-300 py-4'><h2 className="text-xl font-bold mb-2 pl-6"> Anti-inflammatory Medication</h2></div>
        </div>
        <p className="text-gray-700 text-base text-justify">
          Nonsteroidal anti-inflammatory drugs(NSAIDs) and corticosteroids can help reduce inflammation in the eye and prevent further damage.
        </p>
      </div> <br />

      
    </div>
  )
}
