// const p = require('process'); esto no es necesario debido a que process se carga en los modulos generales

// antes de que el proceso acabe
process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

// cuando se termina el proceso
process.on('exit', () => {
    console.log('el proceso acabo');
});

// cuando ocurre alguna excepcion en el proceso
process.on('uncaughtException', (err, origin) => {
    console.log('vaya, se nos ha olvidado capturar un error');
    console.error(err);
});

functionQueNoExiste();  // se fuerza un error para ver si se captura el error

console.log('Esto si el error no se recoje, no sale');