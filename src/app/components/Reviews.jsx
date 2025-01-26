import React from 'react';
import Image from 'next/image';

const Reviews = () => {
  return (
    <div className="w-[900px] h-[452px] mt-6 mx-auto rounded-lg bg-white shadow-md p-6">
      {/* Header Section */}
      <div className="flex  mb-4">
        {/* Reviews Heading */}
        <h2 className="text-[20px] font-semibold text-gray-800">Reviews</h2>
        {/* Show All Button */}
        <span className="px-4 py-1 ml-5 rounded bg-blue-600 text-white text-sm font-medium">13</span>
      </div>

      {/* Review Card */}
      <div className="w-full h-[124px] flex items-center  rounded-lg p-4 mb-4">
        {/* Profile Image */}
        <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 mr-4">
          <Image src="/proile.png" alt="Profile" width={56} height={56} />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">Alex Stanton</h3>
          <p className="text-sm text-gray-400">CEO at Bukalapak</p>
        </div>

        {/* Date and Rating */}
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-500">21 July 2022</span>
          <div className="flex items-center mt-1">
            <Image src="/Review Star.png" alt="Star Rating" width={108} height={20} />
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-600 leading-6 mt-[-30px] ml-[80px]" >
        We are very happy with the service from the MORENT App. Morent has a low price and also a 
        large variety of cars with good and comfortable facilities. In addition, the service provided by 
        the officers is also very friendly and very polite.
      </p>


      {/* ----------------------------- */}


      {/* Review Card */}
      <div className="w-full h-[124px] flex items-center  rounded-lg p-4 mb-4">
        {/* Profile Image */}
        <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 mr-4">
          <Image src="/profill.png" alt="Profile" width={56} height={56} />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">Alex Stanton</h3>
          <p className="text-sm text-gray-400">CEO at Bukalapak</p>
        </div>

        {/* Date and Rating */}
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-500">21 July 2022</span>
          <div className="flex items-center mt-1">
            <Image src="/Review Star.png" alt="Star Rating" width={108} height={20} />
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-600 leading-6 mt-[-30px] ml-[80px]" >
        We are very happy with the service from the MORENT App. Morent has a low price and also a 
        large variety of cars with good and comfortable facilities. In addition, the service provided by 
        the officers is also very friendly and very polite.
      </p>
    </div>
  );
};

export default Reviews;
