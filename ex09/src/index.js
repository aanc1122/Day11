function myBouncer(arr) {
    var falsyEjector = [];
    for (var i = 0; i < arr.length; i += 1) {
        var myValue = arr[i];
        if (myValue) {
            falsyEjector.push(myValue);
        }
    }
    return falsyEjector;
}
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;