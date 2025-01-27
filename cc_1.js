let employeeName = "John Doe";
const employeeID = 12345;
var isActive = true;

console.log(employeeName, typeof employeeName);
console.log(employeeID, typeof employeeID);
console.log(isActive, typeof isActive);

let productName = "Laptop";
const productPrice = 899.99;
var isAvailable = true;

console.log(productName, typeof productName);
console.log(productPrice, typeof productPrice);
console.log(isAvailable, typeof isAvailable);

let accountBalance = 1000.50;

accountBalance += 200; // Deposit
accountBalance -= 50;  // Withdrawal
accountBalance *= 1.05; // Interest
accountBalance /= 2;    // Split balance

console.log(accountBalance);

let customerName = "Alice";
let welcomeMessage = "Welcome, " + customerName + "!";
console.log(welcomeMessage);

let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

