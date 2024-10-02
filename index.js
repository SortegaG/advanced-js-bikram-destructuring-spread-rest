//RESUELVE LOS EJERCICIOS AQUÍ

// Destructuring arrays

//1.- Dado el objeto empleados, extrae la empleada Ana completa.

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana = empleados
    .find(empleado => empleado.name === 'Ana');

console.log(ana);
    
// 2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com

const emailLuis = empleados
    .find(empleado => empleado.name === 'Luis').email;

console.log(emailLuis);

/* 3.- Usa destructuración para cambiar los valores de a y b;

// InicialmenTE
let a = 5;
let b = 3;

// Al final
let a = 3;
let b = 5;*/

let a = 5;
let b = 3;
[a, b] = [b, a]


/*4.- Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);*/

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

// Spread/Rest

/*5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26*/

function sumEveryOther (...rest) {
    let total = 0;

    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }

    return total;
}

/* 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
addOnlyNums(1, "perro", 2, 4); //7*/

function addOnlyNums (...rest) {
    let total = 0; 

    for (let i = 0; i < rest.length; i++) {

        if (typeof rest[i] === 'number') {
            total += rest[i];
        }
    } 
    
    return total;
}

console.log(addOnlyNums(true,'hola',false,'adios',8));

/*7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4*/

function countTheArgs(...rest) {
    return rest.length;
}

/* 8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).*/

let array1 = ['Hola', 4, 8];
let array2 = ['adios', 7, false];

function combineTwoArrays (array1, array2) {
    return [...array1, ...array2]
}

console.log(combineTwoArrays(array1, array2));

/* 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]*/

function onlyUniques(...rest) {
    let array = [];

    for (let i = 0; i < rest.length; i++) {

        if (!array.includes(rest[i])) {
            array.push(rest[i])
        }

    } return array;
}

console.log(onlyUniques('gato', 'perro', 'perro', 3, 32, 2, 3))
/* 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
*/

function combineAllArrays(...rest) {
    let result = [].concat(...rest);
    return result;
}

let arr1 = [8, 4, 'hola'];
let arr2 = [8, 4, false];

console.log(combineAllArrays(arr1, arr2));

/*11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.*/

function sumAndSquare(...rest) {
    let num = rest.reduce((acc, cur) => acc + cur**2,0);
    return num;
    // let suma = 0;
    // for (let i = 0; i < rest.length; i++) {
    
    //     let mult = rest[i]**2;
    //     suma += mult;
    // } return suma;
}
console.log(sumAndSquare(1,2,5,4,4,5))