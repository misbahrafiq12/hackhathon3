import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DetailCard = () => {
  return (
    
    <Card className="w-[410px] h-[500px] mt-8 mx-auto rounded-t-lg bg-white">
{/* car images */}


      {/* Heading Section car detail */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 leading-12 tracking-tight">
        BMW X5
        </h1>
        {/* Reviews Section */}
        <div className="flex items-center mt-2 space-x-2">
          <Image src="/Review Star.png" alt="Review Stars" width={120} height={24} />
          <span className="text-sm font-medium text-gray-500">440+ Reviewer</span>
        </div>
      </div>

      <div className="p-6 text-gray-600">
        <p className="text-base font-normal">
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
        </p>
      </div>

      {/* Specifications Section - Horizontal Layout */}
      <div className="flex justify-between p-6 space-x-12">
        {/* Type Car and Steering Section - Vertically Aligned */}
        <div className="flex flex-col space-y-4">
          <div className="flex">
            <span className="text-gray-500 text-sm">Type Car</span>
            <span className="ml-12 text-gray-800 font-semibold text-sm">Sport</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 text-sm">Steering</span>
            <span className="ml-12 text-gray-800 font-semibold text-sm">Manual</span>
          </div>
        </div>

        {/* Capacity and Gasoline Section - Vertically Aligned */}
        <div className="flex flex-col space-y-4">
          <div className="flex">
            <span className="text-gray-500 text-sm">Capacity</span>
            <span className="ml-12 text-gray-800 font-semibold text-sm">7 Person</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 text-sm">Gasoline</span>
            <span className="ml-12 text-gray-800 font-semibold text-sm">70L</span>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="p-6 flex justify-between items-center">
  <div className="flex flex-col">
    <div className="flex items-baseline">
      <h1 className="text-lg font-bold text-gray-800">$150.00/</h1>
      <span className="ml-1 text-gray-400">day</span>
    </div>
    <div className="text-sm line-through text-gray-400">$100.00</div>
  </div>
  <div>
    <Link href={'/Payment'}>
      <button className="p-2 bg-blue-600 text-white font-semibold rounded-lg">
        Rent Now
      </button>
    </Link>
  </div>
</div>

    </Card>
  );
};

export default DetailCard;
