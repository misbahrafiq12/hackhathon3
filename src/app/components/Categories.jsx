import React from 'react'

const Categories = () => {
    return (
     <>
        {/* Sidebar */}
        <div className="w-[300px] h-full p-8 border-r border-gray-200 bg-white">
          {/* Type */}
          <div className="space-y-7">
            <label htmlFor="" className="text-xs font-semibold text-[#90A3BF]">
              Type
            </label>
            <div className="space-y-8">
              <div className="flex font-semibold items-center gap-2">
                <input type="checkbox" checked />
                <label htmlFor="">
                  Sport <span className="text-gray-500">(10)</span>
                </label>
              </div>
              <div className="flex font-semibold items-center gap-2">
                <input type="checkbox" checked />
                <label htmlFor="">
                  SUV <span className="text-gray-500">(12)</span>
                </label>
              </div>
              <div className="flex font-semibold items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">
                  MPV <span className="text-gray-500">(16)</span>
                </label>
              </div>
              <div className="flex font-semibold items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">
                  Sedan <span className="text-gray-500">(20)</span>
                </label>
              </div>
              <div className="flex font-semibold items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">
                  Coupe <span className="text-gray-500">(14)</span>
                </label>
              </div>
              <div className="flex font-semibold items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">
                  Hatchback <span className="text-gray-500">(14)</span>
                </label>
              </div>
            </div>
          </div>
  
          {/* Capacity */}
          <div className="w-[176px] h-[240px] mt-10 space-y-7">
            <div className="text-xs font-semibold text-[#90A3BF]">Capacity</div>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="capacity-2p" checked />
                <label htmlFor="capacity-2p" className="text-sm font-semibold">
                  2 Person <span className="text-gray-500">(10)</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="capacity-4p" />
                <label htmlFor="capacity-4p" className="text-sm font-semibold">
                  4 Person <span className="text-gray-500">(14)</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="capacity-6p" />
                <label htmlFor="capacity-6p" className="text-sm font-semibold">
                  6 Person <span className="text-gray-500">(8)</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="capacity-8p" checked />
                <label htmlFor="capacity-8p" className="text-sm font-semibold">
                  8 Person <span className="text-gray-500">(5)</span>
                </label>
              </div>
            </div>
          </div>
  
          {/* Price */}
          <div className="space-y-4 mt-10">
            <label htmlFor="" className="text-xs font-semibold text-gray-500">
              Price
            </label>
            <input
              type="range"
              id="price"
              name="price"
              min="0"
              max="100"
              className="w-full"
            />
            <div className="text-[#90A3BF] text-sm font-normal ">
              Max. $100.00
            </div>
          </div>
        </div>
        </>
       
      
    );
  };
  
  export default Categories;



