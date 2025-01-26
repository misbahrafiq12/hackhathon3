import { Card } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Amount = () => {
  return (
    <Card className="w-[430px] h-[560px] ml-10 p-6 rounded-tl-md bg-white shadow-md">
      {/* Rental Summary */}
      <div className="mb-4">
        <div className="text-[20px] font-bold text-[#1A202C]">Rental Summary</div>
        <div className="text-[14px]  text-[#90A3BF]">
          Prices may change depending on the length of the rental and the price of your rental car.
        </div>
      </div>

      {/* Car Image and Details */}
      <div className="flex items-start gap-4 mb-6">
        <div className="rounded-tl-md overflow-hidden bg-blue-600 p-1">
          <Image
            className="w-[132px] h-[108px] object-contain"
            src="/cars.png"
            alt="Car"
            width={132}
            height={108}
          />
        </div>
        <div>
          <div className="text-[32px] font-bold text-[#1A202C]">Nissan GT - R</div>
          <Image src="/Review.png" alt="Rating" width={220} height={24} />
        </div>
      </div>

      {/* Subtotal and Tax */}
      <div className="flex justify-between text-[16px] font-medium text-[#90A3BF] mb-2">
        <span>Subtotal</span>
        <span className="font-semibold text-[#1A202C]">$80.00</span>
      </div>
      <div className="flex justify-between text-[16px] font-medium text-[#90A3BF] mb-4">
        <span>Tax</span>
        <span className="font-semibold text-[#1A202C]">$0</span>
      </div>

      {/* Promo Code Input */}
      
      <div className="flex items-center gap-2 mb-6 ">
        <input
          type="text"
          placeholder="Apply promo code"
          className="flex-1 h-[40px] px-4 text-[14px] text-gray-500 bg-[#F6F7F9] border  rounded-md focus:outline-none"
        />
        <Link href={'/AdminDashborad'} className='mb-5'>
        <span className="absolute text-[14px] font-medium text-black right-20 cursor-pointer ">
    
          Apply Now
        </span>
        </Link>
        
      </div>
     
      

      {/* Total Rental Price */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[20px] font-bold text-[#1A202C]">Total Rental Price</div>
          <div className="text-[14px]  text-[#90A3BF]">
            Overall price and includes rental discount
          </div>
        </div>
        <div className="text-[32px] font-bold text-[#1A202C]">$80.00</div>
      </div>
    </Card>
  );
};

export default Amount;
