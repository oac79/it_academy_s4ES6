// -------------------------------------Nivel 1---------------------------------
// Exercici 1
// Converteix a funcions fletxa:
const multiply = (num1, num2) => {
    return num1 * num2;
}

let res_multi = multiply(3, 4);
console.log('multiply = ' + res_multi);

const toCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32)
}

let res_fahr = toCelsius(100);
console.log('fahrenheit = ' + res_fahr);

// This function returns a string padded with leading zeros
const padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

let res_padZeros = padZeros(5, 10);
console.log('padZeros = ' + res_padZeros);

const power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

let res_power = power(3, 5);
console.log('power = ' + res_power);

const greet = (who) => {
    console.log("Hello " + who);
}
greet('PABLO PICAPIEDRA');

// Exercici 2
// Arregla l'error del següent bloc de codi:

var users =
    [{ firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }];

users.map(function (user) {
    user.firstName;
    user.lastName;
});

for (user of users.values()) {
    console.log('firstName = ' + user.firstName + ' - lastName = ' + user.lastName);
}

// Exercici 3
// Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'].reduce((a, b) => a + ' ' + b);
console.log(
    'epic => ' + epic
);
// Resultat per consola: 'a long time ago in a galaxy far far away'
// Nota: no fa falta fer un "join".

// Exercici 4
// Crear una funció que accepti un string i retornada aquest string revertit.
// Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()

const reverse_str = (str_param) => {
    const list_chars = str_param.split('');
    const str_end = list_chars.reverse();
    return str_end.reduce((a, b) => a.concat(b));
}

console.log(reverse_str('Pluma'));

// Exercici 5
// Modifica la funció 'a()' per a reemplaçar la promesa per aync/await:

async function b() {
    // tasques asíncrones , que triguen una estona..
    console.log('se ejecuta la función b()');
}

function a() {
    // Ens esperem que la funció b acabi
    // Ens esperem que la funció b acabi
    // const response = b();
    // console.log(response);
    // const value = await b();
    // console.log(value);
    //      b().then() = > {
    //         doMoreWork();
    //   }

}

// Exercici 6
// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 
// - Usar .forEach() per obtenir aquest array.
// - Usar .map() per obtenir aquest array.
var tasks = [
    {
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];

var tasks_map = new Map();
var tasks_name = [];
var count = 1;
tasks.forEach(task => {
    tasks_name.push(task.name);
    tasks_map.set('name'.concat(count), task.name);
    count++;
});

console.log(tasks_name);
console.log(tasks_map);

//--------------------------------------------------Nivell 2--------------------------------------------------
// Exercici 7

// Realitzar un programa en ES6, amb al menys una funció.
// Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient). 
// Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.

// Per exemple, si l'usuari introdueix 3 i 5:

// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9
// 3 X 4 = 12
// 3 X 5 = 15

const multiply_n2 = (n1, n2) => {
    for (var i = 1; i <= n2; i++) {
        let res = n1 * i;
        console.log(n1 + ' x ' + i + ' = ' + res);

        // document.write(`<p>${res}</p><br>`);
    }
}

var n1 = prompt("Por favor introduzca un número del 1-10", "");
while (n1 < 1 || n1 > 10) {
    alert('Verifique el número introducido!!!');
    var n1 = prompt("Por favor introduzca un número del 1-10", "");
}
var n2 = prompt("Por favor introduzca su segundo número del 1-10", "");
while (n2 < 0 || n2 > 10) {
    alert('Verifique el número introducido!!!');
    var n2 = prompt("Por favor introduzca su segundo número del 1-10", "")
}
multiply_n2(n1, n2);

// Exercici 8

// Modificar l'exercici anterior perquè els números s'introdueixin a través d'un formulari (amb validacions),
// i que la taula de multiplicar la mostri en una taula HTML