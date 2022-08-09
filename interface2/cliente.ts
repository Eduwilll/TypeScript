interface ICliente {
    set cpf(valor: string);
    get cpf(): string;
    set nome(valor: string);
    get nome(): string;
    set telefone(valor: string);
    get telefone(): string;
}
class Cliente implements ICliente {
    private _cpf: string = '';
    private _nome: string = '';
    private _telefone: string = '';
    public set cpf(valor: string) {
        this._cpf = valor;
    }
    public get cpf(): string {
        return this._cpf;
    }
    public set nome(valor: string) {
        this._nome = valor;
    }
    public get nome(): string {
        return this._nome;
    };
    public set telefone(valor: string) {
        this._telefone = valor;
    }
    public get telefone(): string {
        return this._telefone;
    }
    public toString(): string {
        return "CPF: " + this._cpf +
            "\nNome: " + this._nome +
            "\nTelefone: " + this._telefone;
    }
}
let cli: Cliente = new Cliente();
cli.cpf = '111.111.111-11';
cli.nome = 'Eduardo!';
cli.telefone = '(11) 4567-8901';
console.log(cli.toString());
