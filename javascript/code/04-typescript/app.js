"use strict";
class Product {
    // name: string;
    // price: number;
    // description: string;
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        // this.name = name;
        // this.price = price;
        // this.description = description;
    }
    discount() {
        return this.price * 0.8;
    }
}
new Product("Product 1", 100, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.");
// pritive types
// string
// number
// boolean
// null
// undefined
const a = "Hello";
a = "test";
const b = 1;
// const product: ProductType = { name: "Product 1", description: '' };
const product = { name: "Product 1" };
const productContainer = { name: "Product 1" };
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class Admin extends User {
    discount() {
        throw new Error("Method not implemented.");
    }
    admin() {
        return true;
    }
}
new Admin().admin();
class Customer {
    admin() {
        return false;
    }
}
// Generic <T>
function log(value) {
    console.log(value);
}
log('Hello');
log(true);
