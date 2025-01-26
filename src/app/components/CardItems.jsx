import React from 'react';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Image from 'next/image';
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
import CarsData from './CarsData';

const CardItems = () => {
  return (
    // <Card className="w-full max-w-[304px] h-auto lg:h-[420px] gap-0 rounded-tl-[10px] opacity-100 mt-10 mx-auto lg:mx-0 bg-[#FFFFFF]">
    //   {/* Header */}
    //   <CardHeader className="w-full h-auto p-4 text-left">
    //     <CardTitle className="font-plusJakartaSans text-[20px] font-bold leading-[25.2px] text-[#000000]">
    //       CR - V
    //     </CardTitle>
    //     <CardDescription className="font-plusJakartaSans text-[14px] font-bold leading-[17.64px] text-[#90A3BF]">
    //       SUV
    //     </CardDescription>
    //   </CardHeader>

    //   {/* Content */}
    //   <CardContent className="flex flex-col items-center gap-4 mt-4">
    //     {/* Image */}
    //     <Image
    //       src="/Car.png"
    //       alt="Car"
    //       className="w-full max-w-[248px] h-auto shadow-lg"
    //       width={248}
    //       height={100}
    //     />

    //     {/* Info Text */}
    //     <div className="flex flex-wrap justify-between w-full max-w-[256px] mt-4 text-center gap-4">
    //       <span className="text-[#90A3BF]">80L</span>
    //       <span className="text-[#90A3BF]">Manual</span>
    //       <span className="text-[#90A3BF]">6 People</span>
    //     </div>
    //   </CardContent>

    //   {/* Footer */}
    //   <CardFooter className="flex justify-between items-center mt-4 p-4">
    //     <div>
    //       <h3 className="font-plusJakartaSans text-[20px] font-bold leading-[25.2px] text-[#000000]">
    //         $80.00 <span className="text-[14px] font-bold text-[#90A3BF]">/day</span>
    //       </h3>
    //     </div>
    //     <Link href="/DetailCarRent">
    //       <Button className="w-auto px-4 py-2 bg-[#3563E9] font-plusJakartaSans text-[16px] font-semibold text-white rounded">
    //         Rent Now
    //       </Button>
    //     </Link>
    //   </CardFooter>
    // </Card>
    <CarsData/>
  );
};

export default CardItems;
