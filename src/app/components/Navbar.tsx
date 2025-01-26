import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <NavigationMenu className="w-full h-auto relative bg-white flex items-center justify-between max-w-[1440px] max-h-[124px] border border-white ;


">
      <NavigationMenuList className="flex items-center justify-between p-4 px-12 gap-28 w-full">
        {/* Logo */}
        <NavigationMenuItem>
          <NavigationMenuLink
            id="logo"
            className="text-lg font-bold text-black"
          >
            MORENT
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search Section */}
        <div
          id="search"
          className="relative w-[492px] h-[44px] flex items-center bg-white border border-[#C3D4E9] rounded-[70px]"
        >
          {/* Search Icon */}
          <div className="absolute left-2">
            <Image
              src="/search-normal.svg"
              alt="Search Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full pl-10 pr-10 text-sm font-medium bg-transparent focus:outline-none"
          />

          {/* Secondary Search Icon */}
          <div className="absolute right-2">
            <Image
              src="/search.png"
              alt="Search Icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
        </div>
      </NavigationMenuList>

      {/* Profile div */}
      <div className="flex items-center gap-5 ml-auto mr-12">
        {/* Heart Icon */}
        <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full">
          <Image
            src="/heart.svg"
            alt="Heart Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>

        {/* Notification Icon */}
        <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full">
          <Image
            src="/Notification.png"
            alt="Notification Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>

        {/* Settings Icon */}
        <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full">
          <Image
            src="/Settings.svg"
            alt="Settings Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>

        {/* Profile Icon */}
        <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full">
          <Image
            src="/proile.png"
            alt="Profile Icon"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navbar;
