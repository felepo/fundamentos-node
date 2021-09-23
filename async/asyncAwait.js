const hola = async nombre => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

const hablar = async nombre => {
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

const adios = async nombre => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    });
}

const main = async () => {
    const nombre = await hola("Fernando");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);

    console.log("Terminamos el proceso");
}

console.log("Empezamos el proceso");
main();