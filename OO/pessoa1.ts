class Pessoa {
    private nome: string = '';
    private endereco: string = '';
    private telefone: string = '';

    constructor() {
    }
    public setNome(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }
    public setEndereco(endereco: string) {
        this.endereco = endereco;
    }

    public getEndereco(): string {
        return this.endereco;
    }
    public setTelefone(telefone: string) {
        this.telefone = telefone;
    }

    public getTelefone(): string {
        return this.telefone;
    }
}

let pessoa = new Pessoa();
pessoa.setNome('Eduardo');
pessoa.setEndereco('rua acre');
pessoa.setTelefone('199999');
console.log(pessoa.getNome()+', '+pessoa.getEndereco()+', '+pessoa.getTelefone());