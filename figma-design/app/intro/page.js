import React from 'react';
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import { Shojumaru } from 'next/font/google';

export default function Intro() {
  return (
    <div className="font-zcool">
      <div className="w-full h-screen bg-black bg-center bg-no-repeat bg-cover text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-center ml-4 md:ml-[122px] w-full md:w-1/2 gap-4 md:gap-6">
            <p className="text-2xl md:text-4xl text-[#ED0137] font-extrabold" style={{ fontFamily: "Shojumaru" }}>
              INTRODUCTION
            </p>
            <p className="text-lg md:text-2xl">
              We've all been in the mud once, and now we've decided to fight it out.
              <br />
              Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future!
              <br />
              Our mission is to empower everyone to share wealth and succeed.
              <br />
              <span className="text-gray-500">read more...</span>
            </p>
            <div className="flex gap-2">
              <Button label="Document" withIcon />
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-screen overflow-hidden">
            <img src="saviour-2.png" className="w-full h-full object-contain" alt="Saviour" />
          </div>
        </div>
      </div>
    </div>
  );
}
