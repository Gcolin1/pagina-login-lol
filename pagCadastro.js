const buttonCad = document.querySelector('.cadastro-button');
const inputCad = document.getElementById('input');

handleChangeCad = () => {
    const email = inputCad

    if(email.value.length >= 8 ){
        buttonCad.removeAttribute('disabled');
    }else{
        buttonCad.setAttribute('disabled', '');
    }
}

