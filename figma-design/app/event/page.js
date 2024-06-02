import React from 'react';
import Button from "@/components/Button";
import Timer from "@/components/Timer";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Event() {
  return (
    <div className="font-zcool">
      <div className="w-full h-full bg-event bg-no-repeat bg-cover bg-bottom text-white">
        <p className="text-center text-[#ED0137] text-xl md:text-3xl font-extrabold p-4 font-shojumaru">
          Participate in our IDO Event!
        </p>
        <div className="p-6 flex flex-col md:flex-row justify-around gap-6">
          <div className="w-full md:w-[42%] p-4 text-center text-sm md:text-lg gap-[20px]">
            <div>
              <p>
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success.
              </p>
            </div>
            <div className="p-4 md:p-8">
              <div className="relative border border-red-600 h-80 rounded-lg">
                <div className="absolute -top-7 left-[30%] md:left-[35%] lg:left-[40%]">
                  <button className="h-10 md:h-14 px-4 md:px-6 py-2 md:py-4 rounded-lg bg-[#ED0137] text-xs md:text-sm font-shojumaru">
                    TOKEN INFO
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-around p-4 w-full">
                    <div className="p-2">
                      <p className="mb-2">Total Token Supply</p>
                      <p className="mb-2">Soft Cap</p>
                      <p className="mb-2">Initial exchange rate</p>
                    </div>
                    <div className="text-[#DF180A] p-2">
                      <p className="mb-2">20%</p>
                      <p className="mb-2">200 BNB</p>
                      <p className="mb-2">1 BNB</p>
                    </div>
                  </div>
                  <div>
                    <p>Recommended Referral Commission</p>
                  </div>
                  <div className="flex justify-around p-4 w-full">
                    <div className="p-2">
                      <p className="mb-2">1st Generation</p>
                      <p className="mb-2">2nd Generation</p>
                    </div>
                    <div className="text-[#DF180A] gap-4">
                      <p className="mb-2">5%</p>
                      <p className="mb-2">2%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-8">
                <Button label="Connect Wallet" />
              </div>
              <div className="mt-4 font-shojumaru">
                <p className="text-[#ED0137] text-base md:text-lg">
                  Become an affiliate & Earn 7% as Commission!
                </p>
              </div>
              <div className="relative w-full mx-auto mt-4 md:mt-10 flex">
                <input
                  type="search"
                  className="bg-black border border-red-600 rounded-lg w-full pr-20 pl-4 py-2 text-xs md:text-sm"
                  placeholder="Generate a unique referral link"
                />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#ED0137] text-white rounded-lg px-4 py-2 text-xs md:text-sm">
                  Generate
                </button>
                <span>
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="absolute top-1/2 transform -translate-y-1/2 copy-icon"
                    style={{
                      color: "#ED0137",
                      height: "20px",
                      marginLeft: "8px",
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[55%]">
            <div className="relative border border-red-600 h-auto md:h-[530px] mt-8 md:mt-0 text-lg md:text-2xl gap-2 rounded-lg font-mono">
              <div className="timer flex absolute -top-7 left-[40%] md:left-[45%] gap-2">
                <Timer />
              </div>
              <div className="flex justify-center mt-9">
                <p className="text-center text-[#ED0137] text-xl md:text-3xl font-extrabold p-4 font-shojumaru presale">
                  PRESALE 1
                </p>
              </div>
              <div className="text-sm md:text-lg text-center font-shojumaru presale-details">
                <p className="mb-4">1 Saviour = 0.657 USDT</p>
                <p className="mb-4">Next Stage Price = 0.723 USDT</p>
                <p className="mb-4">Sold - $34,56,56,764/$50,00,00,000</p>
                <p className="mb-4">Raised - $34,56,56,764/$40,00,00,000</p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mx-auto mt-4 md:mt-10 flex">
                  <input
                    type="search"
                    className="bg-black border border-red-600 rounded-lg w-full md:w-72 pr-20 pl-4 py-2 text-xs md:text-sm"
                    placeholder="Generate a unique referral link"
                  />
                </div>
                <div className="mx-auto mt-3 flex">
                  <input
                    type="search"
                    className="bg-black border border-red-600 rounded-lg w-full md:w-96 pr-20 pl-4 py-2 text-xs md:text-sm"
                    placeholder="Generate a unique referral link"
                  />
                </div>
                <div className="mx-auto mt-3 flex">
                  <input
                    type="search"
                    className="bg-black border border-red-600 rounded-lg w-full md:w-96 pr-20 pl-4 py-2 text-xs md:text-sm"
                    placeholder="Generate a unique referral link"
                  />
                </div>
              </div>
              <div className="flex justify-center text-xs md:text-sm mt-4">
                <div className="gap-4">
                  <Button label="Buy" />
                  <Button label="Claim Drop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
