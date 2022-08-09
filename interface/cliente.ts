interface ICliente {
    setCPF(cpf: string): void;
    getCPF(): string;
    setNome(nome: string): void;
    getNome(): string;
    setTelefone(telefone: string): void;
    getTelefone(): string;
}
class Cliente implements ICliente {
    private cpf: string = '';
    private nome: string = '';
    private telefone: string = '';
    public setCPF(cpf: string): void {
        this.cpf = cpf;
    }
    public getCPF(): string {
        return this.cpf;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public getNome(): string {
        return this.nome;
    }
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
    public getTelefone(): string {
        return this.telefone;
    }
    public toString(): string {
        return "CPF: " + this.cpf +
            "\nNome: " + this.nome +
            "\nTelefone: " + this.telefone;
    }
}
let cli: Cliente = new Cliente();
cli.setCPF('111.111.111-11');
cli.setNome('Eduardo!');
cli.setTelefone('(11) 4567-8901');
console.log(cli.toString());
