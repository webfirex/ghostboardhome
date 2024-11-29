import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

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

export default function StocksMarquee() {
  return (
    <div className="relative flex w-full justify-between items-center flex-col overflow-hidden mb-12">
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