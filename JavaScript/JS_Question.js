// 1
// Convert names to uppercase["alice", "bob", "charlie"] → ["ALICE", "BOB", "CHARLIE"] 

let arr = ["alice", "bob", "charlie"];

// not in-place. returns stuff
arr = arr.map(e => {
    return e.toUpperCase()
});
console.log(arr);


// 2
// Get names of people older than 18
// const users = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 17 },
//   { name: "Alex", age: 32 },
//   { name: "Mia", age: 15 }];
// → ["John", "Alex"]

let users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Alex", age: 32 },
  { name: "Mia", age: 15 }];

  // chain this stuff
users = users.filter(item => item.age > 18).map(item => item.name);
console.log(users);


// 3
// Calculate total price of products in cart
// const cart = [
//   { name: "Laptop", price: 1200 },
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 80 }];
// → 1305

let cart = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 80 }];

cart = cart.reduce((acc, item) => {
    return acc + item.price
}, 0);
console.log(cart);

//4
// Get full names
// const people = [
//   { first: "John", last: "Doe" },
//   { first: "Anna", last: "Smith" }];
// → ["John Doe", "Anna Smith"]

let people = [
  { first: "John", last: "Doe" },
  { first: "Anna", last: "Smith" }];

people = people.map(item => item.first + " " + item.last);
console.log(people);

// 5
// Get expensive in-stock products names (price > 1000 and inStock)
// const products = [
//   { name: "iPhone 14", price: 1200, inStock: true },
//   { name: "MacBook", price: 1800, inStock: false },
//   { name: "AirPods", price: 250, inStock: true },
//   { name: "iPad Pro", price: 1100, inStock: true }];
// → ["iPhone 14", "iPad Pro"]

let products = [
  { name: "iPhone 14", price: 1200, inStock: true },
  { name: "MacBook", price: 1800, inStock: false },
  { name: "AirPods", price: 250, inStock: true },
  { name: "iPad Pro", price: 1100, inStock: true }];

products = products.filter(obj => obj.price > 1000 && obj.inStock).map(obj => obj.name);
console.log(products);

// 6
// Get names of students who scored above 80 and calculate their average score
// const students = [
//   { name: "Riya", score: 92 },
//   { name: "Aman", score: 78 },
//   { name: "Sneha", score: 88 },
//   { name: "Karan", score: 65 },
//   { name: "Priya", score: 95 }];→ ["Riya", "Sneha", "Priya"] and average = 91.67

let students = [
    { name: "Riya", score: 92 },
    { name: "Aman", score: 78 },
    { name: "Sneha", score: 88 },
    { name: "Karan", score: 65 },
    { name: "Priya", score: 95 }
];

let avg = (students.filter(obj => obj.score > 80).reduce((acc, obj) => {
  return acc + obj.score
}, 0)) / students.filter(obj => obj.score > 80).length;

let qualified = students.filter(obj => obj.score > 80).map(obj => obj.name);

console.log(qualified);
console.log(avg);

// 6
// Calculate total cost after applying 20% discount on all items that cost more than 1500
// const items = [
//   { name: "Smartphone", price: 32000 },
//   { name: "Charger", price: 1200 },
//   { name: "Headphones", price: 4500 },
//   { name: "Power Bank", price: 1800 }
// ];
// → totalAfterDiscount = 30640

let items = [
  { name: "Smartphone", price: 32000 },
  { name: "Charger", price: 1200 },
  { name: "Headphones", price: 4500 },
  { name: "Power Bank", price: 1800 }
];

let total = items.reduce((acc, obj) => {
  if (obj.price > 1500) {
    return acc + obj.price*0.8;
  } else {
    return acc + obj.price;
  }
}, 0);

console.log(total);

// 7
// Get full product names with brand and calculate total stock value (price × quantity)
// const products = [
//   { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
//   { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
//   { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 }
// ]; 
// → ["Samsung S23", "Apple iPhone 14", "OnePlus Nord 3"] and totalValue = 794000

products = [
  { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
  { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
  { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 }
];

total = products.reduce((acc, obj) => acc + obj.price*obj.quantity, 0);
products = products.map((obj) => obj.brand + " " + obj.model);
console.log(products);
console.log(total);

// 8
// Get names of employees who work in "Engineering" department and have salary > 1200000, then find total salary
// const employees = [
//   { name: "Vikram", department: "Engineering", salary: 1800000 },
//   { name: "Neha", department: "Marketing", salary: 950000 },
//   { name: "Arjun", department: "Engineering", salary: 1350000 },
//   { name: "Pooja", department: "Engineering", salary: 980000 }
// ];
// → ["Vikram", "Arjun"] and totalSalary = 3150000

let employees = [
  { name: "Vikram", department: "Engineering", salary: 1800000 },
  { name: "Neha", department: "Marketing", salary: 950000 },
  { name: "Arjun", department: "Engineering", salary: 1350000 },
  { name: "Pooja", department: "Engineering", salary: 980000 }
];

employees = employees.filter(obj => obj.salary > 1200000 && obj.department == 'Engineering');
total = employees.reduce((acc, item) => acc + item.salary, 0);
employees = employees.map(x => x.name);
console.log(employees);
console.log(total);

// 9
// Get titles of completed high-priority tasks and create one comma-separated string
// const tasks = [
//   { title: "Database Migration", priority: "high", completed: true },
//   { title: "UI Redesign", priority: "medium", completed: true },
//   { title: "API Testing", priority: "high", completed: false },
//   { title: "Security Audit", priority: "high", completed: true }
// ];
// → "Database Migration, Security Audit"


let tasks = [
  { title: "Database Migration", priority: "high", completed: true },
  { title: "UI Redesign", priority: "medium", completed: true },
  { title: "API Testing", priority: "high", completed: false },
  { title: "Security Audit", priority: "high", completed: true }
];

let res = tasks.filter(x => x.priority == 'high' && x.completed).map(x => x.title).join(", ");
console.log(res);

// 10
// Filter products that are in stock, apply 15% discount, then calculate final cart total
// const cart = [
//   { name: "Monitor", price: 14500, inStock: true },
//   { name: "Keyboard", price: 3200, inStock: false },
//   { name: "Mouse", price: 1800, inStock: true },
//   { name: "Webcam", price: 4200, inStock: true }
// ];
// → totalAfterDiscount = 19240

cart = [
  { name: "Monitor", price: 14500, inStock: true },
  { name: "Keyboard", price: 3200, inStock: false },
  { name: "Mouse", price: 1800, inStock: true },
  { name: "Webcam", price: 4200, inStock: true }
];

res = cart.filter(x => x.inStock).reduce((acc, curr) => acc + (0.85*curr.price), 0);
console.log(res);

// 11
// Get names (in uppercase) of users who are active and above 21 years old, then count them
// const users = [
//   { name: "rahul", age: 19, active: true },
//   { name: "simran", age: 24, active: true },
//   { name: "aditya", age: 32, active: false },
//   { name: "kavya", age: 22, active: true }
// ];
// → ["SIMRAN", "KAVYA"] and count = 2

users = [
  { name: "rahul", age: 19, active: true },
  { name: "simran", age: 24, active: true },
  { name: "aditya", age: 32, active: false },
  { name: "kavya", age: 22, active: true }
];

res = users.filter(x => x.age > 21 && x.active).map(x => x.name);
console.log(res);
res = users.filter(x => x.age > 21 && x.active).reduce((acc, curr) => acc + 1, 0);
console.log(res);

// 12
// Get names of winning players (score > 150) with their score in format "Name (score)", and calculate total winning score
// const players = [
//   { name: "Rohit", score: 168 },
//   { name: "Virat", score: 142 },
//   { name: "Shubman", score: 185 },
//   { name: "Ishan", score: 134 }
// ];
// → ["Rohit (168)", "Shubman (185)"] and totalWinningScore = 353

let players = [
  { name: "Rohit", score: 168 },
  { name: "Virat", score: 142 },
  { name: "Shubman", score: 185 },
  { name: "Ishan", score: 134 }
];

res = players.filter(x => x.score > 150).map(x => `${x.name} (${x.score})`);
console.log(res);
res = players.filter(x => x.score > 150).reduce((acc, cur) => acc + cur.score, 0);
console.log(res);