class Pessoa {
    private nome: string = '';
    private endereco: string = '';
    private telefone: string = '';

    constructor() {
    }
    public get_nome(): string {
        return this._nome;
    }
    public set_nome(value: string) {
        this._nome = value;
    }
    public get_endereco(): string {
        return this._endereco;
    }
    public set_endereco(value: string) {
        this._endereco = value;
    }
    public get_telefone(): string {
        return this._telefone;
    }
    public set_telefone(value: string) {
        this._telefone = value;
    }
}
let pessoa: Pessoa = new Pessoa();
pessoa.nome = 'Cláudio Oliveira';
pessoa.endereco = 'Rua das Flores, 100';
pessoa.telefone = '(11) 4567-8901';
console.log('Nome: ' + pessoa.nome +
    '\nEndereço: ' + pessoa.endereco +
    '\nTelefone: ' + pessoa.telefone);
