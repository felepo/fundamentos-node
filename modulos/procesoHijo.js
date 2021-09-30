// const { exec } = require('child_process');
// const fs = require('fs').promises;

// exec('whoami', async (err, stdout, sterr) => {
//     if(err) {
//         console.error(err);
//         return false;
//     }

//     console.log('mostrando salida');
//     console.log(stdout);
//     console.log('escribiendo salida en un archivo de texto');
//     await fs.writeFile(__dirname + '/salidaProceso.txt', stdout);
//     console.log('Hecho!');
// });

// ----------------------------------------------------

const { spawn } = require('child_process');

let proceso = spawn('ls', ['-lah']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log('verificando si el proceso esta muerto:');
    console.log(proceso.killed);

    console.log('mostrando el resultado de el comando ejecutado con spawn:');
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('el proceso termino');
});