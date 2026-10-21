const book = {
    title: "Мастер и Маргарита",
    author: "Булгаков М.А.",
    year: "1967 г.",
    pages: "480 стр.",
    available: true,
    info() {
        return `<<${this.title}>>, ${this.author}, ${this.year}, ${this.pages}`;
    }
};
console.log("1.Книга:", book.info());

const { title, author, rating = 0} = book;
console.log("2.Извлечение:", {title, author, rating});

const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
];
const passedNames = students.filter(s => s.passed).map(s => s.name);
const topStudent = students.find(s => s.grade > 4.5);
const groupAvgGrade = (students.reduce((acc, s) => acc + s.grade, 0) / students.length).toFixed(2);
console.log("3.Сдали:", passedNames);
console.log("С оценкой > 4.5:", topStudent);
console.log("Средний балл группы:", groupAvgGrade);

function mergeUsers(user1, user2) {
    return {...user1, ...user2};
}
const u1 = { name: "Иван", age: 20, city: "Казань" };
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" };
console.log("4.Объединенние:", mergeUsers(u1, u2));

function countByField(arr, field) {
    return arr.reduce((acc, item) => {
        const key = item[field];
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
}
console.log("5.Принятие:", countByField(students, "passed"));