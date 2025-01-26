import React from 'react';
import { Input } from "@/components/ui/input";
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Amount from '../components/Amount'



const Page = () => {
  return (
    <div className="bg-[#F6F7F9] w-[1440px] h-[2240px] pt-5 flex  ">
      {/* left div */}
      <div>  {/* billing */}
      <Card className="w-full max-w-3xl p-8 bg-white rounded-md shadow-md ml-4">
        <form className="space-y-6">
          <div>
            {/* Form Header */}
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-[#1A202C]">Billing Info</h1>
              <p className="text-sm font-medium text-[#90A3BF]">
                Please enter your billing info
              </p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex-1 min-w-[280px]">
                  <label
                    htmlFor="username1"
                    className="block text-sm font-semibold text-[#1A202C]"
                  >
                    Username
                  </label>
                  <Input
                    id="username1"
                    placeholder="your name"
                    className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                  />
                </div>

                <div className="flex-1 min-w-[280px]">
                  <label
                    htmlFor="username2"
                    className="block text-sm font-semibold text-[#1A202C]"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="username2"
                    placeholder="Phone Number"
                    className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex-1 min-w-[280px]">
                  <label
                    htmlFor="username3"
                    className="block text-sm font-semibold text-[#1A202C]"
                  >
                    Address
                  </label>
                  <Input
                    id="username3"
                    placeholder="Address"
                    className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                  />
                </div>

                <div className="flex-1 min-w-[280px]">
                  <label
                    htmlFor="username4"
                    className="block text-sm font-semibold text-[#1A202C]"
                  >
                    Town/City
                  </label>
                  <Input
                    id="username4"
                    placeholder="Town or City"
                    className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Card>
      {/* rental card */}
      <Card className="w-full max-w-3xl p-8 bg-white rounded-md shadow-md ml-4 mt-5">
        <form className="space-y-6">
          {/* Form Header */}
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-[#1A202C]">Rental Info</h1>
            <p className="text-sm font-medium text-[#90A3BF]">
              Please enter your rental info
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col">
            {/* Radio Buttons */}
            <div className="flex items-center space-x-4 mt-4">
              <label className="flex items-center space-x-2">
                <Input type="radio" name="rentalType" className="w-4 h-4" />
                <span className="text-sm font-medium text-[#1A202C]">Pick-up</span>
              </label>
              
            </div>

            {/* Locations and Date */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex-1 min-w-[280px]">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-[#1A202C]"
                >
                  Location
                </label>
                <select
                  id="location"
                  className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                >
                  <option value="" style={{color:'#F6F7F9'}}>Select your city</option>
                </select>
              </div>

              <div className="flex-1 min-w-[280px]">
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-[#1A202C]"
                >
                  Date
                </label>
                <select
                  id="date"
                  className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                >
                  <option value="">Select your date</option>
                </select>
              </div>
            </div>

            {/* Time */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex-1 min-w-[280px]">
                <label
                  htmlFor="time"
                  className="block text-sm font-semibold text-[#1A202C]"
                >
                  Time
                </label>
                <select
                  id="time"
                  className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                >
                  <option value="">Select your time</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {/* Radio Buttons */}
            <div className="flex items-center space-x-4 mt-4">
              <label className="flex items-center space-x-2">
                <Input type="radio" name="rentalType" className="w-4 h-4" />
                <span className="text-sm font-medium text-[#1A202C]">Drop-off</span>
              </label>
              
            </div>

            {/* Locations and Date */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex-1 min-w-[280px]">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-[#1A202C]"
                >
                  Location
                </label>
                <select
                  id="location"
                  className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                >
                  <option value="">Select your city</option>
                </select>
              </div>

              <div className="flex-1 min-w-[280px]">
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-[#1A202C]"
                >
                  Date
                </label>
                <select
                  id="date"
                  className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                >
                  <option value="">Select your date</option>
                </select>
              </div>
            </div>

            {/* Time */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex-1 min-w-[280px]">
                <label
                  htmlFor="time"
                  className="block text-sm font-semibold text-[#1A202C]"
                >
                  Time
                </label>
                <select
                  id="time"
                  className="mt-1 w-full h-14 rounded-md bg-[#F6F7F9] border border-gray-300"
                >
                  <option value="">Select your time</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </Card>
{/* --------credit card */}

    <div className="w-full max-w-3xl p-8 bg-white rounded-md shadow-md ml-4 mt-5">
<div className="space-y-2">
            <h1 className="text-xl font-bold text-[#1A202C]">Payment Method</h1>
            <p className="text-sm font-medium text-[#90A3BF]">
            Please enter your payment method
            </p>
          </div>
      
      {/* Credit Card Section */}
      <form className="space-y-6 mt-5 p-3 bg-gray-100 ">
          <div>
            {/* Form Header */}
            

            {/* Form Fields */}
            <div className="flex flex-col">
            <div className="flex items-center space-x-4 mt-4">
              <label className="flex items-center space-x-2">
                <Input type="radio" name="rentalType" className="w-4 h-4" />
                <span className="text-sm font-medium text-[#1A202C]">Credit Card</span>
              </label>
              
            </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex-1 min-w-[280px]">
                  <label
                    htmlFor="username1"
                    className="block text-sm font-semibold text-[#1A202C]"
                  >
                    Card Number
                  </label>
                  <Input
                    id="username1"
                    placeholder="Card Number"
                    className="mt-1 w-full h-14 rounded-md bg-white border border-gray-300"
                  />
                </div>

                <div className="flex-1 min-w-[280px]">
                  <label
                    htmlFor="username2"
                    className="block text-sm font-semibold text-[#1A202C]"
                  >
                    Expiration Date
                  </label>
                  <Input
                    id="username2"
                    placeholder="DD/MM/YY"
                    className="mt-1 w-full h-14 rounded-md bg-white border border-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex-1 min-w-[280px]">
                  <label
                    htmlFor="username3"
                    className="block text-sm font-semibold text-[#1A202C]"
                  >
                    CardHolder
                  </label>
                  <Input
                    id="username3"
                    placeholder="Card holder"
                    className="mt-1 w-full h-14 rounded-md bg-white border border-gray-300"
                  />
                </div>

                <div className="flex-1 min-w-[280px]">
                  <label
                    htmlFor="username4"
                    className="block text-sm font-semibold text-[#1A202C]"
                  >
                    CVC
                  </label>
                  <Input
                    id="username4"
                    placeholder="CVC"
                    className="mt-1 w-full h-14 rounded-md bg-white border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

      {/* PayPal Section */}
      <div className="bg-gray-100 p-2  rounded-lg mb-6 mt-5 flex">
  <div className="flex items-center mb-4">
    <input
      type="radio"
      id="paypal"
      name="paymentMethod"
      value="paypal"
      checked
      className="mr-2"
    />
    <label htmlFor="paypal" className="text-gray-700 font-medium">
      PayPal
    </label>
  </div>

  <div className="flex-grow flex justify-end">
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
      alt="PayPal Logo"
     
      width={60}
      height={80}
    />
  </div>
</div>


      {/* Bitcoin Section */}
      <div className="bg-gray-100 p-2 rounded-lg mb-6 mt-5 flex">
  <div className="flex items-center mb-4">
    <input
      type="radio"
      id="paypal"
      name="paymentMethod"
      value="paypal"
      checked
      className="mr-2"
    />
    <label htmlFor="paypal" className="text-gray-700 font-medium">
      Bitcoin
    </label>
  </div>

  <div className="flex-grow flex justify-end">
    <Image
      src="/Bitcoin.png"
      alt=" Bitcoin Logo"
    
      width={80}
      height={50}
    />
  </div>
</div>

    </div>

     {/* cnfirmation */}
     <Card className="w-full max-w-3xl p-8 bg-white rounded-md shadow-md ml-4 mt-5">
        <form className="space-y-6">
          <div>
            {/* Form Header */}
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-[#1A202C]">Confirmation</h1>
              <p className="text-sm font-medium text-[#90A3BF]">
              We are getting to the end. Just few clicks and your rental is ready!
              </p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-4 mt-2">
              <div className="bg-gray-100 p-2 px-12 rounded-lg mb-6 mt-5 flex">
  <div className="flex items-center mb-4">
    <input
      type="checkbox"
      id="paypal"
      name="paymentMethod"
      value="paypal"
      
      className="mr-2"
    />
    <label htmlFor="paypal" className="text-gray-700 font-medium">
    I agree with sending an Marketing and newsletter emails. No spam, promissed!
    </label>
  </div>

 
</div>
              </div>

              <div className="flex flex-wrap gap-4 ">
              <div className="bg-gray-100 p-2 px-12 rounded-lg mb-6 mt-5 flex">
  <div className="flex items-center mb-4">
    <input
      type="checkbox"
      id="paypal"
      name="paymentMethod"
      value="paypal"
      
      className="mr-2"
    />
    <label htmlFor="paypal" className="text-gray-700 font-medium">
    I agree with sending an Marketing and newsletter emails. No spam, promissed!
    </label>
  </div>

 
</div>
              </div>
            </div>
          </div>
          <Link href={'/DetailCarRent'}><Button className="w-[116px] h-[44px] top-[320px] left-[164px] p-[0px_20px] gap-[8px] rounded-l-[4px] opacity-100 bg-[#3563E9] font-plusJakartaSans text-[16px] font-semibold leading-[20.16px] text-center text-underline-position-[from-font] text-decoration-skip-ink-none text-white mb-4" >Rent Now</Button></Link>
          {/* cnfirm */}
          <div className="w-[548px] h-[100px]  flex flex-col gap-4">
  <Image 
    src="/ic-security-safety.png" 
    width={32} 
    height={32} 
    className="w-8 h-8 p-[2px] opacity-100" 
  />

<div className="w-[548px] h-[52px] flex flex-col gap-2">
  <div className="w-[204px] h-6 font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
    All your data are safe
  </div>
  <div className="w-[548px] h-5 font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF]">
  We are using the most advanced security to provide you the best experience ever
  </div>
</div>


</div>

        </form>

      </Card>
      </div>

      {/* right */}
      <Amount/>
    
    </div>
  );
};

export default Page;
