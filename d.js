// function Person(ten, tuoi) {
//     this.name = ten;
//     this.age = tuoi;
//     this.sayHello = function() {
//         // console.log('Xin chao, toi la ' + this.name + ', ' + this.age + ' tuoi');
//         console.log(`Xin chao toi la ${this.name}, ${this.age} tuoi.`);
//     }
// }

class Person {
    constructor(name, age = 10) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Xin chao toi la ${this.name}, ${this.age} tuoi.`);
    }
}

const a = new Person('Khoa');
a.sayHello();