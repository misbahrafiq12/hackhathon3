import React from 'react';
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Location = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4"> {/* Responsive container */}
      {/* First Card */}
      <Card className="w-full lg:w-[500px] h-auto mt-4 gap-0 rounded-tl-[10px] bg-white px-[20px]">
        {/* Pickup */}
        <div className="flex items-center mt-[24px] gap-2">
          <input type="radio" className="w-4 h-4" />
          <label htmlFor="" className="font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-left">
            Pick - Up
          </label>
        </div>

        {/* Location Dropdown */}
        <div className="flex flex-row mt-[10px] justify-between gap-4"> {/* Always horizontal */}
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-left mb-1">
              Locations
            </label>
            <select
              name=""
              id=""
              className="w-[126px] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] rounded p-1 border focus:outline-none"
            >
              <option value="">Select your city</option>
              <option value="karachi">Karachi</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-left mb-1">
              Time
            </label>
            <select
              name=""
              id=""
              className="w-[126px] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] rounded p-1 border focus:outline-none"
            >
              <option value="">Select your Date</option>
              <option value="karachi">14</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-left mb-1">
              Date
            </label>
            <select
              name=""
              id=""
              className="w-[126px] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] rounded p-1 border focus:outline-none"
            >
              <option value="">Select your time</option>
              <option value="karachi">12:00</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Switch */}
      <div className="w-[60px] h-[60px] mt-[-5px] flex items-center justify-center bg-[#3563E9] rounded-lg">
        <Image src="/Swap.png" width={20} height={20} alt="Swap Icon" />
      </div>

      {/* Second Card */}
      <Card className="w-full lg:w-[500px] h-auto mt-4 gap-0 rounded-tl-[10px] bg-white px-[20px]">
        {/* Drop-off */}
        <div className="flex items-center mt-[24px] gap-2">
          <input type="radio" className="w-4 h-4" />
          <label htmlFor="" className="font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-left">
            Drop-off
          </label>
        </div>

        {/* Location Dropdown */}
        <div className="flex flex-row mt-[10px] justify-between gap-4"> {/* Always horizontal */}
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-left mb-1">
              Locations
            </label>
            <select
              name=""
              id=""
              className="w-[126px] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] rounded p-1 border focus:outline-none"
            >
              <option value="">Select your city</option>
              <option value="karachi">Karachi</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-left mb-1">
              Time
            </label>
            <select
              name=""
              id=""
              className="w-[126px] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] rounded p-1 border focus:outline-none"
            >
              <option value="">Select your Date</option>
              <option value="karachi">14</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-left mb-1">
              Date
            </label>
            <select
              name=""
              id=""
              className="w-[126px] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] rounded p-1 border focus:outline-none"
            >
              <option value="">Select your time</option>
              <option value="karachi">12:00</option>
            </select>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Location;
