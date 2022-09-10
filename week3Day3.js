// Section 1
// Part II: JavaScript Reps

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// Get Even

for (let i = 0; i <= 200; i += 2) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//  Fizz Buzz

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log("buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
}

console.log("=========================");

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
wolfy[3] = "Gotham";
dart.push("Hawkins");
wolfy[0] = "Gameboy";
console.log(plantee);
console.log(wolfy);
console.log(dart);
//=============================
//  Yell at the Ninja Turtles

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (element of turtles) {
  console.log(element.toUpperCase());
}
//===================================================
//Methods

//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
//let lastHalf = [];
//let length = favMovies.length;
// lastHalf = favMovies.slice (Math.floor(length / 2),length +1);

//store the value of your slice in a variable, console.log it -
//console.log (lastHalf);

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

favMovies[8];
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift();
favMovies.splice(3, 1, "Avatar");
console.log(favMovies);
console.log(favMovies.slice(9));
//console.log(favMovies(22))

// Where is Waldo=====================

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

console.log(whereIsWaldo.splice(1, 1));

whereIsWaldo[1][2] = "NO one";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);
//console.log(whereIsWaldo);

// Excited Kitten

const kitten = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
let sound = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    sound = Math.floor(Math.random() * 3);
    console.log(kitten[sound]);
  } else console.log("Love me, pet me! HSSSSSS!");
}

//===================================================

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

let Mediancal = function (arr) {
  console.log(arr.sort());
  let median = 0;
  let length = arr.length;
  if (length % 2 === 1) median = arr[Math.floor(length / 2)];
  else median = (arr[length / 2] + arr[length / 2 - 1]) / 2;
  return median;
};

console.log(Mediancal(nums));

// Return of the Closets

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

const kristynsShoe = kristynsCloset.splice(0, 1);
console.log(kristynsCloset);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);
console.log(
  `"Kristyn is wearing " ${kristynsCloset[0]} , ${kristynsCloset[3]} ,and ${kristynsCloset[5]}`
);
console.log(
  `"Tom is wearing a ${thomsCloset[0][0]} , ${thomsCloset[1][1]} and ${thomsCloset[2][2]}"`
);

// Dirty Laundry
for (const arr of kristynsCloset) {
  console.log(`WHIRR: Now washing ${arr}`);
}

for (const item of kristynsCloset) {
  console.log(`WHIRR: Now washing ${item}`);
}

//  Thom's inventory
console.log(thomsCloset);
