
class Product {
    name;
    price;
    description;
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

}

class ProductList {
    productList = [];
    constructor() {
        this.productList = [
            new Product("Product 1", 100, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."),
            new Product("Product 2", 200, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."),
            new Product("Product 3", 300, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."),
        ];
    }

    render() {
        const productContainer = document.getElementById("app");

        const productCard = document.createElement('ul');
        this.productList.forEach((product) => {

            const productItem = document.createElement('li');
            productItem.innerHTML = product.name;
            productCard.appendChild(productItem);

        });

        productContainer.appendChild(productCard);


        const buttonElem = document.createElement('button');
        buttonElem.innerHTML = "Submit 2";
        buttonElem.addEventListener('click', () => {
            alert("submit");
        });

        productContainer.appendChild(buttonElem);
    }

    // render();
}


new ProductList().render();
// let productList =

//     let productList1 = [
//         {
//             name: "Product 1",
//             price: 100,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         },
//         {
//             name: "Product 2",
//             price: 200,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         },
//         {
//             name: "Product 3",
//             price: 300,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         }
//     ];

// function render() {
//     const productContainer = document.getElementById("app");

//     const productCard = document.createElement('ul');
//     productList.forEach((product) => {

//         const productItem = document.createElement('li');
//         productItem.innerHTML = product.name;
//         productCard.appendChild(productItem);

//     });

//     productContainer.appendChild(productCard);
// }

// render();

function submit() {
    alert("submit")
}