'use client';
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client"; // Sanity function import ho raha hai
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Apke Button component ka path

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

// Sanity Client Configuration
const sanity = createClient({
  projectId: "06p8ilu5", // Sanity Project ID
  dataset: "production", // Dataset name
  apiVersion: "2021-08-31", // API Version
  useCdn: true, // CDN enable karega fast fetching ke liye
});

// Main Component
const CarsData = () => {
  const [cars, setCars] = useState([]);

  // Fetch Cars from Sanity
  const fetchCars = async () => {
    try {
      const query = `*[_type == "car"] {
        id,
        name,
        type,
        fuel_capacity,
        transmission,
        seating_capacity,
        price_per_day,
        original_price,
        "image_url": carImage.asset->url,
        tags
      }`;

      const data = await sanity.fetch(query); // Sahi function call
      setCars(data);
      console.log(data);
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  };

  // Fetch cars on component mount
  useEffect(() => {
    console.log('fetch');
    fetchCars();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full max-w-6xl">
      {cars.map((car) => (
        <Card
          key={car.id}
          className="w-full max-w-[304px] h-auto lg:h-[420px] gap-0 rounded-tl-[10px] opacity-100 mt-10 mx-auto lg:mx-0 bg-[#FFFFFF] shadow-lg"
        >
          {/* Header */}
          <CardHeader className="w-full h-auto p-4 text-left">
            <CardTitle className="font-plusJakartaSans text-[20px] font-bold leading-[25.2px] text-[#000000]">
              {car.name}
            </CardTitle>
            <CardDescription className="font-plusJakartaSans text-[14px] font-bold leading-[17.64px] text-[#90A3BF]">
              {car.type}
            </CardDescription>
          </CardHeader>

          {/* Content */}
          <CardContent className="flex flex-col items-center gap-4 mt-4">
            {/* Image */}
            <div className="flex justify-center items-center mt-4">
              <Image
                src={car.image_url || '/suv.png'} // Default image if URL is null or undefined
                alt={car.name}
                className="w-full max-w-[248px] h-auto shadow-lg"
                width={248}
                height={100}
                loading="lazy"
              />
            </div>

            {/* Info Text */}
            <div className="flex flex-wrap justify-between w-full max-w-[256px] mt-4 text-center gap-4">
              <span className="text-[#90A3BF]">70L</span>
              <span className="text-[#90A3BF]">Manual</span>
              <span className="text-[#90A3BF]">7 seats</span>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex justify-between items-center mt-4 p-4">
            <div>
              <h3 className="font-plusJakartaSans text-[20px] font-bold leading-[25.2px] text-[#000000]">
                $150.00{" "}
                <span className="text-[14px] font-bold text-[#90A3BF]">
                  /day
                </span>
              </h3>
            </div>
            <Link href="/DetailCarRent">
              <Button className="w-auto px-4 py-2 bg-[#3563E9] font-plusJakartaSans text-[16px] font-semibold text-white rounded">
                Rent Now
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CarsData;
