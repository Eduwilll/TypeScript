import readline from 'readline';

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite o primeiro valor:',(valor1: string)=>{
    teclado.question('Digite o segundo valor: ',(valor2: string)=>{
        let soma = parseFloat(valor1) + parseFloat(valor2);
        console.log("A soma é: "+soma);
        teclado.close();
    });
});