function meuForm() {
    const form = document.querySelector('.form');
    const retorno = document.querySelector('.retorno')

    const pessoas = []

    function getForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const naturailidade = form.querySelector('.naturalidade')        ;

        const pessoa = {nome: nome.value, 
            sobrenome: sobrenome.value, 
            idade: idade.value, 
            naturailidade: naturailidade.value
        };

        pessoas.push(pessoa)
        // console.log(pessoas)
        
        retorno.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} ${naturailidade.value}</p>`

    }
    
    form.addEventListener('submit', getForm)
}

meuForm()
