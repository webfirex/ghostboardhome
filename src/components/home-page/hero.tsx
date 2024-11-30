import FlickerBg from "../effects/flicker";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { Highlight } from "../ui/hero-highlight";
import { IconArrowNarrowRight, IconArrowRight } from "@tabler/icons-react";
import { RainbowButton } from "../ui/rainbow-button";
import { manrope } from "@/utils/font";
import Link from "next/link";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Image } from "@mantine/core";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center w-full relative bg-[url(/com2-bg.png)] bg-no-repeat bg-contain bg-top min-h-[90vh] pt-[100px]">
            <div className="flex flex-col w-full max-w-[1500px] py-7 px-3 justify-center items-center z-10 gap-4">

                <ContainerScroll
                  titleComponent={
                    <>
                        <div className="flex flex-col w-full max-w-[1500px] px-3 justify-center items-center z-10 gap-4">
                            <AnimatedShinyText className=" select-none border border-white/10 rounded-full cursor-pointer inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
                              <span>✨ AI Trading Analysis</span>
                              <IconArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>

                            <span className=" select-none pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-white to-zinc-300/80 bg-clip-text text-center text-5xl font-semibold leading-normal text-transparent">
                                Trade Smarter. Win Bigger. <br /> Stay <Highlight className="text-white py-2 italic font-medium">Ahead of the Market</Highlight> Every Single Day.
                            </span>

                            <p className="text-center text-white/65 text-sm w-full max-w-[650px]">
                            Ghostboard equips U.S. traders with real-time institutional data, advanced options analytics, and customizable tools. Maximize profits, minimize risks, and stay ahead in the fast-moving world of day and options trading. For just $49 / month, Ghostboard pays for itself with your next winning trade.
                            </p>

                            <div className="flex gap-4 justify-center items-center mt-4">
                                <RainbowButton className=" text-white !font-light hover:scale-[1.02] transition-all py-7"> ✨ Try Now For Free</RainbowButton>
                                <Link href={'/account'} className={manrope.className + " flex items-center justify-center gap-2 scale-[0.98] hover:scale-100 transition-all font-light text-white px-8 py-3 text-nowrap hover:underline underline-offset-4 "}>
                                    How It Works
                                    <IconArrowNarrowRight />
                                </Link>
                            </div>
                        </div>
                    </>
                  }
                >
                  <Image
                    src={`/dashboard.png`}
                    alt="hero"
                    // height={720}
                    // width={1400}
                    className=" rounded-xl object-cover h-full w-full object-left-top"
                    draggable={false}
                  />
                </ContainerScroll>
                
            </div>
            {/* <FlickerBg /> */}
        </div>
    )
}