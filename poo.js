// caneta bic

class Caneta{
    //atributos -> propriedades
    cor = "azul";
    vazia = false;

constructor(cor)
{
    this.cor = cor;
}
    //metodo -> função
    escrever(){
        var vazia = true;
    console.log("escreveu bastante");
    this.vazia = true;
    }

}
class Caneta2 extends Caneta{
botaoApertado = false;
}
    class Caneta3 extends Caneta2{
        
    }

//instância
var bic1 = new Caneta("azul");
var bic2 = new Caneta("vermelho");
var bic3 = new Caneta("preto");
var bic4 = bic3; // referencia a aum objeto
var bic5 = new Caneta2("verde");
bic2.cor = "preta";
bic4.cor = "vermelha";

console.log(bic1, bic2, bic3, bic4);


if (bic3 == bic4){
    console.log("verdade");
}else {
    console.log("falso");
}

//invocando o metodo
bic1.escrever();

bic1.vazia = false;

console.log(bic1, bic2, bic3, bic4)
console.log(bic5);