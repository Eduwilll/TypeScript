class Ponto {
    private x: number;
    private y: number;
    constructor(x: string, y: string);
    constructor(x: number, y: number);
    constructor(x: string);
    constructor(x: any, y?: any) {
        this.x = parseFloat(x);
        if (!y)
            y = -1;
        this.y = parseFloat(y);
    }
    getPonto() {
        return this.x + ', ' + this.y;
    }
}
let pt1: Ponto = new Ponto("2","2");
console.log('x, y = ' + pt1.getPonto() + typeof(pt1.getPonto()));