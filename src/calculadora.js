function soma (valorA, ValorB) { 

    return valorA + ValorB 

} 

function sub (valorA, ValorB) { 

    return valorA - ValorB 

} 

function mult (valorA, ValorB) { 

    return valorA * ValorB 

} 

function div (valorA, ValorB) { 

    return valorA / ValorB 

} 

 
function calculadora (valorA, ValorB, operacao) { 

    if (operacao === '+') { 

        return soma(valorA, ValorB) 

    } 

    if(operacao === '-') { 

        return sub (valorA, ValorB) 

    } 

    if(operacao === '*') { 

        return mult (valorA, ValorB) 

    } 

    if(operacao === '/') { 

        if (ValorB !=0) { 

            return div (valorA, ValorB) 

        } else return 'Não é possível dividir por zero' 

    } 

 
 

    return 'Por favor, informe um operador valido' 

} 

 
export default calculadora;

const result = calculadora (25,5,'/') 

console.log(result) 