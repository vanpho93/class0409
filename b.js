function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
}

const person = new Person('Khoa', 20);
const teo = new Person('Teo', 10);

console.log(person);
console.log(person.name);
console.log(person.age);
person.age = 23;
console.log(person);
