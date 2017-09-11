class Company {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

const kpTraining = new Company('Khoa Pham Training', '92 LTR');

class Person {
    constructor(name, age, company) {
        this.name = name;
        this.age = age;
        this.company = company;
    }

    sayHello() {
        console.log(`Xin chao toi la ${this.name}, ${this.age} tuoi.`);
    }
}

const a = new Person('Khoa', 20, kpTraining);
console.log(a.company.address);