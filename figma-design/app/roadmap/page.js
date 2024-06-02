"use client"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const arr = [
  {
    title: "Phase 1",
    deg: "scaleX(-1)",
    top: "50%",
    src: `phase-1.png`,
    description: "Technical Readiness and Smart Contract Audit",
  },
  {
    title: "Phase 2",
    deg: "scaleX(-1)",
    top: "57%",
    src: `phase-2.png`,
    description: "Increase Liquidity and Trading Volume",
  },
  {
    title: "Phase 3",
    deg: "scaleX(-1)",
    top: "57%",
    src: `phase-3.png`,
    description: "Community Building and Marketing",
  },
  {
    title: "Phase 4",
    deg: "scaleX(-1)",
    top: "57%",
    src: `phase-4.png`,
    description: "Ecosystem Expansion and Partnerships",
  },
];

export default function  Roadmap() {
  useEffect(() => {
    Aos.init({ duration: 4500, delay: 600 });
  }, []);

  return (
    <div
      className="w-full h-[80vh] md:h-[100vh] relative bg-roadmap bg-center bg-no-repeat bg-cover"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90"></div>
      <div className="relative flex justify-center mb-8">
        <h1 className="text-[#ED0137] mt-12 font-shojumaru text-4xl md:text-5xl">
          Road Map
        </h1>
      </div>
      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 md:px-12 justify-items-center">
        {arr.map((item, index) => (
          <div
            key={index}
            className={`w-[131px] h-[193px] md:w-[237px] md:h-[349px] border-2 border-red-500 bg-black relative rounded-lg z-10 mx-2 transition-transform transform hover:scale-105 ${index >= 2 ? 'hidden md:block' : ''}`}
            data-aos="fade-up"
          >
            <div
              className="absolute top-0 left-0 w-full h-full opacity-60 bg-center bg-no-repeat bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${item.src})`,
                transform: item.deg,
              }}
            ></div>
            <div className="absolute -bottom-[50px] transform -translate-y-1/2 text-white p-4 flex-col">
              <h2 className="text-lg md:text-2xl font-semibold">{item.title}</h2>
              <p className="text-xs md:text-lg text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}