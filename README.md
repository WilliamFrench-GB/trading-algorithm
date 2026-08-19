# Trading Algorithm

A JavaScript backtesting project that generates BUY/SELL/HOLD signals
from OHLC candle data using a simple moving average crossover.

## How it works
- `calculateAverageClose(candles)` — average close of any candle array
- `detectTrend(candles)` — bullish or bearish vs the overall average
- `generateSignals(candles, period)` — signals for a configurable lookback window

## Running it
```bash
node index.js
```
## Status
Work in progress — currently uses hardcoded candle data.
Next: live market data, signal counting, P&L backtesting.
