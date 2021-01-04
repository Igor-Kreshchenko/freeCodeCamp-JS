// 51
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

myOutfit();

// 52
function timesFive(a) {
  return a * 5;
}

// 53
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();

// 54
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

var processed = processArg(7);

// 55
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift(arr[0]);
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// 56
function welcomeToBooleans() {
  return true;
}

// 57
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }

  return "No, that was false";
}

// 58
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// 59
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// 60
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
