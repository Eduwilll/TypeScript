import { Eletronico } from "./eletronico";

let eletr: Eletronico = new Eletronico();
eletr.setCodigo(11);
eletr.setDescricao('Televisor');
eletr.setPreco(2000);
eletr.setTensao(127); 
eletr.garantia = '12 meses';
console.log (eletr.toString());