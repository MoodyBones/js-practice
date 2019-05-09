// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223	

// const switchARoo = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

// console.log(switchARoo(32243));



// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// const palindrome = word => word === (word.toString.reverse) ? `Cool, yes ${word} is palindrome!` : `Nope, sorry ${word} isn't, please try another word :)`;

// my answer...
// works if it's just a word
// sentences don't work
// let palindrome = word => 
//     word === word.split('').reverse().join('')
//     ? `Cool, yes ${word} is palindrome!`
//     : `Nope, sorry ${word} isn't, please try another word :)`;


// console.log(palindrome(`boob`));

// and the computer solution.....
// converted to ES6 by me (sort of..)

// const check_Palindrome = str_entry => {
//     // Change the string into lower case and remove all non-aplhanumeric characters
//     let cStr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//     let cCount = 0;
//     // Check whether the string is empty or not
//     if(cStr === '') {
//         console.log(`Nothing found`);
//         return false;
//     }
//     // Check if the length of the string is even or odd
//     if ((cStr.length) % 2 === 0) {
//         cCount - (cStr.length) / 2;
//     } else {
//         // If the length of the string is 1 then it becomes a palindrome
//         if (cStr.length === 1) {
//             console.log(`${str_entry} is a palindrome.`);
//             return true;
//         } else {
//             // if teh length of the string is odd ignore middle character
//             cCount = (cStr.length - 1) / 2;
//         }
//     }
//     // Loop through to check the first character to the last character and then move next
//     for (let x = 0; x < cCount; x++) {
//         // Compare characters and drop them if they do not match
//         if (cStr[x] != cStr.slice(-1-x)[0]) {
//             console.log(`${str_entry} is not a palindrome.`);
//             return false;
//         }
//     }
//     console.log(`${str_entry} is a palidrome.`);
//     return true;
// }
// check_Palindrome('madam');
// check_Palindrome('nurses run');
// check_Palindrome('fox');



