class Motor {
    private litros: number;
    private cilindros: number;
    private potencia: number;
    private combustivel: string;
    constructor(litros: number, cilindros: number, potencia: number,combustivel: string) {
        this.litros = litros;
        this.cilindros = cilindros;
        this.potencia = potencia;
        this.combustivel = combustivel;
    }
    toString(): string {
        return '\n\tLitros: ' + this.litros +
            '\n\tCilindros: ' + this.cilindros +
            '\n\tPotência: ' + this.potencia +
            '\n\tCombustível: ' + this.combustivel;
    }
}
class Veiculo {
    private modelo: string;
    private fabricante: string;
    private anoFabricacao: number;
    private motor: Motor;
    constructor(modelo: string, fabricante: string, anoFabricacao: number, motor: Motor) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.anoFabricacao = anoFabricacao;
        this.motor = motor;
    }
    toString(): string {
        return 'Modelo: ' + this.modelo +
            '\nFabricante: ' + this.fabricante +
            '\nAno de Fabricação: ' + this.anoFabricacao +
            '\nMotorização: ' + this.motor.toString();
    }
}
let m1vw: Motor = new Motor(1.0, 3, 70, 'Flex');
let gol: Veiculo = new Veiculo('Gol', 'Volkswagen', 2020, m1vw);
console.log(gol.toString());
