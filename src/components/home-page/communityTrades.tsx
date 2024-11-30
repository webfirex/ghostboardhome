import { manrope } from "@/utils/font";
import { Image } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import BoxReveal from "../ui/box-reveal";
import GradualSpacing from "../ui/gradual-spacing";

export default function CommunityTrades() {
    return (
        <div className="flex flex-col items-center w-full my-7 md:bg-[url(/com-bg.png)] bg-no-repeat bg-cover bg-bottom">
            
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
                    Our users don&apos;t just trade—they win. From capturing high-probability trades to managing risks effectively, traders using our AI-driven platform have seen consistent, measurable growth in their portfolios. Want to see how they&apos;re doing it? Join our thriving Discord community, connect with like-minded traders, and discover the strategies that are helping them succeed every day.
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
                
                <div className="flex flex-col w-1/2 max-[500]:w-full px-3 justify-center items-center z-10 gap-7">
                    <Image src={'/mockup1.png'} className=" w-full max-w-[500px]"  />
                </div>
                
            </div>

        </div>
    )
}