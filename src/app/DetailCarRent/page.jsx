import React from "react";

import Cards from "../components/Cards";
import Link from "next/link";
import Categories from '../components/Categories'
import CarCard from "../components/CarCart";
import Image from "next/image";
import DetailCard from "../components/DetailCard";
import Reviews from '../components/Reviews'

const page = () => {
  return (
    <div className="flex">
    <Categories/>

     {/* Main Content */}
 <div className="flex-grow p-8 overflow-x-auto bg-[#f6f7f9]">



 {/* CarCard Component */}
 <div className="flex ml-8">
<div className="flex flex-col">
<CarCard />

{/* Images Car */}
<div>
<div className="flex flex-row space-x-4 mt-4">
  <div className='w-[148px] h-[124px]  mx-auto rounded-lg bg-blue-600'>
  <div className="flex justify-center mt-6 rounded-md">
  <Image
     className="w-[130px] h-[100px] rounded-tl-lg hover:border-2 hover:border-blue-600 border-0 object-contain "
    src="/cars.png"
    width={148}
    height={124}/>

 
  </div>
  </div>

  <Image
    className="w-[148px] h-[124px] rounded-tl-lg hover:border-2 hover:border-blue-600 border-0 "
    src="/View 2.png"
    width={148}
    height={124}
  />
  <Image
    className="w-[148px] h-[124px] rounded-lg hover:border-2 hover:border-blue-600 border-0"
    src="/View 3.png"
    width={148}
    height={124}
  />
</div>

{/* reviews */}


</div>



</div>

{/* DetailCar Card */}
<div className="ml-4 ">
<DetailCard />
</div>
</div>

{/* recviews */}
<div className="flex ml-[-10px] flex-wrap gap-4">
<Reviews />
</div>

 {/* Cards */}
 <div className="flex ml-[-40px] flex-wrap gap-4">
   <Cards />
 </div>
{/* button */}
 <section className="button w-full text-center mt-20">
 <Link href={"/"}>
   <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
     Show More Cars
   </button>
 </Link>
</section>
</div>
</div>
  );
};

export default page;



