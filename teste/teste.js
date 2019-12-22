function criarPessoa(nome, sobrenome, idade, naturalidade) {
    return {nome, sobrenome, idade, naturalidade}
}

pessoa1 = criarPessoa("Diego", "Araujo", 34, "Rio de Janeiro")

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade, pessoa1.naturalidade)


