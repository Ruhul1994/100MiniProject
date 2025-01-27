/* 1. Function to return the sum of two numbers
function sum(a, b) {
return a + b;
}

// 2. Function to reverse a string
function reverseString(str) {
    // Your code here
}

// 3. Function to return the largest number in an array
function findLargestNumber(arr) {
    // Your code here
}


const formate =true;
if (formate) {
    console.log('Hello World');
}
*/
//  console.log(Boolean(null));
 
//  let distance = 29.0009;
//  console.log(distance.toFixed(2));
//  let error = 'Ruhul life'
//  if (error) {
//     console.log(error);
//  }

//  let parson = {
//     name:'Ruhul',
//     age: 24,
//     location:'Dhaka'
//  }
//  let member = parson;
//  member.age= 31;
//     console.log(parson['age']);

// let numberList = new Array(3);
// numberList[0] = 1;
// numberList[1] = 2;
// numberList[2] = 3;
// numberList[3] = 4;
// console.log(numberList.length);


// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
//  seas.push('Red Sea');
//  seas.unshift('Yellow Sea');
//     seas.pop();
// console.log(seas);
// let index = seas.indexOf('North Sea');
// console.log(index);

// const firstElement = seas.shift();
// console.log(firstElement);

// let number1 = -0;
// let number2 = +0;
// console.log(number1 + number2);

// let anergy = {
//     toString() {
//         return 42;
//     }
// }
// let result = anergy +10;
// console.log(result);
// let a = 45;
// let b = 20;
// a &= b;
// console.log(`a:` + a);

let a = 10;
// let b = a++;
// let b = ++a;
// console.log(`a:` + a);
// console.log(`b:` + b);
// let f= false;
// let t = true;
// if(!f) {
//     console.log('Hello');
// }

// let objectA = {
//     name: 'Ruhul',
//     age: 24
// }
// let objectB = objectA;
// objectB.name = 'Rama';
// console.log(objectA);
// console.log(objectB);

//  let container = undefined;
//  console.log(!!container);

// the age will be the 18 and gender will be boy. then it will be print the message.

// let age = 18;
// let gender = "Men";
// if (age >= 18 && gender === "Men") {
//     console.log('You are eligible to vote');
// } else {
//     console.log('You are not eligible to vote');
// }

// let age = 92;
// let massage = age >= 16 && age <= 70 ? 'you can drive' : 'you can not drive';
// console.log(massage);

// let authenticated = true;
// let nextUrl = authenticated
// ? ("you will redirect to admin", "/admin") 
// : ("you will redirect to login", "/login");

// console.log(nextUrl);

// speed = 90;
// let message = speed > 120 ? 'too fast' : speed >= 100 ? 'not good' : speed >= 80 ? 'fast' : 'very good';
// console.log(message);

// switch statement.
// switch (new Date().getDay()) {
//     case 0:
//         console.log("Today is Sunday");
//         break;
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// let day = 4;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = 'sunday';
//         break;
//         case 2:
//         dayName = 'Monday';
//         break;
//         case 3 :
//             dayName = 'Tuesday';
//             break;
//          case 4:
//             dayName = 'wednesday';
//             break;
//          case 5:
//             dayName = 'thursday';
//             break;
//          case 6:
//             dayName = 'friday';
//             break;
//             case 7:
//             dayName = 'saturday';
//             break;
//             default:
//                 dayName = 'Invalid day';
                
// }
// console.log(dayName);
// let numbers = [8, 9];
// let sum = 0;
// let i = 5;
// while(numbers.length > 0){
//     sum += numbers.pop();
// }
// console.log(sum);
// console.log(numbers);
// let mountains = ['Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu', 'Cho Oyu'];
// let i = 0;

// while (i <mountains. length) {
//     console.log(`${i +1}. ${mountains[i]}`);
//     i++;
// };
// console.log('End of the loop');
// for loop without body.
// let sum = 0;
// for (let i =0; i <= 10; i++, sum += i);
// console.log(sum);

// function foretopActive(){
//     for (let i=1; i <5; i++){
//         for(let j=1; j <= 3; j++){
//             console.log(`i: ${i}, j: ${j}`);
//         }
//     }
// }
// foretopActive();
// function threeRow() {
    
// let board =[1,2,3,4,5,6,7,8,9];
// let s ='';
// for(let i = 0, j=1; i<=board.length; i++, j++) {
//     s += board[i];
//     if(j % 3 === 0){
//         console.log(s);
//         s ='';
//     }
// }
// };

// threeRow();

// function printNumbers(n) {
//     for (let i = 1, j=1; i <= n; i++, j++) {
      
//     }
// };
// printNumbers(10);

// setTimeout( ()=>console.log('hello'), 2000);
// console.log('world');
// (function(){
//     console.log('Hello Ruhul');
// })();

// Recursive function to calculate the factorial of a number


// some of 10 numbers

// function sumOfNumbers(n) {
//  if (n<0)return 0;
//  console.log(`before: ${n}`);
//  return n + sumOfNumbers(n-1);  
// }

// console.log(sumOfNumbers(10));

// class Parson {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }


// let parson1= new Parson('Ruhul', 'Amin');
// let parson2 = new Parson('Rama', 'Amin');
// console.log(parson1);
// console.log(parson2);

// function Parson(firstNameName,lastName,age){
//     this.age = age
// }

// let parson1 = new Parson('Ruhul Amin', 33);
// console.log(parson1);
// let student = {
//     name: 'Ruhul',
//     age: 24,
//     location: 'Dhaka'
// }

// console.log(Object.getPrototypeOf(student));
// console.log(student.__proto__);

// let test = function(){
//     console.log('Hello');
// };
// console.log(test());
// function Parson(first, last,age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// let parson1 = new Parson('Ruhul', 'Amin', 24, 'black');
// let parson2 = new Parson('Rama', 'Amin', 24, 'black');
// // console.log(parson1, parson2);

// Parson.prototype.nationality = 'Bangladeshi';
// parson1.nationality = 'Bangladeshi';
// console.log(parson1.nationality);

// let d = new Date('2025-01-21 8:37:00');
// console.log(d.toString());


// class Parson {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let parson1 = new Parson('Ruhul', 'Amin');
// console.log(parson1.fullName);

// let cat = {type:'cat' , sound:'mew'};
// let dog = { type: 'dog', sound: 'woof'};
// const say = function (massage) {
//     console.log(massage);
//     console.log(this.type + ' says ' + this.sound);
// };
// say.apply(cat, ['How to cat says?']);
// say.apply(dog, ['How to cat says?']);

// let car = {
// name: 'Car',
// speed: 40,
// start() {
//     console.log( this.name + ` is running at ${this.speed} km/h`);
// }
// };

// let plan = {
//     name: 'Plane',
//     speed: 70,
//     flay() {
//         console.log(`Plane is flying at ${this.speed} km/h`);
//     }
// };
// let start = car.start.bind(plan);
// console.log(start());

// 

// let arr = [1, 2, 3, 4, 5];
// let number = [6, 7, 8, 9, 10];
// number.push.apply(number, arr);
// console.log(number);

// function grating(massage) {
//     return function(name) {
//      return massage + ' ' + name;
//     }
// }
// let greet = grating('Hello');
// let greet2 = grating('Bye');
// console.log(greet2('Ruhul'));

// function parson(){
//     let firstName = 'Ruhul',
//     lastName = 'Amin';

//     return {firstName, lastName};

// };

// let {firstName, lastName} = parson();

// console.log(firstName, lastName);

// let setColor = color => ({value : color});

// const {value} = setColor('red');
// console.log(value );

let colors = ['Red','Green','Blue'];
// for( const [index, color] of colors.entries()){
//     console.log(`${color} is at index ${index}`);
// }
    
// console.log("for ... of loop");
// for(const color of colors){
//     console.log(color);
// }
// console.log("for ... in loop");
// for(const index in colors){
// console.log(index + 5);
// };
let scores = [80, 90, 85, 90, 95];
for(const score of scores){
    console.log(score);
};