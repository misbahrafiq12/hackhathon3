import Image from 'next/image';
import React from 'react';
import RecentCar from '../components/RecentCar';

const TopCar = () => {
  const carData = [
    { type: 'Sport Car', count: '17,439', color: '#0D3559' },
    { type: 'SUV', count: '16,203', color: '#274E6B' },
    { type: 'Coupe', count: '18,197', color: '#3D6885' },
    { type: 'Hatchback', count: '12,501', color: '#53829E' },
    { type: 'MPV', count: '14,406', color: '#6A9BB8' },
  ];

  return (
    <div className='flex flex-col ml-8 '>
    <div className="w-[440px] h-auto p-8 mt-5 rounded-md bg-white">
      {/* Title */}
      <div className="text-[#1A202C] text-[20px] font-bold leading-[30px] mb-6">
        Top 5 Car Rental
      </div>

      {/* Main Content */}
      <div className="flex items-center">
        {/* Image Section */}
        <div className="relative w-[210px] h-[210px] rounded-tl-[5px]">
          <Image
            src="/Chart.png"
            alt="Car Image"
            layout="fill"
            objectFit="cover"
          />
          {/* Image Overlay */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-[#1A202C] text-[24px] font-bold leading-[36px]">
              72,030
            </div>
            <div className="text-[#90A3BF] text-[14px] font-medium leading-[21px]">
              Rental Car
            </div>
          </div>
        </div>

        {/* List Section */}
        <div className="ml-6 flex-1">
          {carData.map((car, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4 last:mb-0"
            >
              <div className="flex items-center gap-2">
                {/* Gradient Dot */}
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: car.color }}
                ></div>
                <div className="text-[#90A3BF] text-[14px] font-semibold leading-[21px]">
                  {car.type}
                </div>
              </div>
              <div className="text-[#1A202C] text-[14px] font-semibold leading-[21px]">
                {car.count}
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
     <RecentCar />
     </div>
  );
};

export default TopCar;
