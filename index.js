const candles = [ 
{
    open: 100,
    high: 120,
    low: 90,
    close: 115
},
{
    open: 115,
    high: 130,
    low: 110,
    close: 125
},
{
    open: 125,
    high: 140,
    low: 120,
    close: 135
}
]

for (let i =0; i < candles.length; i++) {
    console.log(`Candle close price ${candles[i].close}`);
}

let total = 0;

for (let i=0; i < candles.length; i++) {
    total += candles[i].close;
}
   console.log(total);

const average = total / candles.length;
console.log(`Average close price: ${average}`);
