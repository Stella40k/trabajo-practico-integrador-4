_Glosario:_

Esta sección describe los principales conceptos de TypeScript utilizados en el proyecto.

1. Tipos Basicos (Primitives)

Son los tipos fundamentales que definen el tipo de dato que puede contener una variable.

| Concepto                | Descripcion                                                                              | Ejemplo                                 |
| :---------------------- | :--------------------------------------------------------------------------------------- | :-------------------------------------- |
| **Tipos Fundamentales** | Los tipos mas comunes de TypeScript: `string`, `number`, `boolean`, `null`, `undefined`. | `let productName: string = "RTX 5090";` |

---

2. Flexibilidad y Restriccion de Tipos

Estos conceptos permiten flexibilidad a una variable (Union Type) o restringir sus valores a opciones muy especificas (Literal Types).

| Concepto                    | Descripci0n                                                                             | Ejemplo                                                                                  |
| :-------------------------- | :-------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | --------------------------- |
| **Tipo union (Union Type)** | Permite que una variable acepte **mas de un tipo de dato**, usando el operador `        | `.                                                                                       | `let id: string \| number;` |
| **Tipos Literales**         | Restringen el valor de una variable a un **conjunto especifico de constantes exactas**. | `type orderStatus = "pending" \| "shipped";`<br>`const status: orderStatus = "pending";` |

---

3. Estructuras de Datos (Interfaces y Enums)

Herramientas clave para definir la forma de los objetos complejos y gestionar colecciones de constantes relacionadas.

| Concepto       | Descripcion                                                                                                                            | Ejemplo       |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| **Interfaces** | Se utiliza para definir la **estructura (propiedades y tipos)** que debe tener un objeto. El `?` indica que una propiedad es opcional. | ```typescript |

interface User {
id: number;
username: string;
email?: string; // Opcional
}
const newUser: User = { id: 1, username: "Usuario" };

````|
| **Enums** | (Enumeraciones) Son conjuntos de **constantes con nombre** que facilitan trabajar con valores relacionados y autocompletar. | ```typescript
enum LogLevel { Info, Warning, Error }
logMessage(LogLevel.Info, "Mensaje");
``` |

---

4. Funciones Tipadas

Especifica los tipos de datos que los parametros de una funcion deben aceptar y el tipo de dato que la funcion debe retornar.

| Concepto | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **Funciones** | Se especifica el tipo de los **parametros** y el **valor de retorno** (el tipo después de los parentesiss). | `function sum(a: number, b: number): number { return a + b; }` |
| **Retorno `void`** | Indica que la funcin **no devuelve explicitamente ningun valor** (solo realiza una accion, como imprimir en consola). | `function log(msg: string): void { console.log(msg); }` |


_Comandos:_
npm run basic_types    # Ejecuta 01-basics.ts
npm run functions      # Ejecuta 02-functions.ts
npm run enums          # Ejecuta 03-enums.ts
npm run build          # Compila a dist/
npm run start          # Ejecuta el JS compilado
npm run dev            # Watch mode
````
