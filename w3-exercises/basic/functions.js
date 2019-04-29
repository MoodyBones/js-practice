// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223	

// let x = 32243;

const switchARoo = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(switchARoo(32243));