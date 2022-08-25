let fs = require('fs');
let express = require('express');
let app = express();
let servidor = app.listen(8080, function () {
    let porta = servidor.address().port;
    console.log("Servidor executando na porta localhost:%s", porta);
});
app.get('/', function (req: any, res: any) {
    fs.readFile('ola.html', function (erro: any, dado: any) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(dado);
        res.end();
    });
});