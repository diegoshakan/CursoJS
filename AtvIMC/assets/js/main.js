function imc(){
    const form = document.querySelector('.form')
    const retorno = document.querySelector('.retorno')

    function getForm(evento){
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        let resultado = peso.value / altura.value**2
        resultado = resultado.toFixed(2)
        let recebeResultado;
        if (resultado < 18.5) {
            recebeResultado = `Seu imc ${resultado} e você está abaixo do peso`
        } else if (resultado >= 18.5 && resultado < 25) {
            recebeResultado = `Seu imc ${resultado} e você está com peso normal`
        } else if (resultado >= 25 && resultado < 30) {
            recebeResultado = `Seu imc ${resultado} e você está com sobrepeso`
        } else if (resultado >= 30 && resultado < 35) {
            recebeResultado = `Seu imc ${resultado} e você está com obesidade grau 1`
        } else if (resultado >=35 && resultado < 40) {
            recebeResultado = `Seu imc ${resultado} e você está com obesidade grau 2`
        } else if (resultado >= 40) {
            recebeResultado = `Seu imc ${resultado} e você está com obesidade grau 3`
        }

        retorno.innerHTML = `<p>${recebeResultado}</p>`
    };    

    form.addEventListener('submit', getForm);
}

imc()