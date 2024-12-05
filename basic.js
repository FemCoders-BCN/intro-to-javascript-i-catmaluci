//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente
// chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la 
//pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5"y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
console.log('Bienvenida Mariuxi al bootcamp de FemCoders de Factoría F5')



//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: 
//string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//string
let name = "chimichangas"
console.log(name)

//number
let number = 99
console.log(number)

//Boolean
let x = false;         // x is a Boolean
let y = new Boolean(false);  // y is an object
console.log('y:', y)

//object
let user = {
    nickname: 'Catmaluci'
}
console.log(user)

//null
let z = null;
//Boolean (z);
console.log('z:', z)

//undefined
const foo = undefined;
console.log('foo:', foo)

//array
const cars = ["Saab", "Volvo", "BMW"];
console.log (cars);



//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

const postres = ["helado", "tarta", "pastel"];
console.table (postres);



//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

const coder ={nombre: "Mariuxi", edad:"43"}
console.table (coder);



//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.


console.log('name:',typeof(name));
console.log('number:',typeof(number));
console.log('user',typeof(user));
console.log('x:',typeof(x));
console.log('y:',typeof(y));
console.log('z:',typeof(z));
console.log('foo:',typeof(foo));
console.log('cars:',typeof(cars));




//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

let o = 1;
let p = 1
let op = (o+p)
console.log('add',op);




//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

let e = 100;
let f = 10;
let ef = e - f
console.log('subtract', ef);




//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

let g = 100;
let h = 1;
let gh = g*h
console.log('multiply',gh);




//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

let j = 100;
let k = 2;
let jk = j/k
console.log('divide',jk);




//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 
//y la segunda con un valor numérico de 2, 
//compara ambas variables dentro de otra variable e 
//imprime en la consola para ver el resultado.

let i=1;
let l=2;
let comparation = (i==l)
console.log('exercise 10:',comparation)




// Ejercicio 11: Crea otra variable que compare las dos primeras variables 
//creadas en el ejercicio anterior, 
//para que el resultado impreso en la consola sea true.

let compara=(i != l);
console.log('exercise 11:',compara)



//Ejercicio 12: completa el ejercicio

let num1 = 15
let num2 = 20

let comparision =(num1<num2) //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log('exercise 12:', comparision)

//Ejercicio 13: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result = (num3 === num3AsString)//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log('exercise 13:',result) 


//Ejercicio 14: completa el ejercicio

let result2 = (num3 == num3AsString) //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior
// para que el resultado en consola sea true.
console.log('exercise 14:',result2)



//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y  crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
let minombre = "Mariuxi ";
let miapellido = "Olaya";
let nombrecompleto =(minombre+miapellido);
console.log('exercise 15:',nombrecompleto);


//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

 let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log('exercise 16_1:',res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log('exercise 16_2:',res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log('exercise 16_3:',res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log('exercise 16_4:',res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log('exercise 16_5:',res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log('exercise 16_6:',res6) 
