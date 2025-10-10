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