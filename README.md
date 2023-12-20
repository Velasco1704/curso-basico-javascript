# Curso Básico de Javascript

## Qué es JavaScript y para qué sirve?

**¿Cómo nace Javascript?** Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros. **¿Qué es Javascript?** Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico. **Débilmente tipado** Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc).

```js
4 + "7" = 47
4 * "7" = 28
2 + true = 3
false - 3 = -3
```

**Dinámico** Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa. **¿Realmente es Javascript un lenguaje interpretado?** Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador **Javascript es Basckwards** Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está **Babel** que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

## Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis

### Valores Primitivos

```js
//strings
typeof "Hola";
//numbers
typeof 2;
//booleans
typeof true;
typeof false;
//undefined
typeof undefined;
//null
typeof null;
```

### Valores tipo objeto

```js
//object
typeof [1, 2, 3];
typeof { nombre: "Daniel" };
```

### Variables

En JavaScript, las variables se declaran utilizando las palabras clave var, let o const. Cada una de estas palabras clave tiene un comportamiento diferente:

- **var:** Esta es la forma más antigua de declarar variables. No es muy utilizada en el código moderno de JavaScript porque su alcance es la función completa, lo que puede llevar a errores inesperados.

```js
var PI = 3.1415;
```

- **let**: Esta palabra clave fue introducida en ES6 (la versión de JavaScript lanzada en 2015) y es ahora la forma más común de declarar una variable. A diferencia de var, let tiene un alcance de bloque, lo que significa que la variable solo existe dentro del bloque de código en el que se declaró.

```js
let animales = ["gato", "perro", "loro"];
```

- **const**: Esta palabra clave también fue introducida en ES6 y se utiliza para declarar constantes, es decir, variables cuyo valor no se puede cambiar una vez que se ha asignado.

```js
const nombre = {
  nombre: "Daniel",
  apellido: "Velasco",
  edad = 18
};
```

### Funciones

Las funciones en JavaScript son bloques de código que se definen para realizar una tarea específica. Se pueden invocar (llamar) en cualquier momento y en cualquier lugar de tu código, lo que permite reutilizar el código y mantenerlo organizado y legible.

Las funciones en JavaScript se pueden clasificar en dos tipos principales: funciones declarativas y funciones de expresión.

- **Funciones Declarativas**: Las funciones declarativas, también conocidas como declaraciones de **funciones**, se definen utilizando la palabra clave function seguida del nombre de la función, una lista de parámetros entre paréntesis **( )**, y el cuerpo de la función, que es el código que se ejecutará cuando se llame a la función, encerrado entre llaves **{ }**.

```js
function saludo(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludo("Daniel")); // Imprime: Hola, Daniel
```

- **Funciones de Expresión**: Las funciones de expresión, también conocidas como expresiones de funciones, son funciones que se definen como parte de una expresión. Se definen utilizando la palabra clave **function** seguida de una lista de parámetros entre paréntesis **( )**, y el cuerpo de la función, encerrado entre llaves **{ }**. La función se asigna a una variable y se puede llamar utilizando el nombre de esa variable.

```js
var saludo = function (nombre) {
  return `Hola, ${nombre}`;
};
console.log(saludo("Daniel")); // Imprime: Hola, Daniel
```

Es importante mencionar que también existen las funciones flecha, introducidas en ES6, que proporcionan una sintaxis más corta y manejan el valor de **this** de manera diferente. Aquí tienes un ejemplo de una función flecha:

```js
const saludo = (nombre) => {
  return `Hola, ${nombre}`;
};
console.log(saludo("Daniel")); // Imprime: Hola, Daniel
```

## Scope

El scope, o ámbito, en JavaScript se refiere al contexto en el que las variables y las funciones son accesibles en tu código. Hay dos tipos principales de scope en JavaScript: global y local.

- **Scope Global**: Una variable que se declara fuera de una función o simplemente se declara sin utilizar las palabras clave **var, let o const**, tiene un scope global. Esto significa que puede ser accesible desde cualquier parte de tu código, tanto dentro como fuera de las funciones.

```js
var variableGlobal = "Soy global";

function prueba() {
  console.log(variableGlobal); // Imprime: Soy global
}

prueba();
console.log(variableGlobal); // Imprime: Soy global
```

- **Scope Local**:Una variable que se declara dentro de una función tiene un scope local, lo que significa que solo puede ser accesible dentro de esa función. Esto también se aplica a los parámetros de las funciones, que también tienen un scope local.

```js
function prueba() {
  var variableLocal = "Soy local";
  console.log(variableLocal); // Imprime: Soy local
}

prueba();
console.log(variableLocal); // Error: variableLocal is not defined
```

En este ejemplo, intentar acceder a **variableLocal** fuera de la función produce un error, porque **variableLocal** solo existe dentro del scope de la función **prueba**.

## Hoisting

El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven al principio de su scope durante la fase de compilación, antes de que se ejecute el código. Esto significa que puedes utilizar una variable o llamar a una función antes de que se haya declarado en tu código.

Es importante tener en cuenta que solo la declaración se mueve al principio, no la asignación o inicialización de la variable. Por lo tanto, si intentas acceder a una variable antes de que se declare, obtendrás un valor **undefined**.

```js
console.log(miVariable); // Imprime: undefined
var miVariable = "Hola, mundo!";
console.log(miVariable); // Imprime: Hola, mundo!
```

En este ejemplo, aunque intentamos acceder a **miVariable** antes de que se declare, no obtenemos un error. Esto se debe a que la declaración de la variable se mueve al principio del scope durante la fase de compilación.

El hoisting también se aplica a las funciones. Puedes llamar a una función antes de que se declare en tu código.

```js
saludo(); // Imprime: Hola, mundo!

function saludo() {
  console.log("Hola, mundo!");
}
```

En este ejemplo, la función **saludo** se llama antes de que se declare en el código. Esto es posible debido al hoisting, que mueve la declaración de la función al principio del scope.

Es importante tener en cuenta que el hoisting solo ocurre con las declaraciones de variables y funciones, no con las asignaciones o inicializaciones. Por lo tanto, es una buena práctica declarar todas las variables y funciones al principio de su scope para evitar confusiones y errores.

En resumen, el hoisting en JavaScript es un comportamiento en el que las declaraciones de variables y funciones se mueven al principio de su scope durante la fase de compilación. Esto permite utilizar variables y llamar a funciones antes de que se declaren en el código. Sin embargo, es recomendable declarar todas las variables y funciones al principio de su scope para evitar problemas de legibilidad y mantenimiento del código.

## Coercion

La coerción implícita en JavaScript es el proceso automático de conversión de valores de un tipo de dato a otro sin necesidad de que el programador lo especifique explícitamente. Esto ocurre en situaciones donde se realiza una operación entre valores de diferentes tipos.

Por ejemplo, cuando se realiza una operación de concatenación de una cadena de texto y un número, JavaScript automáticamente convierte el número en una cadena de texto y luego realiza la concatenación. Esto se debe a la coerción implícita que ocurre en el lenguaje.

```js
var numero = 10;
var texto = "El número es: " + numero;

console.log(texto); // Imprime: El número es: 10
```

En este ejemplo, el número **10** se convierte implícitamente en una cadena de texto para poder concatenarlo con la cadena **"El número es: "**.

Es importante tener en cuenta que la coerción implícita puede tener resultados inesperados en algunas situaciones. Por ejemplo, cuando se realiza una operación aritmética entre una cadena de texto y un número, JavaScript intentará convertir la cadena de texto en un número y realizar la operación. Sin embargo, si la cadena de texto no puede ser convertida en un número válido, se obtendrá el valor **NaN** (Not a Number).

```js
var resultado = "Hola" - 5;

console.log(resultado); // Imprime: NaN
```

En este ejemplo, la cadena de texto **"Hola"** no puede ser convertida en un número válido, por lo que la operación aritmética resulta en **NaN**.

En resumen, la coerción implícita en JavaScript es el proceso automático de conversión de valores de un tipo de dato a otro sin necesidad de que el programador lo especifique explícitamente. Esto puede ocurrir en situaciones como la concatenación de cadenas de texto y números. Sin embargo, es importante tener en cuenta que la coerción implícita puede tener resultados inesperados en algunas situaciones, por lo que es recomendable tener cuidado al realizar operaciones entre diferentes tipos de datos.

## Valores: Truthy y Falsy

Los valores **Truthy** en JavaScript son aquellos que se consideran verdaderos cuando se evalúan en un contexto booleano. Estos valores incluyen:

- Cualquier valor numérico distinto de cero (por ejemplo, 1, -1, 3.14)
- Cualquier cadena de texto no vacía (por ejemplo, "hola", "verdadero")
- El valor booleano true
- El objeto {}
- El array []
- La función function(){}
- El valor especial Infinity

Estos valores se consideran **Truthy** porque, al evaluarlos en un contexto booleano, se interpretan como verdaderos.

Por otro lado, los valores **Falsy** en JavaScript son aquellos que se consideran falsos cuando se evalúan en un contexto booleano. Estos valores incluyen:

- El número 0
- El valor especial NaN (Not a Number)
- La cadena de texto vacía ""
- El valor booleano false
- El valor null
- El valor undefined
- Estos valores se consideran **Falsy** porque, al evaluarlos en un contexto booleano, se interpretan como falsos.

Es importante tener en cuenta que estos valores **Truthy** y **Falsy** son utilizados en operaciones de control de flujo, como condicionales y bucles, para determinar qué camino seguir en función del valor evaluado.

En resumen, los valores **Truthy** en JavaScript son aquellos que se consideran verdaderos en un contexto booleano, mientras que los valores **Falsy** son aquellos que se consideran falsos. Estos valores son utilizados en operaciones de control de flujo para tomar decisiones basadas en la evaluación booleana de los valores.

## Operadores: Asignación, Comparación y Aritméticos

### Operadores de Asignación

Los operadores de asignación en JavaScript se utilizan para asignar valores a variables. Aquí tienes algunos ejemplos de operadores de asignación:

- **=**: Asigna el valor de la expresión a la variable.
- **+=**: Incrementa el valor de la variable con el valor de la expresión y luego lo asigna a la variable.
- **-=**: Declrementa el valor de la variable con el valor de la expresión y luego lo asigna a la variable.
- **\*=**: Multiplica el valor de la variable por el valor de la expresión y luego lo asigna a la variable.
- **/=**: Divide el valor de la variable por el valor de la expresión y luego lo asigna a la variable.
- **%=**: Calcula el módulo del valor de la variable con el valor de la expresión y luego lo asigna a la variable.

```js
var x = 5;
x += 3; // x = x + 3
console.log(x); // Imprime: 8

var y = 10;
y -= 2; // y = y - 2
console.log(y); // Imprime: 8

var z = 2;
z *= 4; // z = z * 4
console.log(z); // Imprime: 8

var w = 20;
w /= 5; // w = w / 5
console.log(w); // Imprime: 4

var a = 15;
a %= 6; // a = a % 6
console.log(a); // Imprime: 3
```

### Operadores de Comparación

Los operadores de comparación en JavaScript se utilizan para comparar dos valores y devolver un valor booleano (**true** o **false**) que indica si la comparación es verdadera o falsa. Aquí tienes algunos ejemplos de operadores de comparación:

- **==**: Compara si dos valores son iguales, sin tener en cuenta el tipo de dato. Realiza una coerción de tipos si es necesario.
- **===**: Compara si dos valores son iguales, teniendo en cuenta tanto el valor como el tipo de dato. No realiza coerción de tipos.
- **!=**: Compara si dos valores no son iguales, sin tener en cuenta el tipo de dato. Realiza una coerción de tipos si es necesario.
- **!==**: Compara si dos valores no son iguales, teniendo en cuenta tanto el valor como el tipo de dato. No realiza coerción de tipos.
- **>** : Compara si el valor de la izquierda es mayor que el valor de la derecha.
- **<**: Compara si el valor de la izquierda es menor que el valor de la derecha.
- **>=**: Compara si el valor de la izquierda es mayor o igual que el valor de la derecha.
- **<=**: Compara si el valor de la izquierda es menor o igual que el valor de la derecha.

```js
var x = 5;
var y = 10;

console.log(x == y); // Imprime: false
console.log(x === "5"); // Imprime: false
console.log(x != y); // Imprime: true
console.log(x !== "5"); // Imprime: true
console.log(x > y); // Imprime: false
console.log(x < y); // Imprime: true
console.log(x >= 5); // Imprime: true
console.log(y <= 10); // Imprime: true
```

### Operadores Lógicos

Los operadores lógicos en JavaScript se utilizan para combinar o evaluar expresiones lógicas y devolver un valor booleano (**true** o **false**). Aquí tienes algunos ejemplos de operadores lógicos:

- **&& (AND)**: Devuelve true si ambas expresiones son verdaderas.
- **|| (OR)**: Devuelve true si al menos una de las expresiones es verdadera.
- **! (NOT)**: Invierte el valor de la expresión, es decir, si la expresión es true, devuelve false, y si la expresión es false, devuelve true.

### Operadores Aritméticos

Los operadores aritméticos en JavaScript se utilizan para realizar operaciones matemáticas en valores numéricos. Aquí tienes algunos ejemplos de operadores aritméticos:

- **+**: Suma dos valores.
- **-**: Resta el valor de la derecha del valor de la izquierda.
- \*: Multiplica dos valores.
- **/**: Divide el valor de la izquierda por el valor de la derecha.
- **%**: Devuelve el resto de la división del valor de la izquierda por el valor de la derecha.
- **++**: Incrementa en 1 el valor de la variable.
- **--**: Decrementa en 1 el valor de la variable.

```js
var x = 5;
var y = 2;

console.log(x + y); // Imprime: 7
console.log(x - y); // Imprime: 3
console.log(x * y); // Imprime: 10
console.log(x / y); // Imprime: 2.5
console.log(x % y); // Imprime: 1

var z = 10;
z++; // z = z + 1
console.log(z); // Imprime: 11

var w = 7;
w--; // w = w - 1
console.log(w); // Imprime: 6
```

## Condicionales: If, Else, else if

Los condicionales en JavaScript permiten ejecutar diferentes bloques de código dependiendo de si se cumple una condición específica. Los condicionales más comunes son **if, else, else if** y el operador ternario.

### If

La declaración **if** se utiliza para ejecutar un bloque de código si una condición especificada es verdadera. Si la condición es falsa, el bloque de código no se ejecuta.

```js
var edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

En este ejemplo, si la variable **edad** es mayor o igual a 18, se imprimirá "Eres mayor de edad".

### Else

La declaración **else** se utiliza junto con la declaración **if** para ejecutar un bloque de código si la condición especificada en el **if** es falsa.

```js
var hora = 14;
if (hora < 12) {
  console.log("Buenos días");
} else {
  console.log("Buenas tardes");
}
```

En este ejemplo, si la variable **hora** es menor que 12, se imprimirá "Buenos días"; de lo contrario, se imprimirá "Buenas tardes".

### Else If

La declaración **else if** se utiliza para especificar una nueva condición si la primera condición es falsa.

```js
var hora = 20;
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```

En este ejemplo, si la variable **hora** es menor que 12, se imprimirá "Buenos días"; si no, pero es menor que 18, se imprimirá "Buenas tardes"; de lo contrario, se imprimirá "Buenas noches".

### Operador Ternario

El operador ternario es una forma concisa de escribir una declaración **if...else** en una sola línea.

```js
var edad = 20;
var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
```

En este ejemplo, si la variable edad es mayor o igual a 18, se asignará el mensaje "Eres mayor de **edad**" a la variable **mensaje**; de lo contrario, se asignará "Eres menor de edad".

Estos condicionales son fundamentales para controlar el flujo de ejecución de un programa en JavaScript, permitiendo tomar decisiones basadas en el cumplimiento de ciertas condiciones.

## Switch

El condicional **switch** en JavaScript es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código dependiendo del valor de esa expresión. A diferencia de la declaración **if...else if...else**, el **switch** se utiliza cuando se tienen múltiples casos posibles y se desea ejecutar diferentes acciones según el valor de la expresión evaluada.

```js
switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión es igual a valor1
    break;
  case valor2:
    // código a ejecutar si la expresión es igual a valor2
    break;
  case valor3:
    // código a ejecutar si la expresión es igual a valor3
    break;
  default:
    // código a ejecutar si la expresión no coincide con ningún caso anterior
    break;
}
```

- **expresión**: Es la expresión que se evalúa y se compara con los diferentes casos. Puede ser cualquier valor o variable.
- **case** valor1: Es un caso específico que se compara con la expresión. Si la expresión es igual a valor1, se ejecuta el bloque de código correspondiente a ese caso.
- **break**: Es una palabra clave que se utiliza para salir del switch después de ejecutar el bloque de código correspondiente a un caso. Sin el break, el flujo de ejecución continuaría hacia los casos siguientes, incluso si no coinciden con la expresión.
- **default**: Es un caso opcional que se ejecuta si la expresión no coincide con ninguno de los casos anteriores. Se utiliza para manejar un caso por defecto cuando no se cumple ninguna de las condiciones anteriores.

```js
function evaluarOpcion(opcion) {
  switch (opcion) {
    case "piedra":
      console.log("Has elegido piedra");
      break;
    case "tijera":
      console.log("Has elegido tijera");
      break;
    case "papel":
      console.log("Has elegido papel");
      break;
    default:
      console.log("Opción inválida");
      break;
  }
}

evaluarOpcion("piedra"); // Imprime "Has elegido piedra"
evaluarOpcion("tijera"); // Imprime "Has elegido tijera"
evaluarOpcion("otra"); // Imprime "Opción inválida"
```

En este ejemplo, la función **evaluarOpcion** toma un parámetro **opcion** y utiliza un **switch** para evaluar diferentes casos. Dependiendo del valor de **opcion**, se ejecuta el bloque de código correspondiente. Si no coincide con ninguno de los casos anteriores, se ejecuta el bloque de código dentro del **default**.

## Array

Un array en JavaScript es una estructura de datos que permite almacenar múltiples elementos en una sola variable. Los elementos en un array están ordenados y se accede a ellos mediante un índice numérico. Puedes pensar en un array como una lista de elementos.

Métodos comunes que se pueden aplicar a los arrays:

- **push**: Agrega uno o más elementos al final del array.

```js
let array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]
```

- **pop**: Elimina el último elemento del array y lo devuelve.

```js
let array = [1, 2, 3];
let elementoEliminado = array.pop();
console.log(array); // [1, 2]
console.log(elementoEliminado); // 3
```

- **shift**: Elimina el primer elemento del array y lo devuelve.

```js
let array = [1, 2, 3];
let elementoEliminado = array.shift();
console.log(array); // [2, 3]
console.log(elementoEliminado); // 1
```

- **unshift**: Agrega uno o más elementos al principio del array.

```js
let array = [1, 2, 3];
array.unshift(0);
console.log(array); // [0, 1, 2, 3]
```

- **concat**: Combina dos o más arrays y devuelve un nuevo array.

```js
let array1 = [1, 2];
let array2 = [3, 4];
let newArray = array1.concat(array2);
console.log(newArray); // [1, 2, 3, 4]
```

- **slice**: Devuelve una copia superficial de una porción del array.

```js
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(2, 4);
console.log(newArray); // [3, 4]
```

- **splice**: Cambia el contenido de un array eliminando, reemplazando o agregando elementos.

```js
let array = [1, 2, 3, 4, 5];

array.splice(2, 1); // Elimina el elemento en el índice 2
console.log(array); // [1, 2, 4, 5]

array.splice(1, 0, "a", "b"); // Agrega 'a' y 'b' en el índice 1
console.log(array); // [1, 'a', 'b', 2, 4, 5]

array.splice(3, 1, "x", "y"); // Reemplaza el elemento en el índice 3 con 'x' y 'y'
console.log(array); // [1, 'a', 'b', 'x', 'y', 4, 5]
```

- **forEach**: Ejecuta una función para cada elemento del array.

```js
let array = [1, 2, 3];
array.forEach(function (elemento) {
  console.log(elemento);
});
// Output:
// 1
// 2
// 3
```

- **map**: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.

```js
let array = [1, 2, 3];
let newArray = array.map(function (elemento) {
  return elemento * 2;
});
console.log(newArray); // [2, 4, 6]
```

- **filter**: Crea un nuevo array con todos los elementos que cumplan una condición.filter: Crea un nuevo array con todos los elementos que cumplan una condición.

```js
let array = [1, 2, 3, 4, 5];
let newArray = array.filter(function (elemento) {
  return elemento % 2 === 0;
});
console.log(newArray); // [2, 4]
```

## Loops

### For

El bucle **for** se utiliza cuando se conoce la cantidad exacta de repeticiones que se desea realizar. Tiene la siguiente estructura:

```js
for (inicialización; condición; incremento) {
  // código a repetir
}
```

- La **inicialización** se ejecuta una vez al comienzo del bucle y se utiliza para establecer una variable de control.
- La **condición** se evalúa antes de cada iteración y determina si el bucle debe continuar o detenerse.

- El **incremento** se ejecuta al final de cada iteración y se utiliza para modificar la variable de control.

Ejemplo:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Este bucle imprimirá los números del 0 al 4.

## For in

El bucle "for...in" se utiliza para recorrer las propiedades de un objeto. Tiene la siguiente estructura:

```js
for (variable in objeto) {
  // código a repetir
}
```

La **variable** representa el nombre de cada propiedad del objeto.
El bucle recorrerá todas las propiedades enumerables del objeto.

Ejemplo:

```js
const persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid",
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}
```

Este bucle imprimirá las propiedades y sus valores del objeto **persona**.

### For of

El bucle "for...of" se utiliza para recorrer elementos de una estructura iterable, como un array o un string. Tiene la siguiente estructura:

```js
for (variable of iterable) {
  // código a repetir
}
```

- La **variable** representa cada elemento del iterable.
- El bucle recorrerá todos los elementos del iterable.

Ejemplo:

```js
const números = [1, 2, 3, 4, 5];

for (let numero of números) {
  console.log(numero);
}
```

Este bucle imprimirá los números del array **números**.

### While

El bucle **while** se utiliza cuando no se conoce la cantidad exacta de repeticiones y se repite mientras una condición sea verdadera. Tiene la siguiente estructura:

```js
while (condición) {
  // código a repetir
}
```

La **condición** se evalúa antes de cada iteración y determina si el bucle debe continuar o detenerse.

Ejemplo:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

Este bucle imprimirá los números del 0 al 4, al igual que el bucle **for** anterior.

## Do-while

El bucle **do-while** es similar al bucle **while**, pero la condición se evalúa al final de cada iteración, lo que garantiza que el código se ejecute al menos una vez. Tiene la siguiente estructura:

```js
do {
  // código a repetir
} while (condición);
```

El código dentro del bucle se ejecuta primero y luego se evalúa la "condición".

Ejemplo:

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

Este bucle también imprimirá los números del 0 al 4.

## Objetos

En JavaScript, los objetos son estructuras de datos que permiten almacenar y organizar información de manera más compleja que los tipos de datos primitivos, como números y cadenas de texto. Los objetos en JavaScript se componen de propiedades y métodos, que son las características y acciones que definen al objeto.

- **Propiedades**: Las propiedades son las características o atributos del objeto. Cada propiedad tiene un nombre y un valor asociado. El valor puede ser cualquier tipo de dato válido en JavaScript, como números, cadenas de texto, booleanos, arreglos u otros objetos. Para acceder a una propiedad de un objeto, se utiliza la notación de punto o la notación de corchetes.

- **Métodos**: Los métodos son las acciones o funciones que puede realizar un objeto. Son funciones que están asociadas al objeto y pueden manipular sus propiedades o realizar otras operaciones. Para llamar a un método de un objeto, se utiliza la notación de punto.

```js
// Crear un objeto persona
var persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  },
};

// Acceder a las propiedades del objeto
console.log(persona.nombre); // Juan
console.log(persona.edad); // 30

// Llamar al método del objeto
persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años.
```

En este ejemplo, el objeto **persona** tiene dos propiedades (**nombre** y **edad**) y un método (saludar). La notación de punto se utiliza para acceder a las propiedades y llamar al método del objeto.

Es importante tener en cuenta que en JavaScript, los objetos son dinámicos, lo que significa que se pueden agregar, modificar o eliminar propiedades y métodos en cualquier momento. Esto brinda flexibilidad y poder al trabajar con objetos en JavaScript.

## Función constructora

Las funciones constructoras en JavaScript son funciones especiales que se utilizan para crear objetos. Estas funciones se llaman "constructoras" porque se utilizan como plantillas para construir nuevos objetos con propiedades y métodos específicos.

Para crear una función constructora, se utiliza la palabra clave **function** seguida del nombre de la función y los parámetros que se deseen. Dentro de la función constructora, se definen las propiedades y los métodos del objeto utilizando la palabra clave **this**. Estas propiedades y métodos se asignan al objeto que se crea cuando se llama a la función constructora utilizando el operador **new**.

```js
// Definir una función constructora para crear objetos de tipo Persona
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

// Crear un nuevo objeto de tipo Persona utilizando la función constructora
var persona1 = new Persona("Juan", 30);
var persona2 = new Persona("María", 25);

// Acceder a las propiedades y llamar a los métodos del objeto
console.log(persona1.nombre); // Juan
console.log(persona2.edad); // 25
persona1.saludar(); // Hola, mi nombre es Juan y tengo 30 años.
persona2.saludar(); // Hola, mi nombre es María y tengo 25 años.
```

En este ejemplo, la función constructora **Persona** se utiliza para crear objetos de tipo Persona. Los objetos creados tienen las propiedades **nombre** y **edad**, así como el método **saludar**. Al llamar a la función constructora con el operador **new**, se crea un nuevo objeto con las propiedades y métodos definidos en la función constructora.

Las funciones constructoras son útiles cuando se desea crear múltiples objetos con la misma estructura y comportamiento. Al utilizar una función constructora, se puede reutilizar el código y crear objetos de manera más eficiente.

### Finalize este curso en 5:30h
