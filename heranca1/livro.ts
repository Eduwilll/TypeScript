import { Produto } from "./produto";

export class Livro extends Produto {
    private titulo: string;
    private autor: string;
    private anoPulic: string;
    private idioma: string;
    private editora: string;
    private capaLivro: string;
    private genero: string;

    constructor();
    constructor(codigo: number,descricao: string,preco: number,titulo: string, autor: string,anoPulic: string,idioma: string,editora: string,capaLivro: string,genero: string);
    constructor(codigo?: any, descricao?: any, preco?: any,titulo?: any, autor?: any,anoPulic?: any,idioma?: any,editora?: any,capaLivro?: any,genero?: any){
        super(codigo, descricao, preco);
        this.titulo = titulo;
        this.autor = autor;
        this.anoPulic= anoPulic;
        this.idioma = idioma;
        this.editora = editora;
        this.capaLivro = capaLivro;
        this.genero = genero;
    }
    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getAnoPulic(): string {
        return this.anoPulic;
    }

    public setAnoPulic(anoPulic: string): void {
        this.anoPulic = anoPulic;
    }

    public getIdioma(): string {
        return this.idioma;
    }

    public setIdioma(idioma: string): void {
        this.idioma = idioma;
    }

    public getEditora(): string {
        return this.editora;
    }

    public setEditora(editora: string): void {
        this.editora = editora;
    }

    public getCapaLivro(): string {
        return this.capaLivro;
    }

    public setCapaLivro(capaLivro: string): void {
        this.capaLivro = capaLivro;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    toString(): string {
        return 'codigo: ' + this.codigo +
        '\n Descricao: ' + this.descricao +
        '\n Preco: ' + this.preco +
        '\n Titulo: ' + this.titulo +
        '\n Autor: ' +this.autor +
        '\n Ano publicado: '+ this.anoPulic +
        '\n Idioma: '+this.idioma +
        '\n Editora: '+this.editora +
        '\n Capa do Livro: '+this.capaLivro +
        '\n Genero: '+this.genero 
    }
    
}