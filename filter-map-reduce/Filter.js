const books = [
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publishDate: new Date(1954, 6, 29), // July 29th, 1954
    edition: 1,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishDate: new Date(1813, 1, 28), // January 28th, 1813
    edition: 1,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Historical Fiction",
    publishDate: new Date(1960, 7, 11), // July 11th, 1960
    edition: 1,
  },
  {
    title: "One Hundred Years of Solitude",
    genre: "Magical Realism",
    publishDate: new Date(1967, 5, 5), // June 5th, 1967
    edition: 1,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: "Science Fiction",
    publishDate: new Date(1979, 9, 21), // October 21st, 1979
    edition: 1,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-Age",
    publishDate: new Date(1951, 6, 16), // July 16th, 1951
    edition: 2,
  },
  {
    title: "Frankenstein",
    genre: "Gothic Fiction",
    publishDate: new Date(1818, 0, 1), // January 1st, 1818
    edition: 3,
  },
  {
    title: "The Diary of a Young Girl",
    genre: "Non-Fiction",
    publishDate: new Date(1947, 6, 27), // July 27th, 1947
    edition: 5,
  },
  {
    title: "Things Fall Apart",
    genre: "Historical Fiction",
    publishDate: new Date(1958, 0, 1), // January 1st, 1958
    edition: 4,
  },
];

// filtering the data from array of objects
let userBooks = books.filter((bk) => bk.genre === "Romance");

console.log(userBooks);
{
  /* output
[
  {
    title: 'Pride and Prejudice',
    genre: 'Romance',
    publishDate: 1813-02-27T18:06:32.000Z,
    edition: 1
  }
]
*/
}


// Explicit return
userBooks = books.filter((bk) => {
  return bk.publishDate >= 2000;
});

console.log(userBooks);
