function calcAndShowBestThreeSprints(arr) {
    if (arr.length < 3) return "error";

    let bestSum = 0;
    let bestNums = [];

    while (arr.length >= 3) {

        let currentSum = arr[0] + arr[1] + arr[2];

        if (currentSum >= bestSum) {
            bestSum = currentSum;
            bestNums = [arr[0], arr[1], arr[2]];
        }
        arr.shift();
    }
    return { sequence: bestNums, sum: bestSum };
};

console.log(calcAndShowBestThreeSprints([20, 400, 1, 200, 34, 295, 70, 0]));
// OR
let result = calcAndShowBestThreeSprints([200, 400, 1, 200, 34, 295, 70, 0]); 
console.log(`{ sequence: [${result.sequence}], sum: ${result.sum} }`);
