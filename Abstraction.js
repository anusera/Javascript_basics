//Abstraction is the process of hiding the implementation details and showing only functionality to the user.
class AtmMachine {
    balance = 10000; //global variable
    //constructor is a special method that is called when an object is created from a class. It is used to initialize the properties of the object.
   constructor(amount)
   {
    this.amount = amount;
   }
 #deposit()
 {
    return this.balance+this.amount;
 }
 getBalance()
 {
  let  total = this.#deposit();
    console.log("Total balance is: " + total);
 }

 getdeposit()
 {
    console.log("Deposit amount is: " + this.#deposit());
 }
    }

const atmcepz = new AtmMachine(10000);
atmcepz.getBalance();

atmcepz.getdeposit(); //we can access the deposit method through the getdeposit method as it is a public method

//visibility modes
//public: can be accessed from anywhere
//private: can only be accessed within the class
//protected: can be accessed within the class and its subclasses
//In JavaScript, there are no protected members. However, we can use the convention of prefixing a variable or method with an underscore (_) to indicate that it is intended to be protected and should not be accessed from outside the class.
//default: can be accessed within the class and its subclasses, but not from outside the class. In JavaScript, there is no default visibility mode. If a variable or method is not declared as public, private, or protected, it is considered to be public by default.
// # is used to declare a private variable or method in a class. It can only be accessed within the class and cannot be accessed from outside the class.

//how many visibility modes are there in JavaScript?
//There are three visibility modes in JavaScript: public, private, and protected. However, JavaScript does not have built-in support for protected members, so we can use the convention of prefixing a variable or method with an underscore (_) to indicate that it is intended to be protected.  