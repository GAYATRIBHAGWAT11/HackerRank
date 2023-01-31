function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0;
    let candle = 0;

    for (let i = 0; i < candles.length; i++) {
        if (max < candles[i]) {
            max = candles[i];
            // candle=i;
        }
    }

    for (let i = 0; i < candles.length; i++) {
        if (max == candles[i]) {
            candle++
        }
    }
    return candle;

}
console.log(birthdayCakeCandles([4,4,1,3]));