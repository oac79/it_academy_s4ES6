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
function doMoreWork() {
    return 'Do More Work';
}

async function b() {
    // tasques asíncrones , que triguen una estona..
    return 'Hello world';
}

async function a() {
    // Ens esperem que la funció b acabi
    const response = await b();
    console.log('response----> ' + response);
    console.log(doMoreWork());

}

a();

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

