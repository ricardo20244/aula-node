const fs = require("fs");
const pessoa = require("./json");

console.log(pessoa);


console.log("antes da funcao")
fs.writeFile("aula.txt", "aula de node", function(erro){
if (erro){
    console.log("deu erro", erro);
}else{
    console.log("tudo ok")
}

    
});

console.log("depois da funcao");

fs.readFile("json.js", "utf8", function(erro, dados){
    console.log(dados);
});

