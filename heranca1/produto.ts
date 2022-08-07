export class Produto {
    protected codigo: number;
    protected descricao: string;
    protected preco: number;
    constructor();
    constructor(codigo: number, descricao: string, preco: number);
    constructor(codigo?:any, descricao?:any,preco?:any){
        this.codigo = codigo;
        this.descricao = descricao;
        this.preco = preco;
    }
    public setCodigo(codigo: number){
        this.codigo = codigo;
    }

    public getCodigo(): number{
        return this.codigo;
    }

    public setDescricao(descricao: string){
        this.descricao = descricao;
    }

    public getDescricao(): string{
        return this.descricao;
    }

    public setPreco(preco: number){
        this.preco = preco;
    }

    public getPreco(): number{
        return this.preco;
    }    

    toString(): string{
        return  "Código: " + this.codigo +
        "\nDescrição: " + this.descricao +
        "\nPreço: " + this.preco;
    }
}