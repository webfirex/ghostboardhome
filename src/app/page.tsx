'use client'
import LoadAnimation from "@/components/animations/loadAnimation";
import Features from "@/components/home-page/features";
import HeroSection from "@/components/home-page/hero";
import StocksMarquee from "@/components/home-page/stocksSlide";
import WhyUs from "@/components/home-page/whyUs";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isExiting2, setIsExiting2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setIsLoading(false);
    }, 4000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setIsExiting2(true);
    }, 1000);

    isExiting ? () => {return () => clearTimeout(timer2)} : '';
  }, [isExiting]);

  // if (isLoading) {
  //   return (
  //     <div
  //       className={`fixed top-0 left-0 w-screen flex items-center justify-center h-screen bg-black text-white z-[100]`}
  //     >
  //       <div className="text-center">
  //         {/* <p className="text-xl font-semibold animate-pulse">Loading...</p> */}
  //         <LoadAnimation />
  //       </div>
  //     </div>
  //   );
  // }
  
  return (
    <>

      {/* <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black transition-all duration-1000 scale-y-50 origin-top z-[100] ${
          isExiting2 ? '-translate-y-full scale-y-50 opacity-0' : 'translate-y-0 scale-y-100 opacity-100'
        }`}
      >
        <div className="text-center">
        </div>
      </div> */}

      <div className="flex min-h-screen h-full flex-col items-center w-full overflow-x-hidden">
        <HeroSection />
        <WhyUs />
        <StocksMarquee />
        <Features />
      </div>

    </>
  );
}