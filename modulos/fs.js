const fs = require('fs').promises;

// Funcion que lee un archivo
const leer = async (ruta) => {
    try {
        const file = await fs.readFile(ruta, {encoding: 'utf-8'});
        console.log(file.toString());
    } catch (error) {
        console.error('Se ha producido un error al leer: ', error);
    }
}

// Funcion que crea un nuevo archivo
const escribir = async (ruta, contenido) => {
    try {
        await fs.writeFile(ruta, contenido);
        console.log('El archivo se ha escrito correctamente.');
    } catch (error) {
        console.error('Se ha producido un error al escribir: ', error);
    }
}

// Funcion que elimina/borra un archivo
const borrar = async (ruta) => {
    try {
        fs.unlink(ruta);
        console.log('El archivo se ha eliminado correctamente.');
    } catch (error) {
        console.error('Se ha producido un error al borrar', error);
    }
}

leer(__dirname + '/archivo.txt');

// escribir(
//     __dirname + '/archivo1.txt', 
//     'Soy un archivo nuevo',
// );

// borrar(__dirname + '/archivo1.txt', console.log);
// borrar(`${__dirname}/archivo1.txt`);