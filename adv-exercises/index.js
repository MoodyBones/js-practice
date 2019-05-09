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
// const sum = num => num + 1;
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

// console.log('original array', array);
// // [1, 2, 10, 16]
// console.log('forEach', double);
// // [2, 4, 20, 32]


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
// [10, 16]
// filters through and returns a new array with stuff it finds true


///////////////////////////////////////////////
// Reduce

// const array4 = [1, 2, 10, 16];
// const reduceArray = array4.reduce((accumulator, num) => {
//   return accumulator + num 
// }, 0);

// console.log('reduce', reduceArray);
// 29
// define the accumulator after the function, 
// before the closing brackets
// here you can specify a second parameter/ starting number e.g. 0



///////////////////////////////////////////////
// EXERCISE 5
///////////////////////////////////////////////

// Complete the below questions using this array:
// const array = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
  
//   ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames

  // my answer :)
  // const newNameArray = [];
  // array.forEach(obj => newNameArray.push(`${obj.username}!`));

  // console.log(newNameArray);


  // // the teachers longer answer...
  // // or another way to do it
  // let newArray = [];
  // array.forEach(user => {
  //   let { username } = user;
  //   username = username + '!';
  //   newArray.push(username);
  // })

  // console.log(newArray);
  //   // mine is shorter

  

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
  // const reduceArray = array.reduce((acc, num) => {
  //   return acc + num.score;
  // }, 0)

  // console.log(reduceArray);

  

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
// Advanced Objects

// ///////
// Reference type

// [] === []
// false
// [1] === [1]
// false

// let object1 = { value: 10};
// let object2 = object1;
// let object3 = { value: 10};

// object1 === object2;
// true
// object1 === object3;
// false

// object1.value = 15;
// object2.value;
// // 15
// object3.value;
// // 10

// objects are reference types (non primitive type)
// that means, theyre created by the programer
// arrays are objects


// ////////
// Context (vs scope)

// scope is created with {}
// function b() {
//   let a = 4;
// }

// Context tells you where we are within the object
// console.log(this)
// this referes to what object it's inside of
// this is v important

// function a() {
//   console.log(this);
// }

// const object4 = {
//   a: function() {
//     console.log(this);
//   }
// }



// Instantiation

// when you make a copy of an object and reuse the code
// making instances /or multiple copies

// class Player {
//   constructor(name, type) {
//     console.log(this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//   }
// }

// // in order to access the player and make copies of it
// // you need a contructor
//     // which is all the properties and methods that you want the player to have
// // you can also creat methods that players can have
// // and any time you want to access a property within the constuctor
// // use....
// ///////////
// // this
// ///////////

// class Wizard extends Player {
//  constructor(name, type) {
//   super(name, type)
//  }
//  play() {
//    console.log(`heyyyyyy I'm a ${this.type}`);
//  }
// }
// // extends.. i wanna add on top of player
// //  any time we extend, we need to call the constructor function of the parent(player)
// // e.g. super() with the properties we want to pass to the instructor

// const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Greg', 'Dark Magic');

// this is new syntax you'll see in React
// it's a part of ES6
// it replaces classical Inferitance
    // e.g. prototype



///////////////////////
// Classical Inheritance
// old version
// don't use!!!!!

// var Player = function(name, type) {
//   this.name = name;
//   this.type = type;
// }

// Player.prototype.introduce = function() {
//   console.log('Hi I am ' + this.name + ', I\'m a ' + this.type + '.');
// }

// var wizard1 = new Player('Shelly', 'healer');
// var wizard2 = new Player('Shawn', 'dark magic');

// wizard1.play = function() {
//     console.log('Woooooo I\'m a ' + this.type + '.');
// }

// wizard2.play = function() {
//     console.log('Woooooo I\'m a ' + this.type + '.');
// }

// don't use the above!!!
// it's for reference
//////////////////////////







///////////////////////////////////////////////
// EXERCISE 6
///////////////////////////////////////////////

//Evaluate these:
//#1
// [2] === [2] 
// false
// {} === {} 
// false

//#2 what is the value of property a for each object.
// const object1 = { a: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { a: 5}; 
// object1.a = 4;

// solution..
// object1, object2, object3
// { a: 4}
// object4
// { a: 5}

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color 
// and has a sound method that moo's her name, type and color. 

// class Animal {
//     constructor(name, type, color) {
//         this.name = name;
//         this.type = type;
//         this.color = color;
//     }
// }

// class Mammal extends Animal {
//     constructor(name, type, color) {
//         super(name, type, color);
//     }
//     sound() {
//         console.log(`Moooooo I'm a ${this.name}, a ${this.color} ${this.type}`);
//     }
// } 

// const cow1 = new Mammal('Molly', 'cow', 'brown');
// const cow2 = new Mammal('Arne', 'cow', 'blonde');



///////////////////////////////////////////////
// Pass By Value vs Pass By Reference

// primitive tyoes are imitable
// we can't change them
// something new gets created
// pass by value

// let a = 5;
// let b = a;

// b++;


// objects
// pass by reference

// let obj1 = {name: 'Yao', password: '123'};
// let obj2 = obj1;

// obj2.password = 'easypeasy';

// objects in js are stored in memory and passed by reference
// we don't copy the values like you do with primitive types
// we simply create a reference to where the object is 

// its good because..
// its saves space and memory, we're not copying or cloning the object, creating multiple versions
// and bad because..
// someone may accidently change a property on the referenced object

// so be careful!

// Arrays are Objects!!
// they also pass by reference!

// let c = [1,2,3,4,5];
// let d = c;
// d.push(4837264);
// console.log(d);
// console.log(c);

// what if we want to make a copy!?
// with an array it's easy...
// [].concat()
// which will push it into a new empty array
// it clones an array

// let c = [1,2,3,4,5];
// let d = [].concat(c);
// d.push(4837264);
// console.log(d);
// console.log(c);


// objects are more difficult to copy
// Object.assign(to, from);

// let obj = {a: 'a', b: 'b', c: {deep: 'try and copy me'}};
// let clone = Object.assign({}, obj);

// or use the spread operator
// new feature
// let clone2 = {...obj};

// what happens when you have an object inside an object??
// we made a shallow clone
// we cloned the first level only

// how do we do deep cloning?
// let superClone = JSON.parse(JSON.stringify(obj));

// obj.c.deep = 'hahaha';
// console.log(obj);
// console.log(clone);
// console.log(clone2);
// console.log(superClone);

//  warning, if doing a deep clone
// be careful
// if it's big object, it will take a long time to clone everything
// so it's not commonly used
// you probably should be doing it a different way



///////////////////////////////////////////////
// Type Coercion

// means the language converting one type to another type
// all languages have type coercion
// JS has an expecially heavy type coercion nature because it's dynamically typed

// it happens when you used ==
// === means be explicit
// you should always use ===
// using == is not predicitable code

// type coercion also works for if statements
// see online table

// -0 === +0
// true
// Object.is(-0,+0)
// false

//  NaN === NaN
//  false
// Object.is(NaN,NaN)
// true

// takeaway..
// type coercion is tricky
// so best to use strict operators always!!




///////////////////////////////////////////////
// ES7

// released in 2016
// only 2 updates from ES6


// Includes method for strings and arrays..
// 'Hellooooo'.includes('o');
// true

// const pets = ['cat', 'dog', 'bat'];
// pets.includes('dog');
// // true


// exponential operator **
// const square = x => x**2



///////////////////////////////////////////////
// EXERCISE 7
///////////////////////////////////////////////

// Solve the below problems:


// #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// console.log(dragons.includes('John'));
// false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// // console.log(dragons[1].includes('John'));

// // i need a function
// const doesItInclude = name => {
//   // loop through array
//   for (let i = 0; i < dragons.length; i++) {
//     // check if part name is in array
//     if (dragons[i].includes(name)) {
//       // console.log('part name Yes!');
//       console.log(dragons.splice(i, 1));
//       break;
//     } else
//     // checks if full name is in the array
//     if (dragons.includes(name)) {
//       // console.log('full name Yes!');
//       console.log(dragons.splice(i, 1));
//       break;
//     } 
//   }
// }

// doesItInclude('San');
// works, but hacky / not clean
// and only works with one name!!! :(

// anddd the answer..
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// console.log(dragons.filter(name => name.includes('John')));
// damnnnnn so easy!!!

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

// const powerNumber = a => {
//   a = a**100; 
//   console.log(a);
// } 

// powerNumber(1000);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
// infinity




///////////////////////////////////////////////
// ES8

// Introduced 2017

// New String methods
// it's useful for aligning characters of strings
// .padStart()
// 'Turtle'.padStart(10);
// // adds 10 spaces at the beginning

// .padEnd()
// 'Turtle'.padEnd(10);
// // adds 10 spaces at the end



// Trailing comas in functions, parameter lists & calls
// const fun = (
//   a,
//   b,
//   c,
//   d,
//   ) => {
//   console.log(a);
// }
// fun(1,2,3,4,);
// is useful when you have a big parameter list
// it's easier to add new parameters
// also in github when you make changes, it highlights differences, 
// in green/red much cleaner
// the ending coma is now valid, and won't give out an error


// Object.values
// Object.entries
// replaces Object.keys
      // which allowed us to use array methods, but on objects
      // e.g.
      // let obj = {
      //   username0: 'Santa',
      //   username1: 'Rudolf',
      //   username2: 'Mr.Grinch'
      // };
      // because it's not an array
      // we cant use filter/map/reduce because theyre for arrays, so we use
      // Object.keys(obj).forEach((key, index) => {
      //   console.log(key, obj[key]);
      // });
      // returns..
      // username0 Santa
      // username1 Rudolf
      // username2 Mr.Grinch
      // one way to iterate/loop through objects

// new syntax
// Object.values
// Object.values(obj).forEach(value => {
//   console.log(value);
// });
// returns
// Santa
// Rudolf
// Mr.Grinch
// 


// &
// Object.entries
// Object.entries(obj).forEach(value => {
//   console.log(value);
// });
// returns an array...
// ['username0', 'Santa']
// ['username1', 'Rudolf']
// ['username2', 'Mr.Grinch']
// you get both key & value
// then you can use array functions (filter, reduce, map, forEach)
      

// example if we want to change the username
// Object.entries(obj).map(value=> {
//   console.log(value[1] + value[0].replace('username', ''));
// });
// returns
//  ["Santa0", "Rudolf1", "Mr.Grinch2"]


// AND THE NEW ES8 FEATURE EVERYONE IS MOST EXCITED ABOUT..
// Async Await
//  see How JavaScript works section





///////////////////////////////////////////////
// EXERCISE 8
///////////////////////////////////////////////

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// turtle = turtle.padStart(9);
// rabbit = rabbit.padStart(9);


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
// console.log(turtle);

// it adds = to the end 7 times(why 7!?)
// it pads the string out to 9 charaters long
    // the emoji takes up 2 characters
    // and the = takes up the remaining 7 spots
// questionnnnn... do we need to use trim?? i tested without trim and got the same result






// // #3) Get the below object to go from:
// let obj1 = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// // to this:
// 'my name is Rudolf the reindeer'

// Object.entries(obj1).map(value => {

// });

// Object.entries(obj1).map(value => value.join(' ')).join(' ');




///////////////////////////////////////////////
// Loops (review lecture 118)



////////////////
// For

// let todos = [
//   'clean room',
//   'brush teeth',
//   'exercise',
//   'study JavaScript',
//   'eat healthy'
// ];

// for (let i = 0; i < todos.length; i++) {
  // console.log(todos[i] + '!');
    // adds ! when logging
  // todos[i] = todos[i] + '!';
    // adds ! to items in array
  // todos[i].pop();
    // won't work because todays[i] is an item in an array
  // todos.pop();
    // works because todos is the array
    // it returns..
    // ['clean room', 'brush teeth']
    // why..?
    // because as it pops adjusts the length
        // i = 0, length = 5
        // eat healthy pops off the end
        // i = 1, length = 4
        // study Javascript pops off the end
        // i = 2, length = 3
        // exercise pops off the end
        // i = 3, length = 2
        // i is now greater than length so function exits
    // so how do we fix this??...
// }

// with..
// saving the length in a variable
// const todosLength = todos.length;
// for (let i = 0; i < todosLength; i++) {
//   todos.pop();
// }


///////////////
// While

// let counter1 = 0;
// while (counter1 < 10) {
//   console.log(counter1);
//   counter1++;
// }
// returns
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// stops when counter1 = 10 and exits function


// and to count down backwards...
// let counter1 = 10;
// while (counter1 > 0) {
//   console.log(counter1);
//   counter1--;
// }



///////////////
// Do while

// let counter2 = 10;
// do {
//   console.log(counter2)
//   counter2--;
// } while (counter2 > 0);

// while vs do while loop
// in a while loop we check the condition first
// whereas do while says, do the stuff first, then check the condition

// but most of the time you use a for loop
// well no, now we use forEach!!! :)



///////////////
// forEach

// let todos = [
//   'clean room',
//   'brush teeth',
//   'exercise',
//   'study JavaScript',
//   'eat healthy'
// ];

// todos.forEach(function(i) {
//   console.log(i);
// });
// returns
// clean room
// brush teeth
// exercise
// study JavaScript
// eat healthy


// forEach takes the array and it asks for an argument
// were not accessing the index like we do in the for loop
// in for loop you must do todos[i]
// forEach returns the item

// to access the index in forEach
// add additional parameter
// todos.forEach(function(todo, i) {
//   console.log(todo, i);
// });

// can also write it like...
// so that its D R Y
// and we can reuse the function elsewhere
// function logTodos(todo, i) {
//   console.log(todo, i);
// }

// todos.forEach(logTodos);

// check that it works on all browsers!!
// yessssss it works on allll, except opera mini parseInt




///////////////////////////////////////////////
// Advanced Loops L154

// Iterating..
// simply means we can go one by one through an array and look at each item
// it can be done to iterables!..
// both arrays & strings are 

//  ther are 2 more ways to loop
// const basket = ['apples', 'bananas', 'grapes'];

// // 1.
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// // 2.
// basket.forEach(item => {
//   console.log(item);
// })

// 3.
// for of 
// Iterating - arrays string
// for (item of basket) {
//   console.log(item);
// }
// for of allows us to iterate over these iterables


// for in
// Enumerating - objects
// const detailedBasket = {
//   apples: 5,
//   bananas: 10,
//   grapes: 1000,
// };

// for (item in detailedBasket) {
//   console.log(item);
// };
// for in allows are to loop over and see the object properties
// we are not iterating here
// with an object we are... enumerating (to mention a number of things one by one)


// butttt... for in also works on arrays
// because an array is basicially an object
// it will return the array indexes
// returns
// 0
// 1
// 2
// because..  
// basket = {
//   0: 'apples',
//   1: 'bananas',
//   2: 'grapes'
// }


// instead of forloops
// we can use..
// Object.keys()
// Object.values()
// Object.entries()



///////////////////////////////////////////////
// ADVANCED LOOPING EXCERCISE
///////////////////////////////////////////////

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000
// }

// //1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// //2
// basket.forEach(item => {
//   console.log(item);
// })

// for (item in detailedBasket) {
//   console.log(item);
// }

// for (item of basket) {
//   console.log(item);
// }

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
// const array = [-1,0,3,100, 99, 2, 99] // should return 100
// const array2 = ['a', 3, 4, 2] // should return 4
// const array3 = [] // should return 0

  // it needs to iterate through
  // and check if the number is greater than the previous
  // if the number is greater than the previous it should save it in a new variable
  // after all numbers are checked
  // return the variable

// const biggestNumberInArray = arr => {
//   let bigOne = 0;
//   arr.forEach(item=> {
//     if (item > bigOne) {
//       bigOne = item;
//     }
//   });
//   console.log(bigOne);
// }

// biggestNumberInArray(array);

// const biggestNumberInArray2 = (arr, item) => {
//   let bigOne = 0;
//   for (item of arr) {
//     if (item > bigOne) {
//       bigOne = item;
//     }
//   } 
//     console.log(bigOne);
// }

// biggestNumberInArray2(array2)

// function biggestNumberInArray3(arr) {

// }

// const biggestNumberInArray3 = (arr, item) => {
//   let bigOne = 0;
//   for (item in arr) {
//     if (item > bigOne) {
//       bigOne = item;
//     }
//   } 
//     console.log(bigOne);
// }

// biggestNumberInArray3(array3)


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100,
// }

// const checkBasket = (basket, lookingFor) => {
//   for(item in basket) {
//     if (item === lookingFor) {
//       console.log(`${lookingFor} is in the basket.`);
//       return;
//     }
//   }
//   console.log(`${lookingFor} does not exist in your basket.`);
// }

// checkBasket(amazonBasket, `glasses`);



///////////////////////////////////////////////
// DEBUGGING
///////////////////////////////////////////////

// the act of looking over code, understanding what it's doing
// and figuring out, why it's not acting as expected
// maybe its not even running!!
// getting errors
// maybe it's what the user is entering..

// original
// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//   (a, b) => a.concat(b), []);

// debuggingggg
// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//   (accumulator, array) => {
//     console.log('array', array);
//     console.log('accumulator', accumulator);
//     return accumulator.concat(array)
  
//   }, []);

// its an array, a nested array
// reduce we know first parameter is the accumulator
// second para is the value, so in this case the array
// we know that the accumlator will start with an empty array []
// now open up the function, add console logs
// don't forget to add return
// it's going to loop 3 times
// it returns...
    // array (2) [0, 1]
    // accumulator []
    // array (2) [2, 3]
    // accumulator (2) [0, 1]
    // array (2) [4, 5]
    // accumulator (4) [0, 1, 2, 3]
//  it looks like its adding the each nested array into the accumulator array
// we using the concat function to join the arrays
// we are flattening the arrays

// instead of using console.log....
// use debugger
// it's JS keyword
// it stops
// you can go step by step through the function
// it also shows..
// Variables in scope
// Context (this value)

// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//   (accumulator, array) => {
//     debugger;
//     return accumulator.concat(array)
  
//   }, []);




///////////////////////////////////////////////
// How JavaScript works
///////////////////////////////////////////////


// What is a program

// allocate memory
// parse and execute

// Chrome
// V8 - JS engine

///////////
// Memory Heap

// const a = 1;
// const b = 10;
// const c = 100;

// Memory Leak, happens when you have unused memory, it fills up the memory heap

// Global variables are bad!!!


//////////
// Call Stack

// first in, last out

// console.log('1');
// console.log('2');
// console.log('3');

//  what reads and executes our script

// const one = () => {
//   const two = () => {
//     console.log('4');
//   }
//   two();
// }



// Javascript is a single threaded language that can be non blocking...?

// single threaded means it has only one call stack
// it can only do one thing at a time

// why was it designed to be single threaded?
// makes it less complicated
// just one thing to worry about
// with a multi threaded environment, you can have deadlocks

// JavaScript is syncronous 
// the latter cant start until the first finishes
// syncronous can get slow


// Recursion, means a function that calls itself
// and creates a stack overflow



// Javascript is a single threaded language that can be non-blocking..?

// ideally we don't wait around for things that take time

// asynchronous programming
// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 2000)
// console.log('3');


//  JavaScript Run-Time Environment

// Web API's
    // DOM (document)
    // AJAX (XMLHttpRequest)
    // Timeout (serTimeout)
// Callback Queue
    // callback()
    // onClick
    // onLoad
    // onDone
// Event loop


// What is the difference between synchronous & asynchronous programming?
// How does JavaScript work....?
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Javascript is a single threaded language that can be non-blocking, 
// it has one call stack and it does one thing at a time.
// in order to not block the single thread, its can be asynchronous with callback functions
// and the callback functions run in the background, through the callback queue and then the event loop
// which bring it back to the Call Stack!!
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////





///////////////////////////////////////////////
// Modules
///////////////////////////////////////////////

// don't polute the global name space!!!!

// lack of dependency resolution
// when you have multiple js files 
// the current file, references a variable/function in a file that hasn't loaded yet


// IIFE
// it wraps brackets around the function
// js reads it, evaluates it and executes it
// and it was a confusing way to make sure of one thing... 
// by using this method, you didnt polute the global main space!
// the issue with this is, the order of the files are still important
// lack of dependency resolution


// Browserify
// is a module bundler
// it bundles all the JS files into 1
// not great for the devs when working on it, they keep seperate files
// so we run it through browserify right before we deploy (put it out to the public)

// all these problems were because it didnt have..
// a module system built into the system

// Modules
// each piece is really good at doing one thing!


// ES6 & Webpack2
// where we are today!!

// js1
// export const add = (a, b) => a + b;
// //  or, if only 1 file
// export default function add() {
//   return a + b;
// }

// // js2
// import { add } from './add';
// //  or, if only 1 file
// import add from './add';

// put the import at the top

// but browsers are all support this yet, coz its news
// so we use Webpack2

// Webpack2, like browerify is a module bundler
// it bundles modules (it bundles javascript files)
// it traverses the depency tree
// with Webpack2 we can use ES6 in all browsers

//  we will use this with React

// webpack
// module.exports = {
//   entry: './app/main.js',
//   output: {
//     path: './dist',
//     filename: 'bundle.js'
//   }
// }















