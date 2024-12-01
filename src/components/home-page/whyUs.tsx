import FlickerBg from "../effects/flicker";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { Highlight } from "../ui/hero-highlight";
import { IconArrowNarrowRight, IconArrowRight } from "@tabler/icons-react";
import { RainbowButton } from "../ui/rainbow-button";
import { manrope } from "@/utils/font";
import Link from "next/link";
import GradualSpacing from "../ui/gradual-spacing";
import { CardContainer, CardItem } from "../ui/3d-card";
import NumberTicker from "../ui/number-ticker";
import { WhyUsCards } from "@/data/modules";
import BoxReveal from "../ui/box-reveal";

export default function WhyUs() {
    return (
        <div className="flex flex-col items-center w-full my-7">
            
            <div className="flex w-full max-w-[1500px] pt-7 px-3 justify-center items-center flex-wrap">
                
                <div className="flex flex-col w-1/2 min-[780px]:w-1/2 px-3 justify-center z-10 gap-4">


                    <BoxReveal duration={0.7} className="w-1/2">
                    <div className="flex flex-col w-full items-start gap-4 mb-7">
                        <hr className="w-full opacity-40" />
                        <p className="text-white/65 text-xs max-w-[650px] uppercase">
                            Ghostboard equips
                        </p>
                    </div>
                    </BoxReveal>


                    <BoxReveal duration={0.7}>
                    <span className=" select-none pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-white to-zinc-300/80 bg-clip-text text-2xl font-normal leading-snug text-transparent">
                        The Edge You Need
                    </span>
                    </BoxReveal>

                    <BoxReveal duration={0.7}>
                    <p className="text-white/65 text-md w-full max-w-[500px]">
                    In today&apos;s fast-moving markets, success comes down to having the right tools and insights at the right time. That&apos;s where we come in. Powered by advanced AI technology, our platform analyzes market trends, identifies opportunities, and delivers actionable insights—helping you make smarter, faster, and more profitable decisions. Whether you&apos;re day trading or navigating complex options strategies, we&apos;ve got your back with cutting-edge tools designed for peak performance.
                    </p>
                    </BoxReveal>

                    <div className="flex gap-4 w-full justify-start mt-4">
                        <BoxReveal duration={0.7}>
                        <Link href={'/account'} className={manrope.className + " text-md flex items-center justify-center gap-2 transition-all font-light text-primaryLight py-3 text-nowrap underline underline-offset-4 hover:underline-offset-8"}>
                            Check our plans
                            <IconArrowNarrowRight className=" origin-bottom" />
                        </Link>
                        </BoxReveal>
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
                              className={manrope.className + " select-none pointer-events-none text-primaryLight text-4xl font-semibold underline underline-offset-4 bg-gradient-to-br  from-[#9C4BE9] to-[#2A73F9] bg-clip-text text-transparent"}
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

            <div className="flex w-full max-w-[1500px] px-3 justify-center items-center flex-wrap">
                
                {WhyUsCards.map((item, index) => (
                    <div className="flex flex-col w-1/4 px-2 justify-center gap-4" key={index}>
                        <CardContainer className="inter-var border border-primary/35 p-10 w-full rounded-3xl cursor-default">
                            <CardItem
                              translateZ="60"
                              className="text-sm max-w-sm my-5 w-full"
                            >
                                <p className={manrope.className + " text-5xl !font-thin tracking-tighter text-primaryLight w-full mb-4"}>
                                  <NumberTicker value={item.number} className={" text-primaryLight font-medium text-6xl"} />{item.symbol}
                                </p>
                                <p className="text-sm text-zinc-400 w-full">{item.text}</p>
                            </CardItem>
                        </CardContainer>
                    </div>
                ))}
                
            </div>
        </div>
    )
}