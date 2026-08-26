const candles = [
    {
        open: 125,
        high: 175,
        low: 110,
        close: 150,
    },
    {
        open: 135,
        high: 185,
        low: 120,
        close: 160,
    },
    {
        open: 115,
        high: 165,
        low: 110,
        close: 140,
    },
    {
        open: 145,
        high: 195,
        low: 130,
        close: 170,
    },
    {
        open: 155,
        high: 205,
        low: 140,
        close: 180,
    },
    {
        open: 144,
        high: 178,
        low: 143,
        close: 155,
    },
    {
        open: 190,
        high: 190,
        low: 180,
        close: 185,
    },
    {
        open: 210,
        high: 260,
        low: 190,
        close: 200,
    },
    {
        open: 130,
        high: 170,
        low: 130,
        close: 170,
    },
    {
        open: 150,
        high: 160,
        low: 130,
        close: 133,
    },
    {
        open: 165,
        high: 177,
        low: 153,
        close: 161,
    },
    {
        open: 144,
        high: 199,
        low: 133,
        close: 186,
    }
];

// Calculate average closing price
const calculateAverageClose = (candles) => {
    let total = 0;

    for (let i = 0; i < candles.length; i++) {
        total += candles[i].close;
    }

    return total / candles.length;
};

// Detect if price is bullish or bearish
const detectTrend = (candles) => {
    const average = calculateAverageClose(candles);
    const latestCandle = candles[candles.length - 1];

    if (latestCandle.close > average) {
        return "Bullish";
    } else {
        return "Bearish";
    }
};

// generate signals based on moving average
const generateSignals = (candles, period) => {
    const signals = [];
    for (let i = period; i < candles.length; i++) {
        const window = candles.slice(i - period, i);
        const average = calculateAverageClose(window);
        const currentPrice = candles[i].close;

        if (currentPrice > average) {
            signals.push({ bar: i, signal: "BUY", currentPrice, average });
        } else if (currentPrice < average) {
            signals.push({ bar: i, signal: "SELL", currentPrice, average });
        } else {
            signals.push({ bar: i, signal: "HOLD", currentPrice, average });
        }
    }
    return signals;
};

const signals10 = generateSignals(candles, 10);
const signals3 = generateSignals(candles, 3);
const signals5 = generateSignals(candles, 5);

// Signal count = candles.length - period. A bigger window needs more history
// before the first average can be calculated, so more early bars get skipped.
// Separately: shorter periods are more sensitive to price, so the signals they
// do produce flip direction more often.

const countSignals = (signals) => {
    const buyCount = signals.filter(s => s.signal === "BUY").length;
    const sellCount = signals.filter(s => s.signal === "SELL").length;
    const holdCount = signals.filter(s => s.signal === "HOLD").length;

    return { BUY: buyCount, SELL: sellCount, HOLD: holdCount };
};

// Display signal counts for each period.

console.log("Overall trend:", detectTrend(candles));

console.log("period 10 signal counts:", countSignals(signals10));
console.log("period 5 signal counts:", countSignals(signals5));
console.log("period 3 signal counts:", countSignals(signals3));

// Returns the percentage of directional signals that were BUY (HOLD excluded).
// Does not measure profitability — that needs entry vs later exit prices.

const calculateBuyRatio = (signals) => {
    const counts = countSignals(signals);
    const totalSignals = counts.BUY + counts.SELL;

    if (totalSignals === 0) {
        return 0;
    }
    return (counts.BUY / totalSignals) * 100;
};

console.log("period 10 Buy Ratio:", calculateBuyRatio(signals10));
console.log("period 5 Buy Ratio:", calculateBuyRatio(signals5));
console.log("period 3 Buy Ratio:", calculateBuyRatio(signals3));

const ranges = candles.map((candle) => candle.high - candle.low);
console.log(ranges);

const sellPrices = signals5.filter(s => s.signal === "SELL").map(s => s.currentPrice)
console.log(sellPrices);

const buyPrices = signals5.filter(s => s.signal === "BUY").map(s => s.currentPrice)
console.log(buyPrices);

const enriched = candles.map(c => ({ close: c.close, bullish: c.close > c.open}));
console.log(enriched);



