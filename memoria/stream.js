// Stream de lectura
// const fs = require('fs');

// let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.setEncoding('UTF-8');
// readableStream.on('data', function(chunk) {
//     // console.log(chunk);
//     data += chunk;
// });
// readableStream.on('end', function() {
//     console.log(data);
// });

// ********************************************

// stream de escritura

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');


// ********************************************


const fs = require('fs');
const stream = require('stream');
const util = require('util');

const Transform = stream.Transform;

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF-8');
readableStream.on('data', function(chunk) {
    data += chunk;
});

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);