//operators in JavaScript are used to perform operations on variables and values. They can be categorized into several types:
//operands are the values or variables on which the operator performs the operation. For example, in the expression a + b, a and b are operands, and + is the operator.
//1. Arithmetic Operators: Used to perform mathematical operations  
let a = 10;
let b = 5;
console.log(a + b); // Addition, Output: 15
console.log(a - b); // Subtraction, Output: 5
console.log(a * b); // Multiplication, Output: 50   
console.log(a / b); // Division, Output: 2
console.log(a % b); // Modulus, Output: 0 (remainder of a divided by b)
console.log(a ** b); // Exponentiation, Output: 100000 (a raised to the power of b) 
//2. Assignment Operators: Used to assign values to variables
let x = 10; // Assignment operator, assigns the value 10 to variable x
x += 5; // Addition assignment operator, equivalent to x = x + 5, Output: 15
x -= 3; // Subtraction assignment operator, equivalent to x = x - 3, Output: 12
x *= 2; // Multiplication assignment operator, equivalent to x = x * 2, Output: 24  
x /= 4; // Division assignment operator, equivalent to x = x / 4, Output: 6
x %= 5; // Modulus assignment operator, equivalent to x = x % 5, Output: 1
x **= 3; // Exponentiation assignment operator, equivalent to x = x ** 3, Output: 1 (1 raised to the power of 3 is 1)
//3. Comparison Operators: Used to compare two values and return a boolean result
console.log(a == b); // Equality operator, checks if a is equal to b, Output: false
console.log(a === b); // Strict equality operator, checks if a is equal to b and of the same type, Output: false
console.log(a != b); // Inequality operator, checks if a is not equal to b, Output: true
console.log(a !== b); // Strict inequality operator, checks if a is not equal to b or not of the same type, Output: true
console.log(a > b); // Greater than operator, checks if a is greater than b, Output: true
console.log(a < b); // Less than operator, checks if a is less than b, Output: false
console.log(a >= b); // Greater than or equal to operator, checks if a is greater than or equal to b, Output: true
console.log(a <= b); // Less than or equal to operator, checks if a is less than or equal to b, Output: false
//4. Logical Operators: Used to combine multiple boolean expressions and return a boolean result
let isAdult = true;
let hasPermission = false;
console.log(isAdult && hasPermission); // Logical AND operator, returns true if both operands are true, Output: false
console.log(isAdult || hasPermission); // Logical OR operator, returns true if at least one operand is true, Output: true   
console.log(!isAdult); // Logical NOT operator, returns true if the operand is false, Output: false
//5. Ternary Operator: A shorthand for an if-else statement, returns a value based on a condition
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote."; // Ternary operator, checks if age is greater than or equal to 18, Output: "Yes, you can vote."
console.log(canVote);


