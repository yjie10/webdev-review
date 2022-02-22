// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrForEach = [];
array.forEach((user) => arrForEach.push(`${user.username}!`));

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrMap = array.map((user) => `${user.username}?`);

//Filter the array to only include users who are on team: red
const arrFilter = array.filter(user => user.team === 'red');

//Find out the total score of all users using reduce
const reducer = (acc, curr) => acc + curr.score;
const totalScore = array.reduce(reducer, 0);

// This works as well
// const totalScore2 = array.reduce((acc, curr) => {
//   return acc + curr.score;
// }, 0)

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
})

// (1) 0, 1, 2, 3, 4, 5

// (2)
const newArrPure = arrayNum.map((num, i) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newArr = array.map(user => (user.items = user.items.map(item => `${item}!`), user));