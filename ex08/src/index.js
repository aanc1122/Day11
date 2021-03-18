function myMutation(arr) {
    var firstElement = arr[0].toLowerCase();
    var secondElement = arr[1].toLowerCase();
    for (var i = 0; i < secondElement.length; i += 1) {
        var letter = secondElement[i].toLowerCase();
        if (firstElement.indexOf(letter) === -1) {
            return false;
        }
    }
    return true;
}
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation("voodoo", "no"));
console.log(myMutation(["ate", "date"]));

module.exports = myMutation;