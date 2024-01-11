const { dir } = require('console');
var os = require('os');

console.log('Architecture: ' + os.arch());
console.log('Free Memory: ' + os.freemem());
console.log('Total Memory: ' + os.totalmem());
console.log('Platform: ' + os.platform());
console.log('Type: ' + os.type());
console.log('Uptime: ' + os.uptime());
console.log('Version: ' + os.version());
console.log('Hostname: ' + os.hostname());

