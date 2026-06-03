// promises are a way to handle asynchronous operations in JavaScript. 
// They represent a value that may not be available yet, but will be resolved at some point in the future.
//A promise has three states: pending, fulfilled, and rejected.
//pending means that the promise is still waiting for the asynchronous operation to complete.
//fulfilled means that the asynchronous operation completed successfully and the promise has a value.
//rejected means that the asynchronous operation failed and the promise has a reason for the failure.   
// To create a promise, you can use the Promise constructor, which takes a function as an argument.
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation goes here
    const success = true; // Simulating success or failure          
    if (success) {
        resolve("Operation completed successfully!"); // Resolve the promise with a value
    } else {
        reject("Operation failed!"); // Reject the promise with a reason
    }
});
// To consume a promise, you can use the then() method to handle the fulfilled state and the catch() method to handle the rejected state.
myPromise
    .then((result) => {

        console.log(result); // Output: Operation completed successfully!
    })
    .catch((error) => {
        console.error(error); // Output: Operation failed!
    });     

    