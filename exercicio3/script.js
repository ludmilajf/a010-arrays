// Exercício 1:
const primeiraArray = [76, 123, 4, 9, 10]
const segundaArray = ["oi", "como", "vai", "você", "?"]
const terceiraArray = ["opa", true, 5, false, 33]


//Exercício 3:
const primeiraArrayCopia = [76, 123, 4, 9, 10]
const segundaArrayCopia = ["oi", "como", "vai", "você", "?"]
const terceiraArrayCopia = ["opa", true, 5, false, 33]

primeiraArrayCopia.push(20)
console.log(`Primeira original: ${primeiraArray}
Adicionando o número 20 na cópia: ${primeiraArrayCopia}
`)

segundaArrayCopia.pop()
console.log(`Segunda original: ${segundaArray}
retirando o ultimo ítem da cóia: ${segundaArrayCopia}
`)

terceiraArrayCopia.splice(1, 1)
console.log(`Terceira original: ${terceiraArray}
Cópia sem o segundo ítem: ${terceiraArrayCopia}
`)
