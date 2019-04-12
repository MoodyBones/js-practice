// to store data use let & const

// let example = 'Dylan';
// // example = 'Jones';
// console.log(example);

//////////////////////////////////
// String Interpolation

// let firstName = 'Mel';
// let lastName = 'Jones';
// console.log(`${firstName} ${lastName}`);


//////////////////////////////////
// A method is a function
// A function is a set instructions
// it's how we store our code
///////////////////////////////


// let firstName = 'Mel';
// let lastName = 'Jones';
// console.log(`               ${firstName} ${lastName}`.trim().length);

/////////////////////////////////
// POPULAR STRING METHODS

    // .length
    // .trim()
    // .toUpperCase()
    // .toLowerCase()

    // .split('parameter')
    // will break up string using parameter
        // PARAMETER
        // A value that will be used in the method
// console.log(`${firstName} ${lastName}`.split(' '));
    //to break up every character, use an empty character :)



/////////////////////////////////
// String challenge
// to concatinate a value

// let firstName = 'Mel'; 
// technically use const for first&lastName too
// let lastName = 'Jones';
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);


/////////////////////////////////
// Numbers
// other languages have multiple number types
// JS only has 1!.. numbers!

    // typeof
        // checks what kind of variable

// let example = 7;
// console.log(typeof example);

// let example = 7.77;
// console.log(parseInt(example));
    // integer
    // no rounding

// let example = '7.77';
// console.log(parseFloat(example));
    // function parses a string 
    // and returns a floating number

// let example = 7.77;
// console.log(example.toFixed(5)); 
    // sets number of decimals
    // it rounds


/////////////////////////////////
// Numbers Challenge

// let example1 = parseInt("Hello 33 World 22");
// let example2 = parseFloat('44 Dylan 33');
//     // if the string starts with a number 
//     // parseInt/parseFloat will find it and pull it out
//     // not something you want to do!!

// let example3 = 55.3333.toFixed(0);
// let example4 = 200.0.toFixed(2);
//     // toFixed coverts to a string!!! 

// console.log(example1);
// console.log(example2);
// console.log(example3);
// console.log(example4);


/////////////////////////////////
// Booleans

// let example1 = 666;
//     // a number is true
//     // because its a truthy value
// console.log(Boolean(example1));


/////////////////////////////////
// Booleans Challenge

// let example1 = false;
// // false
// let example2 = true;
// // true

// let example3 = null;
// // false
//     // null is value that we are referencing, that says
//     // a developer plans on setting this value later on
//     // and we're giving null as a placeholder

// let example4 = undefined;
// // false
//     // either the variable wasn't defined
//     // or a bug in the code

// let example5 = '';
// // false
//     // empty strings are falsy

// let example6 = NaN;
// // false


// /////////////////////////
// // negative & positive numbers are
// // TRUTHY VALUES
// let example7 = -5;
// // true

// ///////// except for 0!!!
// // its a FALSY
// let example8 = 0;
// // false

// console.log(Boolean(example1));
// console.log(Boolean(example2));
// console.log(Boolean(example3));
// console.log(Boolean(example4));
// console.log(Boolean(example5));
// console.log(Boolean(example6));
// console.log(Boolean(example7));
// console.log(Boolean(example8));


/////////////////////////////////
// Arrays

// a list of items you will use in your code
// start at 0
// there are about 20-25 methods with arrays to learn
// inside and out!!
// he has a udemy course

// let example1 = [5, 7, 6];

// example1.push(8, 9 , 10);
//     // adds to array
// example1.pop();
//     // removes last value

// example1[0] = 1;
//     // to override

// example1.forEach((element) => {
//     console.log(element)
// });
// //     // to iterate through each element in our array
// //     

// console.log(example1);


/////////////////////////////////
// Arrays Challenge

// let example1 = ['Dylan', 5, true];
// let example2 = example1;
// example2.push(11);
// console.log(example1);
// console.log(example2);

// they have the same value
// with arrays & objects you're passing by reference
// example2 is setting a reference to example1
// you're not creating a new array
// so when you're pushing to example2 you're actually pushing to example1
// you always want to create a new array, 
// so that you don't effect the values in the original array

// let example1 = ['Dylan', 5, true];

// // let example2 = [...example1];
//     // spread operator ES6
//     // unwrap these values in a new array
    
//     // or

// let example2 = example1.map((element) => {
//     return element;
// });
//     // map method
//     // identical to spread operator
//     // recommend the spread operator coz its less code

// example2.push(11);
// console.log(example1);
// console.log(example2);



/////////////////////////////////
// Objects

// like arrays are 2 most important items to be familar with!!
// objects are defined by {}
// can take in properties
// objects can take:
    // strings
    // numbers
    // arrays
    // multiple data types!


// let example1 = {
//     firstName: 'Mel',
//     lastName: 'Jones',
//     address: {
//         city: 'Melbourne',
//         state: 'Victoria'
//     },
//     age: 32,
//     favouriteColours: ['Red', 'Pink', 'Green']
// };

// // console.log(example1.firstName);
//     // use . property to specify the value we want

// // console.log(example1.address.city);

// example1.age = 33;
// //     // to override

// console.log(example1.age);



// // OBJECT METHODS

// // a property name (e.g. firstName) is referred to as a KEY!
// // object.key = value

// console.log(Object.keys(example1));
// // prints out all keys
// // does not print out nested keys

// console.log(Object.values(example1));
// // returns all values

// console.log(example1.hasOwnProperty('firstName'));
// // to check if a key exists




/////////////////////////////////
// Objects Challenge

// let example1 = {
//     firstName: 'Mel'
// };

// // let example2 = example1;

// let example2 = Object.assign({}, example1);
//     // assign method
//     // takes 2 properties
//     // what you want to assign it to eg. an empty object
//     // and what
//     // this way lastName is only assigned to example2

// example2.lastName = 'Jones';
//     // will work
// example2.lastName.maidenName = 'Jones';
//     // won't work, because lastName is not defined

// console.log(example1);
// console.log(example2);

// objects also pass by reference
// values from example2 will be added example1 too




/////////////////////////////////
// Arithmetic Operators

// let example1 = 5 + 5 - 4 * 4 / 4;

// let example1 = 5 % 5;
//     // modulo operator
//     // returns remainders of numbers
// let example1 = 5 % 6;
//     // returns 5, coz 6 dont fit
// let example1 = 5 % 2;
//     // returns 1, coz 2 fits twice

// console.log(example1);


/////////////////////////////////
// Relational Operators

// will compare 2 items 
// and return a boolean value

// let example1 = 10;
// let example2 = 15;

// console.log(example1 >= example2);
// !=
// == 
// >=
// =<

//////////////////////
// THE DIFFERENCE BETWEEN == AND ===

// let example1 = 10;
// let example2 = '10';

// console.log(typeof example1);
// console.log(typeof example2);

// console.log(example1 == example2);
// // true
// // == 
// // checking that the values are the same

// console.log(example1 === example2);
// // false
// // ===
// // strictly equals operator
// // compares value AND type

// // same for != and !==


/////////////////////////////////
// Relational Operators Challenge

// let example1 = 5 === 5;
// // true
// let example2 = 5 == '5';
// // true
// let example3 = 6 != '6';
// // false
// let example4 = 7 !== '7';
// // true

// console.log(example1, example2, example3, example4);



/////////////////////////////////
// Increment & Decrement

// let example1 = 13;

// // example1++;
// // // plus 1
// // example1--;
// // // minus 1

// example1 += 5;
// // same as.. example1 = example1 + 5
// // also use: 
//     // +=
//     // -=
//     // *=
//     // /=
//     // %=

// console.log(example1);



/////////////////////////////////
// Increment & Decrement Challenge

// let example1 = 5;

// console.log(example1++);
// // 5
// // when ++ at end, it will add the value after the line of code

// let example2 = 5;

// console.log(++example2);
// // 6
// // within the line of code
// // generally not used




/////////////////////////////////
// If, Else If, Else, And & Or

// control flow

// an IF statement is a gatekeeper
// that evaluates the logic
// to tell us if somehting is true or not

// else if
// runs if previous if failed

// else 
// the default value

// let example = 5

// if (example === 6) {
//     console.log('Runs');
// } else if (false) {
//     console.log('else if')
// } else {
//     console.log('else')
// }


///////////
// AND, OR

// used to evaluate 2 or more statments

// && 
// AND
// both statements must be true

// ||
// OR
// either statement can be true

// let example = 5

// if (example === 5 && true === true) {
//     console.log('Runs');
// } else if (false) {
//     console.log('else if')
// } else {
//     console.log('else')
// }



/////////////////////////////////
// If, Else If, Else, And & Or Challenge

// console.log(10 === 10 && 5 < 4);
// // false

// console.log(10 === 10 || 5 < 4);
// // true

// console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5)
// // true


// google control flow practice javascript!!!!!



/////////////////////////////////
// Switch

// similar to if/else if
// control flow on code
// differnce is if you want it to run for a finite number
// say 3 or 4 times before switching to a default
// basically different way of writing an if/else


// let studentAnswer = 'D';

// switch(studentAnswer) {
//     case 'A': 
//         console.log('A is wrong.');
//         break;
//         // must break out!!!
//         // otherwise will have problems, 
//         // logic won't work properly
//         // you might get multiple true answers
//     case 'B':
//         console.log('B is wrong.');
//        break;
//     case 'C':
//         console.log('C is corrent.');
//         break;
//     default:
//     // basically else
//         console.log('Not a real answer.');
//         // no break on default
//         // so that no additional things are run
// }



/////////////////////////////////
// For Loop

// iteration!

////////
// if we know how many times to iterate..

// let i = 0 ..first instansiate a counter variable 
//          (usally i for iteration) and start at 0
// i < 5 .. continue to run forLoop as long as i is less than 5 
//          (continue if statement is true)
// i++ at each iteration increase by 1

// let total = 0;

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     total += i;
// }

// console.log(total);




/////////////////////
// How to iterate through an ARRAY
// When we don't know how many values are in it

// let total = 0;
// let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// for (let i = 0; i < numArray.length; i++) {
//     // console.log(numArray[i]);
//     total += numArray[i];
// }

// console.log(total);




/////////////////////////////////
// While & Do While

// we want to repeat our code
// when theres not a finite number of answers
// we can't use a switch 
// we don't know the length of the array or how many iterations to run

// We just want it to run until a value is false
// also does iterations

// let count = 0;

// while (count < 20) {
//     // put some logic here
//     count++;
// }
// console.log(count);


// forget about numbers
// a better use is...

// let count = 0;

// while (true) {
//     count++;

//     if (count >= 20) {
//         break;
//     }
    
// }
// console.log(count);


// Difference between a While Loop & a Do While Loop
// DO WHILE will run at lease once

// let count = 0;

// do {
//     count++;

//     if (count >= 20) {
//         break;
//     }
// }

// while (false)

// console.log(count);


// While & Do while are not used much
// except for times when you don't have any way of knowing how many iterations
// and basically you're checking a value until you get a right value
// caution you might create an infinite loops which will crash your program :(




/////////////////////////////////
// Functions

// a way of storing our code
// so we can call it again
// and reuse it over and over

// function add() {
//     console.log('add');
// }

// add();
// must invoke function!
// can call it again and again and again
// add();
// add();
// add();


// function add(num1, num2) {
//     return num1 + num2;
//     // return in a function will allow us to return a value
// }

// console.log(add(10, 6));
// console.log(add(15, 7));
// console.log(add(20, 5));

// functions can take in parameters (num1)
// pass in an argument(10) in the function calls, 
// which is a value for the parameter (num1)

// the point of functions..
// when solving problems typicall create a function
// so you can reuse it
// and call it
// and don't duplicate your code



