// 41
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[2][1];

// 42
var myArray = [
  ["John", 23],
  ["cat", 2],
];

myArray.push(["dog", 3]);

// 43
var myArray = [
  ["John", 23],
  ["cat", 2],
];

var removedFromMyArray = myArray.pop();

// 44
var myArray = [
  ["John", 23],
  ["dog", 3],
];

var removedFromMyArray = myArray.shift();

// 45
var myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
myArray.unshift(["Paul", 35]);

// 46
var myList = [
  ["car", 2],
  ["house", 3],
  ["yacht", 5],
  ["flat", 1],
  ["bike", 4],
];

// 47
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

// 48
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(5, 10);
functionWithArgs(3, 7);
functionWithArgs(100, 200);

// 49
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 50
function myLocalScope() {
  var myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

console.log("outside myLocalScope", myVar);
