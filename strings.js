const sentence = " javascript — это просто! "
const trimmed = sentence.trim();
const formattedSentence = trimmed[0].toUpperCase() + trimmed.slice(1);
console.log("1.", formattedSentence);

const lastName = "Иванов";
const firstName = "Иван";
const group = "21 иср";
const avgGrade = "4.75";
const studentInfo = `Студент ${lastName} ${firstName}, группа ${group}, средний балл: ${avgGrade}`;
console.log("2.", studentInfo);

const dateStr = "2025-03-15";
const [year, month, day] = dateStr.split("-");
const formattedDate = `${day}.${month}.${year}`;
console.log("3.", formattedDate);

const jobTitle = "Node.js разработчик";
const startsWithNode = jobTitle.startsWith("Node");
const endsWithDev = jobTitle.endsWith("разработчик");
console.log(`4. Начинается на 'Node': ${startsWithNode}`); 
console.log(`Заканчивается на 'разработчик': ${endsWithDev}`);

const numbersList = [12, 45, 7, 33, 18];
console.log("5. Больше 40 (some):", numbersList.some(n => n > 40));
console.log("Больше 5 (every):", numbersList.every(n => n >5));