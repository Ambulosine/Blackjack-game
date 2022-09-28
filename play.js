// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let player = {
//   name: "lekan",
//   chips: 140,
// };

// let sumEl = document.getElementById("sum-el");
// let messageEl = document.getElementById("message-el");
// let cardsEl = document.getElementById("cards-el");

// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.name + ": $" + player.chips;
// // let sumEl = document.querySelector(".sum-el");

// function startGame() {
//   let fcard = 6;
//   let scard = 6;
//   sum = fcard + scard;
//   cards = [fcard, scard];
//   renderGame();
//   isAlive = true;
// }
// function renderGame() {
//   cardsEl.textContent = "Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + " ";
//   }
//   sumEl.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "wohoo! You've got Blackjack";
//     hasBlackJack = true;
//   } else {
//     message = "You are out of the game";
//     isAlive = false;
//   }
//   messageEl.textContent = message;
// }
// // function getRandomNumber() {
// //   let randomNumber = Math.floor(Math.random() * 13) + 1;
// //   if (randomNumber > 10) {
// //     return 10;
// //   } else if (randomNumber === 1) {
// //     return 11;
// //   } else if (randomNumber === 1) {
// //     return 11;
// //   } else {
// //     return randomNumber;
// //   }
// // }
// function newCard() {
//   if (hasBlackJack === false && isAlive === true) {
//     let card = 7
//     sum += card;
//     cards.push(card);
//     renderGame();
//   }
// }
// let product = 1
// // function multiply(arr, n){
// //   for(i = 0; i < n; i++){
// //     product *= arr[i]
// //   }
//   return product
// }


const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
// function lookUpContact(name, prop){
//   for(i = 0; i < contacts.length; i++){
//     if(contacts[i].firstName === name){
//       return contacts[i][prop] || "No such property"
//     }
//   }  return "No such contact" 
// }
// console.log(lookUpContact("Harry", "number"))
// function range(start, stop){
//   if(stop < start){
//     return []
//   }
//   const myData = range(start, stop - 1)
//   myData.push(stop)
//   return myData
// }
// console.log(range(3, 6))
// const fruits = ["tomatoe", "apple", "orange"]
// fruits[1] = "rice"
// console.log(fruits)
// let obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };
// Object.freeze(obj);
// obj.review = "bad";
// obj.newProp = "Test";
// console.log(obj);
// const myFunc = () => "scope"
// let cards = myFunc()
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = arr.map(array => `<li class="text-warning">${array}</li>`)
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList)
// class Vegetable{
//   constructor(Vegetables){
//     this.fruits = Vegetables
//   }
// }
// const edible = new Vegetable('bananas')
// console.log(edible.fruits)
// class Books {
//   constructor(author){
//     this.fame = author
//   }
// }
// const authorName = new Books ('scoffield')
// console.log(authorName.fame)
// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);
class Books {
  constructor(author){
    this._author = author
  }
  get writer(){
    return this._author
  }
  set writer(updatedWritter){
    this._author = "updatedWritter"
  }
}
const authorName = new Books ("micheal")
console.log(authorName.writer)
authorName.writter = "scoffield"
console.log(authorName.writter)