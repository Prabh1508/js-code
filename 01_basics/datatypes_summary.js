// premitive data types

// 7 types => string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

 const bigNumber = 345886979776747665612696n;

// Reference Type (non premitive)

// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
   name: "prabhjot",
   age: 23
}

const myFunction = function(){
   console.log("Hello World");

}

// console.log(typeof bigNumber)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), heap (non primitive)

let myYoutubename = "PrabhjotSings"

let anotherName = myYoutubename;
anotherName = "PrabhjotCodes"

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
   email: "user@google.com",
   upi: "user@ybl"
}
 let userTwo = userOne 
 userTwo.email= "prabhjot@google.com"

 console.log(userOne.email)
 console.log(userTwo.email)