import { Produto } from './produto';

export class Dvd extends Produto {
    private _titulo: string;
    private _duracao: string;
    private _genero: string;

    constructor();
    constructor(codigo: number, descricao: string, preco: number, titulo: string, duracao: string, genero: string);
    constructor(codigo?: any, descricao?: any, preco?: any, titulo?: any, duracao?: any, genero?: any) {
        super(codigo, descricao, preco);
        this._titulo = titulo;
        this._duracao = duracao;
        this._genero = genero;
    }
    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string
    ) {
        this._titulo = titulo;
    }

    public get duracao(): string {
        return this._duracao;
    }

    public set duracao(duracao: string
    ) {
        this._duracao = duracao;
    }

    public get genero(): string {
        return this._genero;
    }

    public set genero(genero: string) {
        this._genero = genero;
    }

    toString(): string {
        return 'codigo: ' + this.codigo +
        '\n Descricao: ' + this.descricao +
        '\n Preco: ' + this.preco +
        '\n Titulo: ' + this.titulo +
        '\n Duração: ' +this.duracao +
        '\n Genero: ' +this.genero 
    }

}