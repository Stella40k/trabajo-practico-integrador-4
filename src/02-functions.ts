// funciones con tipado
console.log("Funciones con tipado\n");
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const initialStock: number = 50;
const stockAdjustment: number = 15;
const newStock: number = updateStock(initialStock, stockAdjustment);

console.log(`Stock inicial: ${initialStock}`);
console.log(`Ajuste: ${stockAdjustment}`);
console.log(`Stock nuevo: ${newStock}`);
console.log(`Tipo de función: ${typeof updateStock}`);
console.log(`Tipo de retorno: ${typeof newStock}`);

console.log("=====================");
