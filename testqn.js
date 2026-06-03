//enter marks for 5 subjects.
//Calculate the total marks.
//Calculate the average.
//Display the grade:
//A: 90 and above
//B: 80–89
//C: 70–79
//D: 60–69
//F: Below 60
//Display all results in the console

let mark1 = 85;
let mark2 = 92;
let mark3 = 78;
let mark4 = 88;
let mark5 = 95; 
let total = mark1 + mark2 + mark3 + mark4 + mark5;
console.log("Total Marks: " + total);
let average = total / 5;
console.log("Average Marks: " + average);
let grade;
if (average >= 90) {
    grade = 'A';
} else if (average >= 80) {
    grade = 'B';
} else if (average >= 70) {
    grade = 'C';
} else if (average >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log("Grade: " + grade);