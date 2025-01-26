import React from "react";
import Location from "../components/Location";
import Cards from "../components/Cards";
import Link from "next/link";
import Categories from '../components/Categories'
const page = () => {
  return (
    <div className="flex">
    <Categories/>

     {/* Main Content */}
 <div className="flex-grow p-8 overflow-x-auto bg-[#f6f7f9]">
 {/* Location */}
 <div className="mb-8">
   <Location />
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



