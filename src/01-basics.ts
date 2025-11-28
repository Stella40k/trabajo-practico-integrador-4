//tipos fundamentales
console.log("Tipos fundamentales");

let productName: string = "Mermelada artesanal";
let productPrice: number = 450;
console.log(`Producto: ${productName}, Precio: ${productPrice}`);

console.log("--------------------");

//tpo union (Union Type)
console.log("Tipo Union (Union Type)");

let productId: string | number;
productId = "XYZ-2025-0001";
console.log(productId, typeof productId);
productId = 2025;
console.log(productId, typeof productId);

console.log("--------------------");

//interfaz basica
console.log("Interfaz Básica");

interface Product {
  name: string;
  price: number;
  description?: string; // campo op para diferenciar
}

const myProduct: Product = {
  name: "Mermelada de frambuesa",
  price: 520,
  description: "Hecha en casa",
};

console.log("myProduct:", myProduct);

console.log("==========================");
