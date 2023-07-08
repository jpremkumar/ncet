
class Product {
    // name: string;
    // price: number;
    // description: string;
    constructor(public name: string, public price: number, public description: string) {
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


const a: string = "Hello";
a = "test";

const b: number = 1;

// types 

type ProductType = {
    name: string,
    description?: string,
}

// const product: ProductType = { name: "Product 1", description: '' };
const product: ProductType = { name: "Product 1" };

interface ProductInterface {
    name: string,
    description?: string,
}

interface ProductDiscountInterface {
    discount(): number;
}

const productContainer: ProductInterface = { name: "Product 1" };

class User {
    constructor(public name: string, public email: string) {

    }
}

class Admin extends User implements UserInterface, ProductDiscountInterface {
    discount(): number {
        throw new Error("Method not implemented.");
    }
    admin(): boolean {
        return true;
    }
}

new Admin().admin();

class Customer implements UserInterface {
    admin(): boolean {
        return false;
    }
}

interface UserInterface {
    admin(): boolean;
}

// Generic <T>

function log<T>(value: T) {
    console.log(value);
}

log<string>('Hello');
log<boolean>(true);

