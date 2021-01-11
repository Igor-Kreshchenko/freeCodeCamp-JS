// 91
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

// 92
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1]; // Change this line

// 93
var collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }

  return object;
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 2468, "tracks", "Free"));
console.log(updateRecords(collection, 2548, "tracks", ""));

// 94
var myArray = [];

let i = 5;

while (i >= 0) {
  myArray.push(i);
  i -= 1;
}

console.log(myArray);

// 95
var myArray = [];

for (let i = 1; i <= 5; i += 1) {
  myArray.push(i);
}

console.log(myArray);

// 96
var myArray = [];

for (let i = 1; i <= 9; i += 2) {
  myArray.push(i);
}

console.log(myArray);

// 97
var myArray = [];

for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

console.log(myArray);

// 98
var myArr = [2, 3, 4, 5, 6];

var total = 0;

for (let i = 0; i < myArr.length; i += 1) {
  total += myArr[i];
}

console.log(total);

// 99
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);

// 100
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 10);
