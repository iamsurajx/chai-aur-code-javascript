const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce((PreviousValue, currentValue) => {
//   console.log(
//     `PreviousValue: ${PreviousValue} and currentValue ${currentValue}`
//   );
//   return PreviousValue + currentValue;
// }, 0);

// console.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

// esko ham sopping total price me kar sakte hai..

const shoppingCart = [
  {
    itemName: "Java for Beginners",
    price: 449,
  },
  {
    itemName: "React JS for Frontend Development",
    price: 2999,
  },
  {
    itemName: "Android Development",
    price: 4999,
  },
  {
    itemName: "Data Science",
    price: 12999,
  },
  {
    itemName: "MERN Stack for Full Stack Development",
    price: 2999,
  },
];

//
const Total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(Total);
