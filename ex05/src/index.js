var myNestedArray = [["Toblerone", 5]];
function myNestedFunction(arr) {
    myNestedArray = [...arr];
    myNestedArray.push(["Milka", 3]);
    return myNestedArray;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;