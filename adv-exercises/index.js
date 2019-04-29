///////////////////////////////////////////////
// SCOPE
///////////////////////////////////////////////

// Variable access
// what variables do have access to, 
// when a code is running 

// default root/parent scope/window object

// function bb() {
//     var a = "hello";
// }

// // functions have access to any variable in the root scope

// // Root scope (window)
// var fun = 5;

// // naming conflict
// // first 2 functions, because you reused var fun declaration
// function funFunction() {
//     var fun = "helloooo";
//     console.log(1, fun);
// }
// function funerFunction() {
//     var fun = "byeeee";
//     console.log(2, fun);
// }
// /////////////////////////


// function funestFunction() {
//     fun = "AHHHHHH";
//     console.log(3, fun);
// }

// console.log("window",fun);
// funFunction();
// funerFunction();
// funestFunction();

// // Root scope (window)
// var fun = 5;

// function funestFunction() {
//     // child scope
//     console.log(fun);
// }




///////////////////////////////////////////////
// EXERCISE 1 - SCOPE
///////////////////////////////////////////////


// What is the value of a, 
// when the function gets called with the alert()

// #1
// function q1() {
//     var a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// q1();
// a = 3

// // #2
// var a = 0;
// function q2() {
//     a = 5;
// }
// function q22() {
//     alert(a);
// }

// q2()
// q22();
// if q2 runs first
// // a = 5
// if q22 runs first
// a = 0


// // #3
// function q3() {
//     window.a = "hello";
// }
// function q33() {
//     alert(a);
// }
// q3();
// q33();
// whaaaa?? you can you declare a variable this way!!

// // #4 
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// q4();
// a = "test"
// naming conflict 
// bad practice!!!


// // #5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// a = 5
// a = 5
// naming conflict 
// bad practice!!!
// if is not a function!! they do not create a new scope!!
// theyre all in the root scope!!



///////////////////////////////////////////////
// Ternary Operators
///////////////////////////////////////////////

// syntax:
// condition ? expr1 : expr2;

// very good option instead of if/else
// when you check for a condition 
// and there is only 2 possible expressions that come out of it!!!


// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "U may enter" : "Sorry na";

// var automatedAnswer = 
// "Your account # is " + ( isUserValid(false) ? "123" : "not available");



///////////////////////////////////////////////
// Switch Statement
///////////////////////////////////////////////

// is good when you have a lot of conditions

// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             whatHappens = "wahhhh monster"
//             break;
//         case "back":
//             whatHappens = "you arrived home"
//             break;
//         case "right":
//             whatHappens = "watch out river!"
//             break;
//         case "left":
//             whatHappens = "blerghhhh TROLL"
//             break;
//         default:
//             whatHappens = "please enter a valid direction"
//     }
//     return whatHappens;
// }


///////////////////////////////////////////////
// EXERCISE 2 - Ternary & Switch
///////////////////////////////////////////////

//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// create a boolean function
// function winBattle(bool) {
//     return bool;
// }
// var experiencePoints = winBattle(true) ? 10 : 1;

// console.log(experiencePoints);




// //Using this function, answer the questions below:
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

//#2 return value when moveCommand("forward");
// you encounter a monster

// //#3 return value when moveCommand("back");
// you arrived home

// //#4 return value when moveCommand("right");
// you found a river

// //#5 return value when moveCommand("left");
// you run into a troll

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// let a = prompt("What does 2 + 2 equal?");

// switch (a) {
//     case "3":
//         console.log("Too small");
//         break;
//     case "4":
//         console.log("Exactly!");
//         break;
//     case "5":
//         console.log("Too big");
//         break;
//     default:
//         console.log("I don't know such values")
// // }


// let a = +prompt("a?", "");

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert("2,3");
//         break;
//     default:
//         alert("whattt?");
    
// }  

///////////////////////////////////////////////
// let & const
///////////////////////////////////////////////

// 2 new ways to declare variables

///////////
// let 

// when wrapped in {} creates a new scope

// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false; 

// if (experience > 90) {
//   let wizardLevel = true;
//   console.log(wizardLevel);
// }
// console.log(wizardLevel)



////////
// const = constant

// cant reassign the variable
// useful to minimise bugs
// read only

// const is good for functions

// when using const for obj
// you can change properties
// but you can't reassign the variable


////////////////
// Destructuring

// const obj = {
//   player: 'Bobby',
//   experience: 100,
//   wizardLevel: false
// }

// // Old syntax:
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;
    

// // New syntax:       
// const { player, experience } = obj;
// let { wizardLevel } = obj; 
// // much cleaner!!!


///////////////
// Object properties

// const name = 'john snow';

// // dynamic property values
// const obj = {
//   [name]: 'hello',
//   ['ray' + 'smith']: 'hihi',
//   [1 + 2]: 'boo'
// }
// // useful if you need to calculate something for the property value

// const a = 'Simon';
// const b = true;
// const c = {};

// // old syntax
// const obj = {
//   a: a,
//   b: b,
//   c: c
// }

// // new syntax
// // if property value is the same
// // can remove the declaration, of property & value
// const obj = {a, b, c}
// // will be useful when using react


//////////////
// Template strings

// const name = 'Sally';
// const age = 34;
// const pet = 'horse';

// const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

// console.log(greetingBest);


///////////////
// Default arguments/parameters
// function greet(name='', age=30, pet='dog') {
//   return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

// }

////////////
// Symbol

// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');

// sym2 === sym3
// false

// symbols are used because the create a unique type
// so there is never conflict
// it is used as an identifer for object properties



/////////
// Arrow functions

// // old function syntax
// function add(a, b) {
//   return a + b;
// }

// // new shorthand form
// const add2 = (a, b) => a + b;
// // so you don't need to write function




///////////////////////////////////////////////
// EXERCISE 3
///////////////////////////////////////////////


// change everything below to the newer Javascript!

// let + const
// let a = 'test';
// const b = true;
// const c = 789;
// a = 'test2';


// // Destructuring
// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };


// ans..
// const { firstName, lastName, age, eyeColor} = person;


// // Object properties
// const a = 'test';
// const b = true;
// const c = 789;

// ans..
// const okObj = {a, b, c};



// // Template strings
// const message = `Hello ${firstName} have I met you before? I think we me in ${city} last summer no???`;



// // default arguments
// // default age to 10;
// function isValidAge(age) {
//     return age
// }

// ans..
// const isValidAge = (age = 10) => age;



// // Symbol
// // Create a symbol: "This is my first Symbol"

// ans..
// let sym1 = Symbol('This is my first Symbol');


// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }


// const whereAmI = (username, location) => {
//   if (username && location) {
//     return `I'm not lost`;
//   } else {
//     return `I am totally lost!`;
//   }
// }




///////////////////////
// Advanced Functions

// const first = () => {
//   const greet = 'Hi';
//   const second = () => {
//     const name = 'bobby';
//     alert(greet);
//   }
//   return second;
// }

// const newFunc = first();
// newFunc();

// Remember the Scope
// An important property of Function is that the variables created inside of them, 
// including their parameters are local to the function

///////////////////////////////////////////////
// Closures 

// A function ran.
// the function executed,
// it's never going to execute again
// BUTT it's going to remember that there are references to those variables 
// so the child scope always has access to the parent scope


///////////////////////////////////////////////
// Currying

// the process of converting a function that takes multiple arguments,
// into a function that takes them one at a time

// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3)(4);
// // 12

// // so you can create another function from it like.. 
// const multiplyBy5 = curriedMultiply(5);
// multiplyBy5(5);
// // 25
// multiplyBy5(10);
// // 50
// multiplyBy5(11);
// // 55


///////////////////////////////////////////////
// Compose

//  the act of putting TWO functions together to form a THIRD fucntion,
//  where the output of one function is the input of the other

// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// compose(sum, sum)(5);
// // 7

// // e.g.. how it runs..
// f(g(a));
// f(sum(5));
// sum(6);
// (7);


///////////////////////////////////////////////
// 3 keywords in advanced JS
// Closures 
// Currying
// Compose
///////////////////////////////////////////////

// Avoiding Side Effects,  with functional purity.
// always want to return, 
// we create something called..
// Deterministic
// no matter what, if my inputs go through this function the return value will be always the same





///////////////////////////////////////////////
// EXERCISE 4
///////////////////////////////////////////////

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

// const addUp = (a, m) => a + m;

//Closure: What does the last line return?
// const addTo = (x) => (y) => x + y;
// var addToTen = addTo(10);
// addToTen(3);

// 13


// //Currying: What does the last line return?
// const sum = (a, b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// curriedSum(30)(1);

// 31


// //Currying: What does the last line return?
// const sum = (a, b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// const add5 = curriedSum(5);
// add5(12);

// 17

// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

// 16


//What are the two elements of a pure function?
// No side effects - it does not depnd on any state, or data, change during a proogram's execution. It must only depend on it's input elements.
// Deterministic - always prodcues the same resykts given the dame inputs



///////////////////////////////////////////////
// Advanced Arrays

// const array = [1, 2, 10, 16];

// // to multiply all numbers using forEach
// // you must create a new array and push them in
// const double = [];
// const newArray = array.forEach((num) => {
//   double.push(num * 2);
// });

// console.log('orginal array', array);
// console.log('forEach', double);


///////////////////////////////////////////////
// Most Important Array methods...
// Map, Filter, Reduce
///////////////////////////////////////////////


///////////////////////////////////////////////
// Map

// const array2 = [1, 2, 10, 16];
// const mapArray = array2.map((num) => {
//   return num * 2;
// });
// // with map you always need to return something
// // forEach vs map
// // forEach just loops over something
// // map, loops over and returns a new array
// console.log('map', mapArray);


// if we want to return a new array use MAP over forEach
// map transforms the array
// REMEMBER WE MUST RETURN SOMETHING!!!!

// ///////
// when you have a single parameter in a function, you dont need to use the brackets!!!
// /////// e.g.
// const mapArray = array2.map(num => num * 2);


///////////////////////////////////////////////
// Filter

// const array3 = [1, 2, 10, 16];
// const filterArray = array3.filter(num => num > 5);

// console.log('filter', filterArray);
// filters through and returns a new array with stuff it finds true


///////////////////////////////////////////////
// Reduce

// const array4 = [1, 2, 10, 16];
// const reduceArray = array4.reduce((accumulator, num) => {
//   return accumulator + num 
// }, 0);

// console.log('reduce', reduceArray);
// define the accumulator after the function, 
// before the closing brackets
// here you can specify a second parameter/ starting number e.g. 0



///////////////////////////////////////////////
// EXERCISE 5
///////////////////////////////////////////////

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

  // my answer :)
  const newNameArray = [];
  array.forEach(obj => newNameArray.push(`${obj.username}!`));

  console.log(newNameArray);


  // the teachers shit ass long bullshit answer :(
  // or another way to do it
  let newArray = [];
  array.forEach(user => {
    let { username } = user;
    username = username + '!';
    newArray.push(username);
  })

  console.log(newArray);
    // mine is better

  

//   //Create an array using map that has all the usernames with a "? to each of the usernames
  
//  my answer :)
  // const mapArray = array.map( obj => `${obj.username}?` );

  // console.log(mapArray);


  // teachers answer :(
  // const solutionMapArray = array.map(user => {
  //   let { username } = user;
  //   return username + '?';
  // });
  
  // console.log(solutionMapArray);



//   //Filter the array to only include users who are on team: red

// answer, same as teachers
  // const filterArray = array.filter( obj => obj.team === 'red' );

  // console.log(filterArray);

  

//   //Find out the total score of all users using reduce

// answer, same as teachers
//   const reduceArray = array.reduce((acc, num) => {
//     return acc + num.score;
//   }, 0)

//   console.log(reduceArray);

  

//   // (1), what is the value of i?
//   // the array index

//   // (2), Make this map function pure:
//   const arrayNum = [1, 2, 4, 5, 8, 9];
//   const newArray = arrayNum.map((num, i) => num * 2);

//   console.log(newArray);
  
//   //BONUS: create a new list with all user information, but add "!" to the end of each items they own.

// my try..
// it returns the items, but not all!
// it returns..
// ball!, backpack!, pen!, undefined!
// which is..
// obj[0].items[0], obj[1].items[1], obj[2].items[2], obj[3].items[3]
// damnnnnn thats wrong, but interesting, so i'm leaving it here, so you can look over it later

// const bonusArray = array.map((obj, i) => `${obj.items[i]}!`);
// console.log(bonusArray);

// this is another atempt but it doesn't returns the whole list & user information
// it returns..
// ["ball,book,pen!", "tape,backpack,pen!", "ball,eraser,pen!", "book,pen!"]
// const bonusArray = array.map(obj => `${obj.items}!`);
// console.log(bonusArray);

// and for the real answer
// slightly shortened/edited by me..
// const bonusArray = array.map(obj => {
//   obj.items = obj.items.map(item => `${item}!`);
//   return obj;
// });
// console.log(bonusArray);

// groovy groovy
// hey mel go & practice arrays methods!!!
// then continue with object






///////////////////////////////////////////////
// EXERCISE 6
///////////////////////////////////////////////

//Evaluate these:
//#1
// [2] === [2] 
// {} === {} 

//#2 what is the value of property a for each object.
// const object1 = { a: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { a: 5}; 
// object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 


///////////////////////////////////////////////
// EXERCISE 7
///////////////////////////////////////////////

// Solve the below problems:


// #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #3) Create a function that calulates the power of 100 of a number entered as a parameter


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result




///////////////////////////////////////////////
// EXERCISE 8
///////////////////////////////////////////////

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// // it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);


// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '=');


// // #3) Get the below object to go from:
// let obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// // to this:
// 'my name is Rudolf the raindeer'



///////////////////////////////////////////////
// EXERCISE ADVANCED LOOPING
///////////////////////////////////////////////


