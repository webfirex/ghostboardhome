import FlickerBg from "../effects/flicker";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { Highlight } from "../ui/hero-highlight";
import { IconArrowNarrowRight, IconArrowRight, IconChecks } from "@tabler/icons-react";
import { RainbowButton } from "../ui/rainbow-button";
import { manrope } from "@/utils/font";
import Link from "next/link";
import GradualSpacing from "../ui/gradual-spacing";
import { CardContainer, CardItem } from "../ui/3d-card";
import NumberTicker from "../ui/number-ticker";
import { WhyUsCards } from "@/data/modules";
import BoxReveal from "../ui/box-reveal";
import WordRotate from "../ui/word-rotate";
import { Image } from "@mantine/core";

export default function WhyUs() {
    return (
        <div className="flex flex-col items-center w-full my-7 md:bg-[url(/com-bg.png)] bg-no-repeat bg-cover bg-top">
            
            <div className="flex w-full max-w-[1500px] pt-7 px-3 justify-center items-center flex-wrap">
                
                <div className="flex flex-col w-1/2 min-[780px]:w-1/2 px-3 justify-center z-10 gap-4">


                    <BoxReveal duration={0.7} className="w-1/2">
                    <div className="flex flex-col w-full items-start gap-4 mb-7">
                        <hr className="w-full opacity-40" />
                        <p className="text-white/65 text-xs max-w-[650px] uppercase">
                            STOP TRADING BLINDLY
                        </p>
                    </div>
                    </BoxReveal>

                    <div className="flex flex-col items-start w-full gap-1">
                        <div className="flex gap-1 w-full justify-start">
                            <GradualSpacing
                              direction="left"
                              className=" select-none pointer-events-none text-white text-4xl"   
                              text="Every Second You Wait, Others Are Profiting"
                            />
                        </div>
                        <GradualSpacing
                        direction="left"
                          className=" select-none pointer-events-none text-primaryLight underline underline-offset-4 text-4xl"
                          text="What Aren't You ?"
                        />
                    </div>

                    <BoxReveal duration={0.7}>
                    <p className="text-white/65 text-md w-full max-w-[500px]">
                    Our users don&apos;t just trade—they win. With our AI-driven tools, traders have seen measurable growth in their portfolios. Join our Discord community to connect, learn, and see the strategies driving their success!
                    </p>
                    </BoxReveal>

                    <div className="flex gap-4 items-center">
                      <IconChecks color="lightGreen" size={'25'} />
                      <WordRotate
                        className="text-2xl font-extralight text-white"
                        words={[
                          "Spot and predict trades with AI precision.",
                          "Understand volatility to maximize trade opportunities.",
                          "Track hidden institutional activity for market insight.",
                          "Monitor liquidity for better entry and exits.",
                          "Detect trade opportunities with instant notifications.",
                          "Align strategies with market-moving events.",
                          "Learn from professionals making consistent profits.",
                          "Trade live with experts for actionable insights."
                        ]}
                      />
                    </div>

                    <div className="flex gap-4 w-full justify-start mt-4">
                        <RainbowButton className=" text-white !font-light hover:scale-[1.02] transition-all py-7">✨ Start your free trial now ✨</RainbowButton>
                        <BoxReveal duration={0.7}>
                        <Link href={'/account'} className={manrope.className + " text-md flex items-center justify-center gap-2 transition-all font-light text-white py-3 text-nowrap underline underline-offset-4 hover:underline-offset-8"}>
                            Join our community
                            <IconArrowNarrowRight className=" origin-bottom" />
                        </Link>
                        </BoxReveal>
                    </div>
                    
                </div>
                
                <div className="flex flex-col w-1/2 max-[500]:w-full px-3 justify-center items-center z-10 gap-7">
                    <Image src={'/mockup1.png'} className=" w-full max-w-[500px]"  />
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