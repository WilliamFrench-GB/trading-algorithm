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
    };
};

console.log(calculateAverageClose(candles));

console.log(detectTrend(candles))

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
        } else{
            signals.push({ bar: i, signal: "HOLD", currentPrice, average });
        }
    } 
        return signals;
}; 

const signals10 = generateSignals(candles, 10);
console.log("Period 10:", signals10.length, signals10);

const signals3 = generateSignals(candles, 3);
console.log("Period 3:", signals3.length, signals3);

const signals5 = generateSignals(candles, 5);
console.log("Period 5:", signals5.length, signals5);

// Why the smaller period produces more signals than the larger period: Shorter duration of market availabillity captures immidiate order flow and current 
// volatility rather than just smoothening the results out due to a longer period of market data. The smaller period is more sensitive to price changes and can generate
// more frequent signals.