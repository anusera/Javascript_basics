//Encapsulation - hiding of data

class AtmMachine {
    #balance = 10000; //global variable
    //constructor is a special method that is called when an object is created from a class. It is used to initialize the properties of the object.
   constructor(amount)
   {
    this.amount = amount;
   }
 deposit()
 {
    return this.#balance+this.amount;
 }
 getBalance()
 {
  let  total = this.deposit();
    console.log("Total balance is: " + total);
 }

 getdeposit()
 {
    console.log("Deposit amount is: " + this.deposit());
 }
    }

atmcepz = new AtmMachine(10000);
atmcepz.getBalance();
atmcepz.amount = 5000; //we can change the amount but we cannot change the balance as it is a private variable
atmcepz.getBalance();
atmcepz.getdeposit();