console.log("Hello World")
let a = 5;
let b = 10;
let sum = a + b;
console.log("Sum:", sum);       


let n = 15;
let g = n;                          // n ,g is different address so it doesn't change 
n = 20;
console.log("Value of g:", g);
console.log("Value of n:", n); 


let object1 = {age : 33};             // obj1 , obj2 are same address so either one can be change another automatically change
let object2 = object1;
object1.age = 22;
console.log(object2.age);



console.log( 9 & 5); // convert binary and check both are same then print
console.log(9 | 5);  // convert binary and check either one  same then print


console.log( 9 ^ 5); // ex-or


//function


function add( a, b){
    return a + b ;
    // console.log(a + b);
}

   //  add(10 , 15);
console.log(add(10,20));




// Arrow function
const add1 = ( a, b, c) => {
    console.log( a + b + c);
}
add1(10 , 20 , 30);


// map function

function double(num){
    return num * 2;
}
let arr = [11, 22, 33, 44, 55];
let result = arr.map(double);
console.log(result);

//another way
let result1 = arr.map(num => num * 2);
console.log(result1);


//exercise
function odd(number){
    return number % 2 !== 0;
}
let number = [1, 2, 3, 4, 5,9];
if(arr.filter(odd)){
    console.log("true " + arr.filter(odd) );
}
else{
    console.log("false"+ arr.filter(odd) );
}



// reduce function

let arr1 = [1, 2, 3, 4, 5];
let sum1 = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum1); 



//exercise

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const mappedNumbers = evenNumbers.map(num => num);

const sumOfEven = mappedNumbers.reduce((sum, num) => sum + num, 0);

console.log("Even Numbers:", mappedNumbers);
console.log("Sum of Even Numbers:", sumOfEven);



//deconstruct 

let bi = [1, 2, 3];
let [x, y, z] = bi;
console.log(x, y, z);


//array rest 

let bio = [1, 2, 3];
// Rest element must be the last in array destructuring. The original
// `let [xe, ... ye, ze] = bio;` is invalid and causes a SyntaxError.
// Valid patterns:
// - Collect remaining elements into `...rest` (must be last):
//     let [first, ...rest] = arr;
// - Or pick specific indices directly:
//     let third = arr[2];
let [xe, ...ye] = bio; // xe = 1, ye = [2,3]
let ze = bio[2]; // if you specifically need the third element as `ze`
console.log(xe, ye);


let bn = [1, 2, 3];
// Fix: use the previously defined `xe` and `ye` variables (or spread `bn`).
// `xen` and `yen` look like typos and would be ReferenceErrors.
let ne = [xe, ...ye, 6, 7]; // results in [1, 2, 3, 6, 7]
console.log(ne);





// Api
// Fixed fetch URL and logging. Also add a catch for errors.

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then((data) => console.log(data))
//     .catch(err => console.error('Fetch error:', err));



    // retrieve only specific data from the API response

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => { 
        const titles = data.map(post => post.title);
        console.log(titles);})
    .catch(err => console.error('Fetch error:', err));      




    // string literals

    let name = "Ammar";
    let age = 22;
    let city = "Karachi";   
    let message = `My name is ${name}, I am ${age} years old and I live in ${city}.`;
    console.log(message);