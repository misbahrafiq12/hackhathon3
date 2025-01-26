import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const CarCart = () => {
  return (
   
    <Card className="w-[450px] h-[360px] mt-8 mx-auto rounded-lg bg-blue-600">
     
        {/* H1 and Paragraph Wrapper */}
        <div className="w-[350px] mx-auto pt-8 text-start ml-6">
          <h1 className="text-white font-semibold text-2xl leading-8 tracking-tight w-[340px] box-border">
            Sports car with the best design and acceleration
          </h1>
          <p className="mt-4 text-white text-base leading-6 w-[300px] box-border">
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
        </div>
   
      {/* Image Section */}
      <div className="flex justify-center mt-6 rounded-md">
        <Image src="/cars.png" width={380} height={120} alt="Sports Car" />
      </div>
    </Card>
    
  );
};

export default CarCart;
