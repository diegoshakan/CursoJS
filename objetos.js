function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa("Diego", "Araujo", 34)
const pessoa2 = criaPessoa("Kassandra", "Araujo", 35)
const pessoa3 = criaPessoa("Aimée", "Araujo", 6)
const pessoa4 = criaPessoa("Abner", "Araujo", 3)

console.log(`Nome Completo: ${pessoa1.nome} ${pessoa1.sobrenome}, Idade: ${pessoa1.idade}`)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

function criaPessoa2(nome, sobrenome, idade, cumprimento) {
    return {nome, sobrenome, idade, cumprimento}
}

const pessoa5 = criaPessoa2("Diego", "Araujo", 34, "Olá!")
console.log(pessoa5.cumprimento)