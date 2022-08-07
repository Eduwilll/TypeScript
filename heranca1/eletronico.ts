import { Produto } from "./produto";

export class Eletronico extends Produto {
    private tensao: number;
    private _garantia: string;

    constructor();
    constructor(codigo: number, descricao: string, preco: number, tensao: number, garantia: string);
    constructor(codigo?: any, descricao?: any, preco?: any, tensao?: any, garantia?: any) {
        super(codigo, descricao, preco);
        this.tensao = tensao;
        this._garantia = garantia;
    }

    public setTensao(tensao: number) {
        this.tensao = tensao;
    }

    public getTensao(): number {
        return this.tensao;
    }

    public get garantia(): string {
        return this._garantia;
    }
    public set garantia(value: string) {
        this._garantia = value;
    }


    toString(): string {
        return super.toString() +
            "\nTensão: " + this.tensao +
            "\nGarantia: " + this.garantia;
    }
}