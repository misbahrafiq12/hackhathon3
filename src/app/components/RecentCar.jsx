import React from "react";
import Image from "next/image";

const RecentCar = () => {
  return (
    <div className="w-[440px] h-[510px] mt-5 p-6 rounded-md bg-white shadow-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-[20px] font-bold text-[#1A202C]">Recent Transaction</div>
        <div className="text-[12px] font-medium text-[#3563E9] cursor-pointer">View All</div>
      </div>

      {/* Cars Section */}
      <div className="space-y-4 border-b-2 py-5">
        {/* Single Car */}
        <div className="flex items-center justify-between border-0 rounded-lg ">
          {/* Car Image */}
          <div className="flex items-center  gap-4 border-0 ">
            <div className="w-[90px] h-[70px]  rounded overflow-hidden">
              <Image
                src="/cars.png"
                alt="Car"
                width={90} // Set width to match the container
                height={70} // Set height to match the container
                className="object-cover mt-4" // Ensures the image fills the container
              />
            </div>
            <div>
              <div className="text-[16px] font-bold text-[#1A202C]">Koegninsegg</div>
              <div className="text-[12px] font-medium text-[#90A3BF]">Sport Car</div>
            </div>
          </div>

          {/* Date and Price */}
          <div className="text-right">
            <div className="text-[12px] font-medium text-[#90A3BF]">20 July</div>
            <div className="text-[16px] font-bold text-[#1A202C]">$80.00</div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="space-y-4 border-b-2 py-5">
        {/* Single Car */}
        <div className="flex items-center justify-between border-0 rounded-lg ">
          {/* Car Image */}
          <div className="flex items-center  gap-4 border-0 ">
            <div className="w-[90px] h-[70px]  rounded overflow-hidden">
              <Image
                src="/car.png"
                alt="Car"
                width={90} // Set width to match the container
                height={70} // Set height to match the container
                className="object-cover mt-4" // Ensures the image fills the container
              />
            </div>
            <div>
              <div className="text-[16px] font-bold text-[#1A202C]">Nissan GT - R</div>
              <div className="text-[12px] font-medium text-[#90A3BF]">Rolls-Royce</div>
            </div>
          </div>

          {/* Date and Price */}
          <div className="text-right">
            <div className="text-[12px] font-medium text-[#90A3BF]">20 July</div>
            <div className="text-[16px] font-bold text-[#1A202C]">$80.00</div>
          </div>
        </div>
      </div>

      <div className="space-y-4 border-b-2 py-5">
        {/* Single Car */}
        <div className="flex items-center justify-between border-0 rounded-lg ">
          {/* Car Image */}
          <div className="flex items-center  gap-4 border-0 ">
            <div className="w-[90px] h-[70px]  rounded overflow-hidden">
              <Image
                src="/Car (2).png"
                alt="Car"
                width={90} // Set width to match the container
                height={70} // Set height to match the container
                className="object-cover mt-4" // Ensures the image fills the container
              />
            </div>
            <div>
              <div className="text-[16px] font-bold text-[#1A202C]">Nissan GT - R</div>
              <div className="text-[12px] font-medium text-[#90A3BF]">Sport Car</div>
            </div>
          </div>

          {/* Date and Price */}
          <div className="text-right">
            <div className="text-[12px] font-medium text-[#90A3BF]">18 July</div>
            <div className="text-[16px] font-bold text-[#1A202C]">$96.00</div>
          </div>
        </div>
      </div>

      <div className="space-y-4 border-b-2 py-5">
        {/* Single Car */}
        <div className="flex items-center justify-between border-0 rounded-lg ">
          {/* Car Image */}
          <div className="flex items-center  gap-4 border-0 ">
            <div className="w-[90px] h-[70px]  rounded overflow-hidden">
              <Image
                src="/suv.png"
                alt="Car"
                width={90} // Set width to match the container
                height={70} // Set height to match the container
                className="object-cover mt-4" // Ensures the image fills the container
              />
            </div>
            <div>
              <div className="text-[16px] font-bold text-[#1A202C]">CR-V</div>
              <div className="text-[12px] font-medium text-[#90A3BF]">SUV</div>
            </div>
          </div>

          {/* Date and Price */}
          <div className="text-right">
            <div className="text-[12px] font-medium text-[#90A3BF]">17 July</div>
            <div className="text-[16px] font-bold text-[#1A202C]">$80.00</div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default RecentCar;
