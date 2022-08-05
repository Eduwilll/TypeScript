// 1) Considerando o funcionamento de uma lâmpada, projetar uma classe que represente os 
// estados possíveis e respectivos métodos.

class Lampada{
    private estado: string = '';
    private ligado: string = 'ligado';
    private desligado: string = 'desligado';
    constructor(estado: string){
        this.estado = estado;
    }
    
    Estado(): string {
        return 'Lampada ' + this.estado;
    }
    public setLigado() {
        this.estado = this.ligado;
    }
    public setDesligado() {
        this.estado = this.desligado;
    }
}

let estado = new Lampada('Ligado');
console.log(estado.Estado());
estado.setLigado();
console.log(estado.Estado());
estado.setDesligado();
console.log(estado.Estado());
