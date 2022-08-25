let express = require ('express');
let app = express();

let servidor = app.listen(8080, function() {
    let porta = servidor.address().port;
    console.log("Servidor excutando na porta %s", porta);   
});

app.use(express.static('img'));
app.get('/',function(req:any, res:any){
    res.writeHead(200, {'Content-Type':'text/html'})
})