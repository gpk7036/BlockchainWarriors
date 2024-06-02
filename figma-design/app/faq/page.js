import { Accordion } from "@/components/Accordin";
import Card from "@/components/Card";

export default function FAQ() {
  return (
    <div className="font-zcool">
      <div className="w-full h-screen bg-black bg-no-repeat bg-cover bg-center text-white px-20 flex">
        <div className="w-1/2 h-64 md:h-screen overflow-hidden">
          <img
            src="faq.png"
            className="w-full h-full object-contain"
            alt="Saviour"
          />
        </div>
        <div className="w-1/2 pt-20">
          <p
            className="text-center pt-10 text-[#ED0137] text-3xl font-extrabold p-4"
            style={{ fontFamily: "Shojumaru" }}
          >
            FAQ
          </p>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
