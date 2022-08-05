class Calculo {
    somar(num1: number, num2: number): number;
    somar(num1: string, num2: string): number;
    somar(num1: number, num2: string): number;
    somar(num1: string, num2: number): number;

    somar(num1: any, num2: any): any {
        return (parseFloat(num1) + parseFloat(num2));
    }
}
let calc: Calculo = new Calculo();
console.log(calc.somar(5.6, 6.9));
console.log(calc.somar('10.3', '21.4'));
console.log(calc.somar(10.3, '21.4'));
console.log(calc.somar('10.3', 21.4));
