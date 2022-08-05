class Saudacao {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
    
    getOla():string {
        return "Olá," + this.nome + "!";    
    }
}

let saudacao: Saudacao = new Saudacao('Eduardo');
console.log(saudacao.getOla());