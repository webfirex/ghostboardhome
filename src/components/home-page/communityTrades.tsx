import { manrope } from "@/utils/font";
import { Image } from "@mantine/core";
import { IconArrowNarrowRight, IconChecks } from "@tabler/icons-react";
import Link from "next/link";
import BoxReveal from "../ui/box-reveal";
import GradualSpacing from "../ui/gradual-spacing";

import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { RainbowButton } from "../ui/rainbow-button";
import WordRotate from "../ui/word-rotate";

const exchanges = [
    {
        ticker: 'SPY',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'QQQ',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'SPX',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'AAPL',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'ABDE',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'IBM',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'NSY',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'TQQQ',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'AMD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'COIN',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'MSTR',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'AMZN',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    }
]

const ExchangeCard = ({
  ticker,
  rate,
  changeRate,
  state,
}: {
  ticker: string;
  rate: string;
  changeRate: string;
  state: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl p-2 mx-7"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <p className="text-4xl font-medium text-white uppercase">{ticker}</p>
        <div className="flex flex-col">
          <p className={cn("text-lg", ' text-zinc-400 font-light')}>{rate}</p>
          <div className="flex items-center gap-1">
            <p className={cn("text-xs", state === 'CALL' ? ' text-green-500 ' : ' text-red-500 ')}>{changeRate}</p>
            <p className={cn("text-xs", state === 'CALL' ? ' text-green-500 ' : ' text-red-500 ')}>{state === 'CALL' ? '▲' : '▼'}</p>
          </div>
        </div>
      </div>
    </figure>
  );
};

export function TradesMarquee() {
  return (
    <div className="relative flex w-full justify-between items-center flex-col overflow-hidden z-10 py-7 " style={{maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'}}>
      <Marquee pauseOnHover className="[--duration:50s]">
        {exchanges.map((exchange) => (
          <ExchangeCard key={exchange.ticker} {...exchange} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-dark/70"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6"></div>
    </div>
  );
}

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
                    Our users don&apos;t just trade—they win. With our AI-driven tools, traders have seen measurable growth in their portfolios. Join our Discord community to connect, learn, and see the strategies driving their success!
                    </p>
                    </BoxReveal>

                    {/* <TradesMarquee /> */}

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

        </div>
    )
}