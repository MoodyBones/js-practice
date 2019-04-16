///////////////////////////////////////////////
// SCOPE
///////////////////////////////////////////////

// Variable access
// what variables do i have access to, 
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
// EXERCISE 3
///////////////////////////////////////////////

// change everything below to the newer Javascript!

// let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';


// // Destructuring
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// // Object properties
// var a = 'test';
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };


// // Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


// // default arguments
// // default age to 10;
// function isValidAge(age) {
//     return age
// }

// // Symbol
// // Create a symbol: "This is my first Symbol"

// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }



///////////////////////////////////////////////
// EXERCISE 4
///////////////////////////////////////////////

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)


// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

//What are the two elements of a pure function?


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
  
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  
  
  //Filter the array to only include users who are on team: red
  
  
  //Find out the total score of all users using reduce
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
//   const arrayNum = [1, 2, 4, 5, 8, 9];
//   const newArray = arrayNum.map((num, i) => {
//       console.log(num, i);
//       alert(num);
//       return num * 2;
//   })
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.



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


