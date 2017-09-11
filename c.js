// phuong thuc
function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function() {
        // console.log('Xin chao, toi la ' + this.name + ', ' + this.age + ' tuoi');
        console.log(`Xin chao toi la ${this.name}, ${this.age} tuoi.`);
    }
}

const person = new Person('Khoa', 20);
const person2 = new Person('Teo', 10);

person.sayHello();
person2.sayHello();
