// ====================== BASIC REMINDERS ======================

// const = cannot reassign the variable
// let = can reassign the variable
// arrays declared with const can still have their contents changed (.push etc)

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
// Classic loop: start at 0, go while i is less than length, add 1 each time


// ====================== MOVING AVERAGE LOGIC ======================

// Goal:
// For each bar (starting from bar 10 onwards):
// - Take the previous 10 candles
// - Calculate their average close
// - Compare current close to that average
// - Decide BUY / SELL / HOLD

        for (let i = 10; i < candles.length; i++) {

        // Get the last 10 candles before the current one
        
        const window = candles.slice(i - 10, i);

        
        // Add up the close prices of those 10 candles

        let total = 0;
        for (let j = 0; j < window.length; j++) {
            total += window[j].close;
        }

        // Calculate the average of the window

        const average = total / window.length;
        const currentPrice = candles[i].close;
    

        // Make the decision

        if (currentPrice > average) {
            console.log(`Bar ${i}: BUY (currentPrice: ${currentPrice}, average: ${average})`);
        } else if (currentPrice < average) {
            console.log(`Bar ${i}: SELL (currentPrice: ${currentPrice}, average: ${average})`);
        } else {
            console.log(`Bar ${i}: HOLD (currentPrice: ${currentPrice}, average: ${average})`);
        }        
    };    


            const generateSignals = (candles, period) => {
                for (let i = period; i < candles.length; i++) {
                    const window = candles.slice(i - period, i);
                    const average = calcualteAverageClose(window);
                    const currentPrice = candles[i].close;

                    if (currentPrice > acerage) {
                        console.log(`Bar ${i}: BUY (${curentPrice} > ${average})`);
                    } else if (currentPrice < average) {
                        console.log(`Bar ${i}: SELL (${currentPrice} < ${average})`);
                    }else {
                        console.log(`Bar ${i}: HOLD`);
                    }
                    }
                    };
                
            