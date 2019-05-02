// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223	

// const switchARoo = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

// console.log(switchARoo(32243));



// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// const palindrome = word => word === (word.toString.reverse) ? `Cool, yes ${word} is palindrome!` : `Nope, sorry ${word} isn't, please try another word :)`;

let palindrome = word => 
    word === word.split('').reverse().join('')
    ? `Cool, yes ${word} is palindrome!`
    : `Nope, sorry ${word} isn't, please try another word :)`;


console.log(palindrome(`cat`));
