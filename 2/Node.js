const http = require('http');
function handleRequest(res, res) {
    res.end('<h1>Selamat Datang</h1>');
}

var server = http.createServer(handleRequest);
server.listen(8000, function () {
    console.log('Berjalan di port 8000')    
})