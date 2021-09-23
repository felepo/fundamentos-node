const hola = nombre => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

const hablar = nombre => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log("Bla bla bla bla...");
                resolve(nombre);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
}

const adios = nombre => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    });
}

console.log("Iniciando el proceso...");
hola("Fernando")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log("Terminado el proceso");
    })
    .catch(error => {
        console.log("Ha habido un error:");
        console.error(error);
    });