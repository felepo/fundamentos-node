function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en mi funcion asincrona');
            cb(error);
        }
    }, 1000);
}

try {
    // otraFuncion();
    seRompeAsincrona((error) => {
        console.log(error.message);

    });
} catch (error) {
    console.error('Vaya, algo se ha roto');
    console.error(error);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto de aqui esta al final');