//tpos literales
console.log("Tipos literales");

type OrderStatus = "pending" | "shipped" | "delivered";
let orderStatus: OrderStatus;
orderStatus = "shipped";
console.log(`Estado del pedido: ${orderStatus}`);

console.log("----------------");

//tipo enum
console.log("Enums\n");

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

logMessage(LogLevel.Info, "Sistema iniciado correctamente");
logMessage(LogLevel.Warning, "Temperatura alta detectada");
logMessage(LogLevel.Error, "Conexión perdida");
