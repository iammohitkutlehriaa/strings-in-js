// Q1 what will the following print in javascript ?
// console.log("Moh\".length);

console.log("Moh\"".length);

// Q2 Program to convert a string into Lowercase

let name = "mohit_Kutlehria";
console.log(name.toLowerCase());

// Q3 try to change 4th character of a given string. "Taylor";
let name1 = "Taylor";
console.log(name1.replace("o","a"));

//Q4 Extract the amount out of this string. "please give Rs 1000"

let str = "Please give Rs.1000, Rs.2000 , Rs.3000";
let a  = str.match(/\d+/g);
console.log(a);
console.log(a[0]);
