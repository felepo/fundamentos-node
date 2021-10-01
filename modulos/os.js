const os = require('os');

// console.log(os.arch());
// console.log(os.platform());

// console.log(os.cpus().length;

// console.log(os.constants);

// **********************************************************

// const SIZE = 1024;
// const kb = (bytes) => bytes/SIZE;
// const mb = (bytes) => kb(bytes)/SIZE;
// const gb = (bytes) => mb(bytes)/SIZE;


// console.log('bytes:');
// console.log(os.freemem());

// console.log('kilobytes:');
// console.log(kb(os.freemem()));

// console.log('megabytes:');
// console.log(mb(os.freemem()));

// console.log('gigabytes:');
// console.log(gb(os.freemem()));

// console.log('total memory:');
// console.log(gb(os.totalmem()));


// **********************************************************


// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());

console.log(os.networkInterfaces());