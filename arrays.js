const grades = [4, 5, 3, 5, 2, 4, 5, 3]; 
const sum = grades.reduce((acc, val) => acc + val, 0); 
const average = sum / grades.length; 
console.log("1.Средний балл:", average.toFixed(2));

const goodGrades = grades.filter(g => g > 3); 
const formattedGrades = goodGrades.map(g => `Оценка: ${g}`); 
console.log("2.Оценки:", formattedGrades);

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]; 
console.log("3.Фрукты:", [...fruits].sort().join(", "));

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
];
const cheapProducts = products.filter(p => p.price < 10000); 
console.log("4.Товары:",cheapProducts);
const productNames = products.map(p => p.name); 
console.log(productNames);
const totalCost = products.reduce((acc, p) => acc + p.price, 0); 
console.log(totalCost);

const numberList = [12, 45, 7, 33, 18];
console.log("5.Больше 40:",numberList);
console.log("Больше 5:",numberList);