import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Intro from "./intro/page";
import Tokenomics from "./tokenomics/page";
import Roadmap from "./roadmap/page";
import FAQ from "./faq/page";
import Footer from "./footer/page";
import Event from "./event/page";


export default function Home() {
  return (
    <>
      <div className="font-zcool">
        <div className="w-full min-h-screen bg-saviour bg-center bg-no-repeat bg-cover text-white relative">
          <div className="container px-4 py-4 md:py-4 flex flex-col md:flex-row items-center justify-between lg:p-2">
            <div className="flex items-center logo">
              <div className="bg-logo bg-cover w-[100px] h-[110px] logo-a"></div>
              <p className="text-3xl lg:2xl font-normal ml-2 md:ml-3 lg:ml-4 logo-title">SAVIOUR</p>
            </div>
            <div className="hamburger md:block">
              <Navbar/>
            </div>
            <div className="btn">
            <Button label={"Connect Wallet"} className="md:ml-auto" />
            </div>
          </div>
          <div className="absolute top-1/2 left-2 md:left-auto md:right-2 p-2 box-border">
            <p className="text-center text-2xl md:text-5xl title">Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.</p>
          </div>
        </div>
      </div>
      <Intro />
      <Event />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Footer/>
    </>
  );
}
