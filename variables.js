//To print anything to the console 
console.log("Hello World!");

//Assigning a value to a variable
x=18;
console.log(x);

//Variable declaration is not necessary in JavaScript
// but it is recommended to use var, let, or const for better code readability and maintainability

var N = 5; //used in older JS but still in use, scope is function (block of code executing some action)
console.log(N);
var N = 10; // This is allowed because var allows redeclaration of the same variable
console.log(N); 
N = 15; // This is also allowed because var allows reassignment of the variable
console.log(N);
//var allows both redeclaration and reassignment of the variable, but it is generally recommended to use let or const for better code readability and maintainability

let a = 23; //used in modern JS, scope is within the block
console.log(a);
a= 42; // This is allowed because let allows reassignment of the variable
console.log(a);
//let a = 50; // This will throw an error because a has already been declared in the same scope
//let allows reassignment of the variable but does not allow redeclaration of the same variable in the same scope

const pi = 3.14; //used for constants, value cannot be changed
console.log(pi);
//pi = 3.14159; // This will throw an error because pi is a constant
//reassignment or redeclaration of a constant variable is not allowed

//need to use var, let or const inside a block to declare a variable, otherwise it will be treated as a global variable
//once we declare a varible using var, let or const, we cannot assign another variable without using var, let or const, otherwise it will throw an error


//Variable naming conventions
//1. Variable names should be descriptive and meaningful
//2. Variable names should start with a letter, underscore (_), or dollar sign ($)
//3. Variable names cannot start with a number
//4. Variable names cannot contain spaces, use camelCase instead (e.g., myVariable)
//5. Avoid using reserved keywords as variable names (e.g., var, let, const, if, else, etc.)


//Datatypes in JavaScript
//1. Number: Represents both integer and floating-point numbers
let num = 42;   
let floatNum = 3.14;
//2. String: Represents a sequence of characters enclosed in single or double quotes
let str1 = "Hello, World!"; 
let str2 = 'JavaScript is fun!';
//3. Boolean: Represents a logical entity that can have two values: true or false
let isJavaScriptFun = true; 
let isRaining = false;
//4. Undefined: Represents a variable that has been declared but not assigned a value
let undefinedVar;   

//5. Null: Represents the intentional absence of any object value
let nullVar = null; 
//6. Symbol: Represents a unique and immutable primitive value, often used as object property keys
let sym1 = Symbol('sym1'); 
let sym2 = Symbol('sym2'); 
console.log(sym1 === sym2); // This will log false because each symbol is unique    
//7. Object: Represents a collection of properties and methods
let person = {
    name: "Alice",  
    age: 30
};      
console.log(person.name); // Accessing object property using dot notation
console.log(person['age']); // Accessing object property using bracket notation

//typeof operator is used to determine the type of a variable
console.log(typeof num);    
console.log(typeof str1);
console.log(typeof isJavaScriptFun);
console.log(typeof undefinedVar);
console.log(typeof nullVar);    
console.log(typeof sym1);
console.log(typeof person); 

//primitive datatypes: number, string, boolean, undefined, null, symbol
//non-primitive datatypes: object (arrays, functions, dates, maps, sets, etc.)
//primitive stores the actual value, while non-primitive stores a reference to the value in memory

//objects are key-value pairs, where the key is a string (or symbol) and the value can be of any datatype
//keys has to be unique within an object, but values can be duplicated
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
//Jason is a common format for representing objects as strings, often used for data exchange between a server and a web application
let carJSON = JSON.stringify(car); // Convert the car object to a JSON string
console.log(carJSON);
//JSON object syntax
let jsonObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};
//json objects can have duplicated values but keys should be unique within the same object


//arrays are a special type of object that store ordered collections of values, accessed by index
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // Accessing the first element of the array
console.log(arr.length); // Getting the length of the array
