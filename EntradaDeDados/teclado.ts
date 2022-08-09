import readline from 'readline';

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite seu nome: ', (nome: string)=>{
    console.log('Olá '+ nome);
    teclado.close();
})