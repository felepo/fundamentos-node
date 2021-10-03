console.time('todo');

// ********************************************
let suma = 0;

console.time('bucle');

for (let i=0; i < 1000000000; i++) {
    suma += i;
}

console.timeEnd('bucle');

// ********************************************
let suma2 = 0;

console.time('bucle2');

for (let j=0; j < 1000000000; j++) {
    suma2 += j;
}

console.timeEnd('bucle2');

console.time('asincrono');
console.log('empieza proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono')
    }, 3000);

console.timeEnd('todo');
// ********************************************

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        });
    });
}