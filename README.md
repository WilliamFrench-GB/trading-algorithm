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

JavaScript version complete — full pipeline from signal generation through
to backtested win rates across multiple timeframes, cross-verified by hand
at every step.

Known limitations (documented in code):
- 12-candle dataset is for demonstrating mechanics, not statistically meaningful
- checkOutcome assumes WIN is checked before LOSS within a candle — OHLC
  data can't confirm true intra-candle order

Next: rebuilding in Python with real historical data — the standard
tooling (pandas/numpy) for this kind of work, and the direction I'm
aiming toward (quant development).
