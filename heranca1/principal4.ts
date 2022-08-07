import { Dvd } from './dvd';

let dvd : Dvd = new Dvd(12,'Muito legal!',2000,'V de Vingança','230 min','Ficção');
console.log(dvd.toString());
console.log("------------------------------")

let dvd2 : Dvd = new Dvd();
dvd2.setCodigo(11);
dvd2.setDescricao("oloko bicho");
dvd2.setPreco(9999);
dvd2.titulo= "Se correr o bicho pega se ficar o bicho come";
dvd2.duracao= "muito longo";
dvd2.genero= "Masculino";
console.log(dvd2.toString());