
function splitArrayInGroups(arr, n) {
    var result = [];
    for (i = 0; i < arr.length; i += 0) {
        var splited = arr.slice(i, n);
        result.push(splited);
        arr.splice(0, n);
    }
    return result;
}
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
module.exports = splitArrayInGroups;

