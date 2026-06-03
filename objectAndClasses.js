class student {
    constructor(name, age) {
    this.name = name;
    this.age = age;
   }
    display() {
    console.log(this.name + " " + this.age);
   }
}
let student1 = new student("Anuja", 22);
student1.display();
console.log(student1.name);
console.log(student1.age);