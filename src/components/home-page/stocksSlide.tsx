import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const exchanges = [
    {
        ticker: 'SPY / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'QQQ / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'SPX / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'AAPL / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'ABDE / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'IBM / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'NSY / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'TQQQ / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'AMD / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'COIN / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'PUT'
    },
    {
        ticker: 'MSTR / USD',
        rate: '43500.04',
        changeRate: '+2.53%',
        state: 'CALL'
    },
    {
        ticker: 'AMZN / USD',
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
        "relative cursor-pointer overflow-hidden rounded-xl p-2"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <p className="text-3xl font-medium text-white uppercase">{ticker}</p>
        <div className="flex flex-col">
          <p className={cn("text-xs", state === 'CALL' ? ' text-green-500 ' : ' text-red-500 ')}>{changeRate}</p>
          <p className={cn("text-xs", ' text-zinc-400 font-light')}>{rate}</p>
        </div>
        <p className={cn("text-xs", state === 'CALL' ? ' text-green-500 ' : ' text-red-500 ')}>{state === 'CALL' ? '▲' : '▼'}</p>
      </div>
    </figure>
  );
};

export default function StocksMarquee() {
  return (
    <div className="relative flex w-full bg-dark justify-between items-center flex-col overflow-hidden mb-12">
      <Marquee pauseOnHover className="[--duration:50s]">
        {exchanges.map((exchange) => (
          <ExchangeCard key={exchange.ticker} {...exchange} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-dark/70"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-dark/70"></div>
    </div>
  );
}