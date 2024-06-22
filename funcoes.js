
var n1 = 4;
var n2 = 5;
var n3 = 4;
var n4 = 2;
/**
 * somar números 
 * @author "ricardo"
 * @param {number} n1 
 * @param {number} n2 
 * @returns 
 */

function soma(n1, n2){
    var res = n1 + n2 + n3;
    
    
    function abc(){
        return n1 + n3 + n4;
    }
    console.log(abc());
    return res;
}

soma(2, 3);

var res = soma(2, 3);


console.log(res);

var mult = function(n1, n2){
    return n1 * n2;
}
console.log(mult(3, 5))


/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @param {function} op 
 * @returns 
 */
function calc(n1 , n2 , op)
{
return op(n1, n2);
}

console.log(calc(2, 5, mult))

function Pessoa()
{
    this.idade = 31;
}

var edir = new Pessoa();
console.log(edir);

