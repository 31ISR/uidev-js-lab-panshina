const temperature = 36.6789;
console.log("1.Округленная температура:", temperature.toFixed(1));

const a = 17;
const b = 5;
const intDivision = Math.floor(a / b);
const remainder = a % b;
console.log(`2.Целочисленное деление: ${intDivision}, Остаток: ${remainder}`);

const randomNum = Math.floor(Math.random()* 10)+1; 
console.log(`3.Генерирование: ${randomNum}`);

const check1 = isNaN("100" / 5); 
const check2 = isNaN("сто" / 5); 
console.log("4.isNaN('100' / 5):", check1);
console.log("   isNaN('сто' / 5):", check2);

const numbers = [14, -3, 77, 0, -100, 42];
const maxVal = Math.max(...numbers);
const minVal = Math.min(...numbers);
console.log(`5.Максимум: ${maxVal}, Минимум: ${minVal}`);