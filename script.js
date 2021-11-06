
// // let i = 100;
// // while (i >= 50) {
// //   console.log( i );
// //   i--;
// }

// let i = 40;
// while (i >= 0) {
//   console.log( i );
//   i--;
// }



// let myArray = [];

// for (let i = 0; i < 10; i++) { 
//     myArray.push('x');
// }

// console.log(myArray);


// let myArray = [];

// for (let i = 0; i < 3; i++) { 
//     myArray.push(prompt());
// }

// console.log(myArray);

let myArr = [123, 'voda', ['q', 'w', 'e' ], { a: 'b', v: 'qwe', c: 123} ];

myArr.splice(0, 1, 1234);
myArr.splice(1, 1, 'pivo');
myArr.splice([2], 1, ['q', 'w', 'e', 'r']);
console.log(myArr);



// [1234, 'pivo', ['q', 'w', 'e', 'r'], {a: 'b', v: 'qwe', c: 123}]