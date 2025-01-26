import React from 'react'
import CardItems from './CardItems'

const Cards = () => {
  return (
    <>
    <div className='width: Hug (1,312px)px;
height: Hug (1,356px)px;
top: 592px;
left: 64px;
gap: 32px;
opacity: 0px;
'></div>

    <div className="flex justify-center mt-10">
      
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      <CardItems />
     <CardItems />
      <CardItems /> 
    </div>
    
  </div>
{/* ----------------- */}
  {/* <div className="flex justify-center mt-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      <CardItems />
      <CardItems />
      <CardItems />
    </div>
    
  </div> */}


{/* ---------------- */}
  {/* <div className="flex justify-center mt-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      <CardItems />
      <CardItems />
      <CardItems />
    </div>
    
  </div> */}
  </>
  
  )
}

export default Cards

