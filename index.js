let http = require('http');
let current_date = require('./date_module');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + current_date.myDate());
    res.end();
}).listen(3000);