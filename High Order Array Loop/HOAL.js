// Array of strings
// ["", "", ""]

// Array of Objects
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const iterator of object) {

// }

//*****************  MAPS */
const map = new Map(); //creating objects
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("EG", "Englend");

console.log(map);
// //output: Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States Of America',
//   'EG' => 'Englend'
// }

//kya loop laga sakte hai?
for (const key of map) {
  console.log(key);
} //ye array me ke:vale show karega//
// //OUTPUT
// [ 'IN', 'India' ]
// [ 'USA', 'United States Of America' ]
// [ 'EG', 'Englend' ]

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game: "cricket",
  gane2: "socker"
};

// for (const key in myObject) {
//   console.log(key);
// }

for (const key in myObject) {
  console.log(myObject[key]);
}
