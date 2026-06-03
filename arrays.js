let myArray = [2, 6, 9, 12, 15]; // This will create an array with the specified elements
console.log(myArray); // Output: [2, 6, 9, 12, 15]
console.log(typeof myArray); // Output: object (arrays are a type of object in JavaScript)

//indexing starts with 0
console.log(myArray[0]); //  (accessing the first element of the array)
console.log(myArray[2]); // (accessing the third element of the array)

//length of an array 
console.log(myArray.length); // (getting the length of the array)


//Creating an array of JSON objects
let myNewArray = [
    { id: 1, name: "Alice" , age: 30},
    { id: 2, name: "Bob", age: 33 },
    { id: 3, name: "Charlie", age: 36 }
];
console.log(myNewArray);
console.log(myNewArray[0].name); // Accessing the name property of the first object in the array
console.log(myNewArray[1]['age']); // Accessing the age property of the second object in the array using bracket notation



//Arrays can hold elements of different data types
let mixedArray = [1, "Hello", true, null, undefined, { name: "Alice" }, [1, 2, 3]];
console.log(mixedArray);

//any data within a square bracket is considered an array element, even if it is not a valid data type
let invalidArray = [1, "Hello", true, null, undefined, { name: "Alice" }, [1, 2, 3], , ,];
console.log(invalidArray); // This will log the array with empty slots for the missing elements 

let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]
console.log(typeof fruits); // Output: object (arrays are a type of object in JavaScript)
console.log(fruits[0]); // Accessing the first element of the array
console.log(fruits.length); // Getting the length of the array


//Adding an element to the end of the array using push() method
fruits.push("date");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]   
//Removing the last element of the array using pop() method
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "cherry"]
//Adding an element to the beginning of the array using unshift() method
fruits.unshift("avocado");      
console.log(fruits); // Output: ["avocado", "apple", "banana", "cherry"]
//Removing the first element of the array using shift() method
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "cherry"]

fruits.splice(1, 2); // This will remove 2 elements starting from index 1 (banana and cherry)
console.log(fruits); // Output: ["apple"] (banana and cherry have been removed from the array)

//To check if a value is available in an array, we can use the includes() method
console.log(fruits.includes("apple")); // This will return true because "apple" is in the array
console.log(fruits.includes("banana")); // This will return false because "banana" has been removed from the array


//Arrays can have multiple data types, including other arrays and objects
let complexArray = [
    1,
    "Hello",
    true,
    null,
    undefined,
    { name: "Alice", age: 30 },
    [1, 2, 3]
];
console.log(complexArray);


//Functions are also a type of object in JavaScript, and they can be stored in arrays as well
//function is a block of code designed to perform a particular task, and it can be defined using the function keyword or as an arrow function