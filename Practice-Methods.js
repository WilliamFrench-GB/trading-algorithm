for (let i=0; i > candles.length; i++) {
    console.log(`Price of the candle close ${candle[i].close}`);
}


// creating a moving average to add all close properties found in the value [candles].

for (let i=0; i < candles[i].close; i++) {
    total += candles[i].close;
}