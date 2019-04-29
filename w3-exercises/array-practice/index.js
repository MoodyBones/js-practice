// 1. Write a JavaScript function to check whether an `input` is an array or not.
// 
// long answer
// Method: toString.call() 
// const is_array = (input) => {
//     if (toString.call(input) === '[object Array]')
//         return true;
//     return false;
// };


// shorter answer 
// Method: Array.isArray()
// const is_array = (obj) => Array.isArray(obj);

// console.log(is_array('w3resourse'));
// console.log(is_array([1, 2, 4, 0]));
// Expected Output : 
// false
// true



// 2. Write a JavaScript function to clone an array.

// Method: slice()
// e.g. arr.slice([begin[, end]]);
// Remember to enter the begin index e.g. 0
// const array_Clone = arra1 => arra1.slice(0);

// shorter ES6 solution
// const array_Clone = arra1 => [...arra1];

// console.log(array_Clone([1, 2, 4, 0])); 
// console.log(array_Clone([1, 2, [4, 0]]));
// Expected Output : 
// [1, 2, 4, 0] 
// [1, 2, [4, 0]]





// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// solution
// const first = (array, n) => {
//     if (array === null)
//         return void 0;
//     if (n === null)
//         return array[0];
//     if (n < 0)
//         return [];
//     return array.splice(0, n);
// };

// another solution 
// const first = (arra1, n = 1) => {
//     return n > 0 ?
//     arra1.splice(0, n) :
//     [];
// };

// console.log(first([7, 9, 0, -2])); 
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Expected Output : 
// 7
// [] 
// [7, 9, 0] 
// [7, 9, 0, -2] 
// [] 




// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 

// const last = (array, n) => {
//     return array.slice(n ? - n : array.length - 1);
// }

// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));

// Expected Output : 
// -2 
// [9, 0, -2] 
// [7, 9, 0, -2]


// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : 

// const myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));


// Expected Output : 
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"




// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// const num=window.prompt();
// const str = num.toString();
// const result = [str[0]];

// for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
//         result.push('-', str[i]);
//     } else {
//         result.push(str[i]);
//     }
// }

// console.log(result.join(''));