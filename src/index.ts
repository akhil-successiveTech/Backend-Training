import { subtract, add, multiply, divide } from "./lib/math";
import readlineSync from "readline-sync"
import fs from "fs"
import path from "path"

// Take input from user
const number1 = parseInt(readlineSync.question("Enter number 1: "));
const number2 = parseInt(readlineSync.question("Enter number 2: "));

// If values are not entered
if (isNaN(number1) || isNaN(number2)) {
    console.error("Please enter valid numbers.");
    process.exit(1);
}

// Defined string to enter in results
const csvRow = `${number1},${number2},${add(number1, number2)},${subtract(number1, number2)},${multiply(number1, number2)},${divide(number1, number2)}\n`;
// Defines the file path
const filePath = path.resolve(__dirname, '../../results.csv');
// Gives the boolean value
const fileExists = fs.existsSync(filePath);

// If it does not exists then it will add this string value
if (!fileExists) {
    const header = 'Number1,Number2,Addition,Subtraction,Multiplication,Division\r\n';
    fs.writeFileSync(filePath, header);
}

// Appends the results into the file
fs.appendFileSync(filePath, csvRow);
console.log(`\nResults:`);
console.log(`Addition: ${add(number1, number2)}`);
console.log(`Subtraction: ${subtract(number1, number2)}`);
console.log(`Multiplication: ${multiply(number1, number2)}`);
console.log(`Divide: ${divide(number1, number2)}`);