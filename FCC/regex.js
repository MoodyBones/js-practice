// Regex
let sentence = `The dog chased the cat.`;
let regex = /the/



// Using test method
let myString = `Hello, World!`;
let myRegex = /Hello/;
let result = myRegex.text(myString);
// true



// Match literal strings
let walDoIsHiding = `Somewhere Waldo is hidingin this text.`;
let waldoRegex = /Waldo/;
    // is case sensitive
let result = waldoRegex.test(walDoIsHiding);
// true



// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);



// Ignore Case While Matching
// i
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
    // flag with i to ignore case
    // (insensitive to case)
let result = fccRegex.test(myString);



// Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 

console.log(result);



// Find more than the First match
// g
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
    // flag with g to return more than 1st match
testStr.match(ourRegex);
    // will return an array with 3 elements
    // each element will be Repeat

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
    // can put more than one flag
let result = twinkleStar.match(starRegex); 

console.log(result);
// returns..
// ['Twinkle', 'twinkle'];



// Match anything with Wildcard period
// .
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result);
// true



// Match Single Character with Multiple Possibilities
let bgRegex = /b[aiu]g/;

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result);
// returns all the vowels from quoteSample
// ['e', 'a', 'e', 'o', ...]



// Match Letters of the Alphabet
// [a-z]
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 

console.log(result);
// returns every letter in the string in an array
// ['T', 'h', 'e', 'q', 'u', ...]



// Match Numbers and Letters of the Alphabet
// [2-6h-s]
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result = quoteSample.match(myRegex); 

console.log(result);
// reuturn all numbers betwen 2-6 & letters between h-s



// Characters you don't want to match..
// Negated Character Sets

// use ^ carrot character

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; 
let result = quoteSample.match(myRegex); 

console.log(result);
// returns everything but vowels and numbers
// includes the spaces and punctuation also



// Match Characters that Occur One of More Times
// +
let difficultSpelling = "Mississipspi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);

console.log(result);
// ["ss", "ss", "s"];



// Match Characters that Occur Zero or More Times
// *
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

console.log(result); 
// ["Aaaaaaaaaaaaaaaa"]



// Find Characters with Lazy Matching
// ?

// a greedy match finds the longest possible part of the string that fits the regex pattern and returns it as a match
// a lazy match finds the smallest possible part and returns that

// Regex patterns default to greedy!!!

let string = "titanic";
let regex = /t[a-z]*?i/; 
string.match(regex);
// without ? it's greedy by default
// Returns ["Titani"]
// with ? it's lazy
// Returns ["Ti"]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);

console.log(result);
// greedy (without ?)
// returns ["<h1>Winter is coming</h1>"]
// lazy (with ?)
// returns ["<h1>"]



// Find One of More Criminals in a Hunt - Challenge
// the criminals are C and stick together

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);



// Match Beginning String Patterns
// ^ at beginning

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);
console.log(result);
// true



// Match Ending String Pattern
// $ at end

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);
console.log(result);
// true



// Match All Letters and Numbers
// \w = shorthand character class
// will match A-Z a-z 0-9 _

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);
// 31
// excluding the spaces and the period there is 31 letters in the string



// Match Everything But Letters and Numbers
// \W

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);
// 6



// Match All Numbers
// \d

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;
console.log(result);
// 3



// Match All Non-Numbers
// \D

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;
console.log(result);
// 24



// Restrict Possible Usernames
/*
1) If there are numbers, they must be at the end.

2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letter names can't have numbers.
*/ 

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; // Change this line
let result = userCheck.test(username);

// ^[A-Za-z] specifies only letters at the beginning
// {2,} states how many times the previous things can match {min,max}
// \d*$/   
    // \d = numbers, * = 0 or more, $ = at end



// Match Whitespace
// \s 
// will match a space, carriage return, a tab, a form feed, a new line character

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

// [" ", " ", " ", " ", " "]


// Matching Non-Whitespace Characters
// \S
// always capitalize with non matches ;)

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\S/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

// ["W", "h", "i", "t", "e", "s", "p", ...]



// Specify Upper and Lower Number of Matches

// with quantity specifiers {}
// {min, max or infite}

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);



// Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Change this line
let result = haRegex.test(haStr);



// Specify the exact number of matches

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);



// Check for All or None
// ? = may or may not

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);


// Positive and Negative Lookahead

// Lookaheads are patterns that tell JS to look ahead in your string,
// to look for patterns further along

let quit = "qu";
let noquit = "qt";

// lookaheads always start with ?
// = positive lookahead
// ! negative lookahead
let quRegex= /q(?=u)/;
    // a pos...
    // will first look for the q, 
    // then will lookahead and make sure the string contains a u
    //  if there is a u, we will return just the q
let qRegex = /q(?!u)/;
    // a neg
    // will make sure something is not ahead in the string
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]


// A more practical use for Lookaheads,
// is to check 2 or more patterns in a string

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);


// (?=\w{5}) 5 or more characters
// \D  are not digits 
//  * zero or more
// \D* zero or more that are not digits
// \d{2} two or more digits

// (?=\w{5})(?=\D*\d{2})
// will look for 5 or more characters
// and 2 or more digits




// Reuse Patterns Using Capture Groups

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
//  is the same as /(\w+)\s(\w+)/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); 
// Returns ["regex regex", "regex"]
// first element in array is the full match
// second element, is whatever is in the capture group


let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1/$; // Change this line
let result = reRegex.test(repeatNum);

// any number, space, any number, space, any number
// add ^ at the beginning and $ at the end so it stops after the 3 matches
// ^ means we want this at the beginning
// means we want this at the end $

// adding ^ and $ 
// means we want exactly this, we want nothing before this & nothing after this



// Use Capture Groups to Search and Replace

// you can search and replace using replace
// replace(regex pattern you want to search for, is the string to replace the match or a function to do something)

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

// you can also access replacement groups with $
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
// $2 means the second capture group ()
// $1 the first capture group

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);



// Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log(result);

// | or



// Regular Expressions Outro

// JavaScript Projects: https://www.youtube.com/playlist?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V

// youTube playlist with lots of JavaScript projects



