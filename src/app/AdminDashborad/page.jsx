import React from 'react'
import DasboardSidebar from '../components/DasboardSidebar'
import DetailRent from '../components/DetailRent'
import TopCar from '../components/TopCar'

const page = () => {
  return (
    <div className='w-[1440px] flex h-[900px] bg-[#F6F7F9] '>
      <DasboardSidebar />
      <div className='flex'>
      <DetailRent/>
      <TopCar/>
      </div>

  
    </div>
  )
}

export default page
