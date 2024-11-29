import FlickerBg from "../effects/flicker";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { Highlight } from "../ui/hero-highlight";
import { IconArrowNarrowRight, IconArrowRight } from "@tabler/icons-react";
import { RainbowButton } from "../ui/rainbow-button";
import { manrope } from "@/utils/font";
import Link from "next/link";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Image } from "@mantine/core";
import GradualSpacing from "../ui/gradual-spacing";
import GlowBg from "../effects/glow";

export default function WhyUs() {
    // bg-[url(/ai-bg.png)] bg-no-repeat bg-contain bg-right
    return (
        <div className="flex flex-col items-center w-full relative my-7">
            <div className="flex w-full max-w-[1500px] py-7 px-3 justify-center items-center flex-wrap">
                
                <div className="flex flex-col w-1/2 min-[780px]:w-1/2 px-3 justify-center z-10 gap-4">

                    <div className="flex flex-col w-1/2 items-start gap-4 mb-7">
                        <hr className="w-full opacity-40" />
                        <p className="text-white/65 text-xs max-w-[650px] uppercase">
                            Ghostboard equips
                        </p>
                    </div>


                    <span className=" select-none pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-white to-zinc-300/80 bg-clip-text text-2xl font-normal leading-snug text-transparent">
                        The Edge You Need
                    </span>
                    <p className="text-white/65 text-md w-full max-w-[500px]">
                    In today&apos;s fast-moving markets, success comes down to having the right tools and insights at the right time. That&apos;s where we come in. Powered by advanced AI technology, our platform analyzes market trends, identifies opportunities, and delivers actionable insights—helping you make smarter, faster, and more profitable decisions. Whether you&apos;re day trading or navigating complex options strategies, we&apos;ve got your back with cutting-edge tools designed for peak performance.
                    </p>
                    <div className="flex gap-4 w-full justify-start mt-4">
                        <Link href={'/account'} className={manrope.className + " text-md flex items-center justify-center gap-2 transition-all font-light text-white py-3 text-nowrap underline underline-offset-4 hover:underline-offset-8"}>
                            Check our plans
                            <IconArrowNarrowRight />
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-col w-1/2 max-[500]:w-full px-3 justify-center items-start z-10 gap-7">
                    <div className="flex flex-col items-end w-full gap-1">
                        <div className="flex gap-1 w-full justify-end">
                            <GradualSpacing
                              direction="left"
                              className=" select-none pointer-events-none text-white text-4xl"
                              text="Why Traders"
                            /> &nbsp;
                            <GradualSpacing
                              direction="left"
                              className={manrope.className + " select-none pointer-events-none text-primary text-4xl !italic font-extralight underline underline-offset-4"}
                              text="Trust Us"
                            />
                        </div>
                        <GradualSpacing
                        direction="left"
                          className=" select-none pointer-events-none text-white text-4xl"
                          text="to Stay Ahead of the Market"
                        />
                    </div>
                    <video src="/ghostvid.mp4" autoPlay muted loop className="w-full h-auto aspect-video max-w-[700px] rounded-md"></video>
                </div>
                
            </div>
        </div>
    )
}