//non primitive datatypes always retuns an object 
const studentDetails = {
    id : 1,
    name : "Anu",
    age : 42
}
console.log(studentDetails);
console.log(typeof studentDetails); 

console.log(studentDetails.name); // Accessing object property using dot notation
console.log(studentDetails['age']); // Accessing object property using bracket notation     

studentDetails.grade = "A"; // Adding a new property to the object
console.log(studentDetails);

studentDetails.age = 43; // Modifying an existing property of the object
console.log(studentDetails);