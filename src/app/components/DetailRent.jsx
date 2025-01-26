import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const DetailRent = () => {
  return (
    <div className="w-[440px] h-[860px] p-4 rounded-md bg-white shadow-lg ml-8 mt-5">
      {/* Details Rental Heading */}
      <div className="mb-4 text-[20px] font-bold text-[#1A202C]">
        Details Rental
      </div>

      {/* Map Section */}
      <div className="w-full h-[272px] mb-6 rounded-md bg-[#F6F7F9] overflow-hidden">
        <Image
          src="/Maps.png"
          alt="Map"
          width={486}
          height={272}
          className="w-full h-full object-cover"
        />
      </div>

      <Card className="w-full h-auto border-0 mb-6 rounded-md bg-white shadow-none">
        {/* Car Image and Details */}
        <div className="flex items-start gap-4 mb-6">
          <div className="rounded-md overflow-hidden bg-blue-600 p-1">
            <Image
              className="w-[132px] h-[108px] object-contain"
              src="/cars.png"
              alt="Car"
              width={132}
              height={108}
            />
          </div>
          <div>
            <div className="text-[24px] font-bold text-[#1A202C]">Nissan GT - R</div>
            <Image src="/Review.png" alt="Rating" width={220} height={24} />
          </div>
        </div>

        {/* Pickup and Drop-off Cards */}
        <div className="flex flex-col gap-4">
          {/* Pickup Card */}
          <Card className="w-full h-auto p-2 border-0 rounded-md bg-white shadow-none">
            <div className="flex items-center gap-2 mb-4">
              <input type="radio" className="w-4 h-4" />
              <label className="text-[16px] font-semibold">Pick - Up</label>
            </div>
            <div className="flex justify-between gap-4">
              {/* Location Dropdown */}
              <div>
                <label className="block text-[16px] font-bold mb-1">Location</label>
                <select className="w-full text-[12px] p-2 rounded focus:outline-none border border-gray-300">
                  <option value="">Select your city</option>
                  <option value="karachi">Karachi</option>
                </select>
              </div>
              {/* Time Dropdown */}
              <div>
                <label className="block text-[16px] font-bold mb-1">Time</label>
                <select className="w-full text-[12px] p-2 rounded focus:outline-none border border-gray-300">
                  <option value="">Select time</option>
                  <option value="12:00">12:00</option>
                </select>
              </div>
              {/* Date Dropdown */}
              <div>
                <label className="block text-[16px] font-bold mb-1">Date</label>
                <select className="w-full text-[12px] p-2 rounded focus:outline-none border border-gray-300">
                  <option value="">Select date</option>
                  <option value="14">14</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Drop-off Card */}
          <Card className="w-full h-auto p-2 border-0  rounded-md bg-white shadow-none">
            <div className="flex items-center gap-2 mb-4">
              <input type="radio" className="w-4 h-4" />
              <label className="text-[16px] font-semibold">Drop-off</label>
            </div>
            <div className="flex justify-between gap-4">
              {/* Location Dropdown */}
              <div>
                <label className="block text-[16px] font-bold mb-1">Location</label>
                <select className="w-full text-[12px] p-2 rounded focus:outline-none border border-gray-300">
                  <option value="">Select your city</option>
                  <option value="karachi">Karachi</option>
                </select>
              </div>
              {/* Time Dropdown */}
              <div>
                <label className="block text-[16px] font-bold mb-1">Time</label>
                <select className="w-full text-[12px] p-2 rounded focus:outline-none border border-gray-300">
                  <option value="">Select time</option>
                  <option value="12:00">12:00</option>
                </select>
              </div>
              {/* Date Dropdown */}
              <div>
                <label className="block text-[16px] font-bold mb-1">Date</label>
                <select className="w-full text-[12px] p-2 rounded focus:outline-none border border-gray-300">
                  <option value="">Select date</option>
                  <option value="14">14</option>
                </select>
              </div>
            </div>
          </Card>
        </div>

        {/* Total Rental Price */}
        <div className="flex justify-between items-center mt-6 pb-3">
          <div>
            <div className="text-[20px] font-bold text-[#1A202C]">Total Rental Price</div>
            <div className="text-[14px] text-[#90A3BF]">Overall price and includes rental discount</div>
          </div>
          <div className="text-[32px] font-bold text-[#1A202C]">$80.00</div>
        </div>
      </Card>
    </div>
  );
};

export default DetailRent;
