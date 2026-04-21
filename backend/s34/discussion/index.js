function Laptop(params = { name: "defaultName" }) {
    for (let p in params) {
        this[p] = params[p];
    }
}

const laptop1 = new Laptop({ name: "hello" }); // Object { name: "hello" }
const laptop2 = new Laptop({ manufactureDate: "Jan. 1, 2026" }); // Object { manufactureDate: "Jan. 1, 2026" }

laptop1.brand = "Toshiba";
console.log(laptop1);
console.log(laptop2);

Laptop.prototype.brand = "ASUS";
const laptop3 = new Laptop(laptop1);
console.log(laptop3);
console.log(laptop1 == laptop3);
