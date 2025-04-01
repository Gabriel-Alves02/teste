var btnCadastro = document.getElementById("btnSalvar");
btnCadastro.addEventListener('click', editarPerfil);

function editarPerfil(event) {
    event.preventDefault();
    
    let emailusuario = document.getElementById('email');
    let confirmacaoEmail = document.getElementById('confirmacaoEmail');
    let telefoneusuario = document.getElementById('telefone');

    let msgemail = document.getElementById('msgemail');
    let msgconfirmacaoemail = document.getElementById('msgconfirmacaoemail');
    let msgphone = document.getElementById('msgphone');

    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var phonePattern = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    if (!emailPattern.test(emailusuario.value)) {
        msgemail.style.display = 'inline-block';
        document.getElementById('email').value='';
    }
    else {
        if (emailusuario.value !== confirmacaoEmail.value) {
            msgconfirmacaoemail.style.display = 'inline-block';
            document.getElementById('confirmacaoEmail').value='';
        }
    }

    if (!phonePattern.test(telefoneusuario.value)) {
        msgphone.style.display = 'inline-block';
        document.getElementById('telefone').value='';
    }

}
 
function limparE() {
    msgemail.style.display = 'none';
}

function limparCe() {
    msgconfirmacaoemail.style.display = 'none';
}

function limparT() {
    msgphone.style.display = 'none';
}