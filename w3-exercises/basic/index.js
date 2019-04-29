// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38


// let today = new Date();
// // const getDate = () => {
// //     let numberDate = today.getDay();
// //     switch (numberDate) {
// //         case 1:
// //             return 'Monday';
// //             break;
// //         case 2:
// //             return 'Tuesday';
// //             break;
// //         case 3:
// //             return 'Wednesday';
// //             break;
// //         case 4:
// //             return 'Thursday';
// //             break;
// //         case 5:
// //             return 'Friday';
// //             break;
// //         case 6:
// //             return 'Saturday';
// //             break;
// //         case 7:
// //             return 'Sunday';
// //             break;
// //        default:
// //             return 'error';
// //     }
// // };

// // instead of using that ridiculos but fun switch statement above
// // you could use an array!!
// const day = today.getDay();
// const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// console.log(`Today is : ${dayNames[day]}.`);


// let hour = today.getHours();
// const minute = today.getMinutes();
// const second = today.getSeconds();

// let period = (hour >= 12) ? 'PM' : 'AM';
// hour = (hour >= 12) ? hour - 12 : hour;

// if (hour === 0 && prepand === 'PM') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = 'Noon';
//     } else {
//         hour = 12;
//         prepand = 'PM';
//     }
// }

// if (hour === 0 && prepand === 'AM') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = 'Midnight';
//     } else {
//         hour = 12;
//         prepand = 'AM'
//     }
// }

// const formatTime = `Current time is : ${hour} ${period} : ${minute} : ${second}`;
// console.log(formatTime);




// 2. Write a JavaScript program to print the contents of the current window. 

// const print_current_page = () => window.print();
// function print_current_page() { window.print() };


// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// my answer
// const today = new Date();
// const date = ('0' + (today.getDate())).slice(-2);
// const month = ('0' + (today.getMonth() + 1)).slice(-2);
// const year = today.getFullYear();

// console.log(`${date}-${month}-${year}, ${date}/${month}/${year}`);



// online solution
// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth()+1; 
// var yyyy = today.getFullYear();
// if(dd<10) 
// {
//     dd='0'+dd;
// } 

// if(mm<10) 
// {
//     mm='0'+mm;
// } 
// today = mm+'-'+dd+'-'+yyyy;
// console.log(today);
// today = mm+'/'+dd+'/'+yyyy;
// console.log(today);
// today = dd+'-'+mm+'-'+yyyy;
// console.log(today);
// today = dd+'/'+mm+'/'+yyyy;
// console.log(today);



// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// const s1 = 5;
// const s2 = 6;
// const s3 = 7;

// const p = (s1 + s2 + s3)/2;
// const area = Math.sqrt(p*((p-s1)*(p-s2)*(p-s3)));

// console.log(area);



// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

// const animate_string = (id) =>
// {
//     const element = document.getElementById(id);
//     const textNode = element.childNodes[0]; // assuming no other children
//     let text = textNode.data;

// setInterval(() => {
//  text = text[text.length - 1] + text.substring(0, text.length - 1);
//   textNode.data = text;
// }, 100);
// }

