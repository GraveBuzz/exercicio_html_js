const form = document.getElementById('form-exercicio');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroTotalA = Number(document.getElementById('campoA').value);
    const numeroTotalB = Number(document.getElementById('campoB').value);
    let formEValido = false;
    const mensagemSucesso = `Certo, o valor de B (<b>${numeroTotalB}</b>) é maior que o valor de A (<b>${numeroTotalA}</b>)`;
    const mensagemError = `O valor de B precisa ser maior que o valor de A`;

    function validaNumero(numeroTotalA, numeroTotalB){
        return numeroTotalA < numeroTotalB;
    }

        const containerMensagemSucesso = document.querySelector('.success-message');
        const containerMensagemError = document.querySelector('.error-menssage');
    formEValido = validaNumero(numeroTotalA, numeroTotalB);
    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemError.style.display = 'none';
        
    }
    else {
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

    }
});