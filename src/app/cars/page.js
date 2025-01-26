'use client';
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Replace with your Button component path

// Sanity Client Configuration
const sanity = createClient({
  projectId: "06p8ilu5",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

// Main Component
const CarList = () => {
  const [cars, setCars] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch Cars from Sanity
  const fetchCars = async () => {
    try {
      const query = `*[_type == "cars"] {
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

      const data = await sanity.fetch(query);
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  // Add to Cart
  const addToCart = (car) => {
    setCart((prevCart) => [...prevCart, car]);
    alert(`${car.name} has been added to your cart`);
  };

  // Fetch cars on component mount
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="w-full max-w-[304px] h-auto lg:h-[420px] gap-0 rounded-tl-[10px] opacity-100 bg-[#FFFFFF] shadow-lg"
        >
          {/* Header */}
          <div className="w-full h-auto p-4 text-left">
            <h2 className="font-plusJakartaSans text-[20px] font-bold text-[#000000]">
              {car.name}
            </h2>
            <p className="font-plusJakartaSans text-[14px] font-bold text-[#90A3BF]">
              {car.type}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center mt-4">
            <Image
              src={car.image_url}
              alt={car.name}
              className="w-full max-w-[248px] h-auto shadow-lg"
              width={248}
              height={100}
            />
          </div>

          {/* Info Text */}
          <div className="flex flex-wrap justify-between w-full max-w-[256px] mt-4 mx-auto text-center gap-4">
            <span className="text-[#90A3BF]">{car.fuel_capacity}</span>
            <span className="text-[#90A3BF]">{car.transmission}</span>
            <span className="text-[#90A3BF]">{car.seating_capacity} People</span>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 p-4">
            <h3 className="font-plusJakartaSans text-[20px] font-bold text-[#000000]">
              ${car.price_per_day}{" "}
              <span className="text-[14px] font-bold text-[#90A3BF]">/day</span>
            </h3>
            <Button
              onClick={() => addToCart(car)}
              className="bg-[#3563E9] text-white px-4 py-2 rounded font-semibold"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
