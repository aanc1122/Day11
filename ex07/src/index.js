function largestNumFromArr(arr) {
    var maxNumArray = [];
    for (var i = 0; i < arr.length; i += 1) {
        var oneArray = arr[i];
        var largestNumber = 0;
        for ( var j = 0; j < oneArray.length; j += 1) {
            if (largestNumber < oneArray[j]) {
                largestNumber = oneArray[j];
            }
        }
        maxNumArray.push(largestNumber);
    }
    return maxNumArray;
}
console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
module.exports = largestNumFromArr;