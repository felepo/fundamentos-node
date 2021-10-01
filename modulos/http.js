// const http = require('http');

// http.createServer(router).listen(3000);

// function router(request, response) {
//     console.log('nueva peticion');
//     console.log(request.url);

//     switch (request.url) {
//         case '/':
//             response.writeHead(201, { 'Content-Type': 'text/plain' });
//             // Escribir respuesta al usuario
//             response.write('Hola, ya se usar HTTP de NodeJS');
//             response.end();
//             break;
//         case '/hola':
//             response.writeHead(202, { 'Content-Type': 'text/plain' });
//             response.write('Hola, que tal');
//             response.end();
//             break;
//         default:
//             response.writeHead(404, { 'Content-Type': 'text/plain' });
//             response.write('Error 404: no se lo que quieres');
//             response.end();
//     }
// }

// console.log('Escuchando http en el puerto 3000');


// *********************************************************************************************

const { createServer } = require('http');
const port = 3000;

const router = (req, res) => {
    switch(req.url) {
        case '/':
            res.end('<h1>Hola Fher</h1>');
            break;
        default:
            res.write('404: Esa url no existe!');
            res.end();
    }
}

const server = createServer(router);

server.listen(port, (err) => {
    if(err) {
        console.log('Could not establish a connection to the server');
        console.log(err.message);
    }

    console.info(`> Ready On http://localhost:${port}`);
});