import { add, multiply, subtract, getLucky } from "./utility"

const firstNumber = 2
const secondNumber = 3
const thridNumber = 7
const fourthNumber = 10

let userName
userName = "mrspotts"

let age
age = "40"

// display user welcome message                       
function showUser(user: string, age: string) {
    return `Welcome, ${user} ${age}!`
} 



console.log(add(firstNumber, secondNumber));
console.log(showUser(userName, age)) ;
console.log(multiply(firstNumber, thridNumber), subtract(fourthNumber, secondNumber));
console.log("your lucky number is", getLucky(21));