import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const footerItems = [
    "Home",
    "IDO",
    "Tokenomics",
    "Road Map",
    "Whitepaper",
    "Pledge",
    "NFT",
    "Games",
  ];

  return (
    <div className="bg-gradient-to-b from-[#030405] to-[#120101] h-[448px] md:h-[428px] w-full box-border pt-16 pb-6 md:pb-10">
      <div className="flex flex-col justify-between items-center h-full">
        <img
          src="logo.png"
          className="w-[163px] h-[163px] object-cover object-[60%_-15%]"
          alt="Saviour"
        />
        <p className="font-poppins text-2xl font-bold bg-gradient-to-r from-[#FF002A] to-[#720005] bg-clip-text text-transparent">
          SITEMAP
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 h-5">
          {footerItems.map((item, index) => (
            <p key={index} className="text-sm font-semibold font-poppins text-white">
              {item}
            </p>
          ))}
        </div>
        <div className="flex text-[#ED0137] w-[111px] h-[27px] justify-between mt-8 md:mt-2.5">
          <FaTwitter />
          <FaTelegramPlane />
          <IoMdMail />
        </div>
      </div>
    </div>
  );
}