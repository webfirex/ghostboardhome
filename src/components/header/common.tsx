'use client'
import { manrope } from "@/utils/font";
import { Image } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconGhost2, IconMenu2 } from '@tabler/icons-react'
import { BorderBeam } from "../ui/border-beam";

export default function Header() {
    const [subHead, setSubhead] = useState(true)

    useEffect(() => {
        window.onscroll = function () {
          scrollFunction();
        };
    
        return () => {
          window.onscroll = null; // Clean up the event listener when component unmounts
        };
    }, []); // Run this effect only once on component mount

    function scrollFunction() {
        const headerLogo = document.getElementById("headerLogo");
        if (headerLogo) {
          if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
          ) {
                headerLogo.style.opacity = "0";
          } else if (
            document.body.scrollTop > 40 ||
            document.documentElement.scrollTop > 40
          ) {
                headerLogo.style.opacity = "0.3";
          } else if (
            document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30
          ) {
                headerLogo.style.opacity = "0.5";
          } else if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
          ) {
                headerLogo.style.opacity = "0.7";
          } else {
                headerLogo.style.opacity = "1";
          }
        }
    }

    return (
        <div className="flex w-full justify-center fixed top-0 left-0 flex-col items-center z-50">

            {subHead &&
            <div className="w-full h-[30px] bg-primaryDark/20 flex justify-between items-center backdrop-blur-lg">
                <p></p>
                <Link href={''} className="text-center text-white text-xs transition-all flex gap-1 pr-2 hover:gap-2 hover:pr-1">
                    ✨ Introducing Ghostboard ✨ 20+ Tools and Modules to make your trading journey stress & loss free ! Join Now <span>▸</span>
                </Link>
                <button className="text-white px-2 cursor-pointer" onClick={() => (setSubhead(false))}>x</button>
            </div>}

            <div className="w-full max-w-[1500px] flex justify-between items-center h-[77px] mt-3">
                <div className="flex justify-end h-full items-center max-w-[200px] gap-2">
                    <Link href={'/account'} className={manrope.className + " flex items-center justify-center gap-2 bg-white/5 scale-[0.98] hover:scale-100 transition-all rounded-full font-light text-white px-8 py-3 backdrop-blur-sm text-nowrap relative border border-white/10"}>
                        <Image src={'/icons/discord.png'} h={'30px'} />
                        Join Discord
                    </Link>
                </div>
                <div className="flex justify-start h-full items-center max-w-[200px] w-full">
                    <Link href={'/'} id="headerLogo" className=" transition-opacity">
                        <Image src={'/logo-h.png'} className="w-full" />
                    </Link>
                </div>
                <div className="flex justify-end h-full items-center max-w-[200px] gap-2">
                    <Link href={'/account'} className={manrope.className + " flex items-center justify-center gap-2 bg-white/5 scale-[0.98] hover:scale-100 transition-all rounded-full font-light text-white px-8 py-3 backdrop-blur-sm text-nowrap relative border border-white/10"}>
                        <BorderBeam size={70} />
                        Sign Up
                        <IconGhost2 stroke={'1px'} />
                    </Link>
                    <button className={manrope.className + " bg-white/5 border-[0.2px] border-white/10 scale-95 hover:scale-100 transition-all rounded-full font-bold text-white px-5 py-3 backdrop-blur-sm"}>
                        <IconMenu2 stroke={'1px'} />
                    </button>
                </div>
            </div>

        </div>
    )
}