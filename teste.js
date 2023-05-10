//console.log("Hello World!")

let nome = "Yngrid" // let posso mudar a variavel dps

const sobrenome = "Padilha" //const nao da pra mudar valor

console.log(nome + " " +sobrenome)

nome = "Mariana"

console.log(nome) /*console para mudar nome da variavel*/

let numero1 = 30
let numero2 = 10

console.log(numero1 + numero2) /*console.log igual a println no java*/

function dividir(num1, num2){ 

    if(num2 === 0){ /* operador de comparação 3x = */
       return "Não é possível dividir por zero"
    }

    return num1 / num2
}

let resultado = dividir(10,5)
console.log(resultado)
// uma variavel pode receber com constante com valor
//se eu quiser mudar o valor da variavel usar let
const soma = (num1, num2) => num1 + num2 /*forma simplificada de uma função*/

console.log(soma(20,30))

function tabuada(num1){
    for(let contador = 1; contador <= 10; contador ++){
        console.log(`${num1} x ${contador} = ${num1 * contador}` )
    }
}

tabuada(5)

/*criar um vetor*/

const nomes = ["Yngrid", "Stéfani", "Maria", "Julia"]

nomes.forEach(nome => console.log(nome)) /*percorrendo o vetor e cada posição que achar vai guardar na variavel nome e imprimir na tela*/