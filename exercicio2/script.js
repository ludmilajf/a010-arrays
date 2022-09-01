// Exercício 1:
const primeiraArray = [76, 123, 4, 9, 10]
const segundaArray = ["oi", "como", "vai", "você", "?"]
const terceiraArray = ["opa", true, 5, false, 33]


//Exercício 2:
console.log(`Caracteres da primeira: ${primeiraArray.length};`)
console.log(`Caracteres da segunda: ${segundaArray.length};`)
console.log(`Caracteres da terceira: ${terceiraArray.length}.`)

console.log(`
Primeiro item da primeira: ${primeiraArray[0]};
Segundo item da segunda: ${segundaArray.slice(1, 2)};
Terceiro item da terceira: ${terceiraArray.slice(2, 3)}
`)
//preferi usar o slice pra testar se tinha entendido

console.log(`A primeira possui o número "123"? ${primeiraArray.includes(123)}.
A terceira possui a palavra "oi"? ${terceiraArray.includes("oi")}.
`)

