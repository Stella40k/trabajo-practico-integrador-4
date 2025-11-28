// 01-basics.ts - Tipos fundamentales, Unión e Interfaz

// Tipos fundamentales
console.log("Tipos fundamentales");

let productName: string = "Queso Roquefort";
let productPrice: number = 1250;
console.log(`Producto: ${productName}, Precio: $${productPrice}`);

console.log("--------------------");

// Tipo Union (Union Type)
console.log("Tipo Union (Union Type)");

let productId: string | number;
productId = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
console.log(productId, typeof productId);
productId = 987654321;
console.log(productId, typeof productId);

console.log("--------------------");

// Interfaz Básica
console.log("Interfaz Básica");

interface Product {
  name: string;
  price: number;
  inStock?: boolean; // propiedad opcional para variar respecto del compañero
}

const myProduct: Product = {
  name: "Queso fresco",
  price: 760,
  inStock: true,
};

console.log("myProduct:", myProduct);

console.log("==========================");
