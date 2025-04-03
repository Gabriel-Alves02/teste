import { EditarPerfil } from "../service/req_respManager.js";

const form = document.getElementById('customerForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validarFormulario()) {
        editarPerfil();
    } else {
        console.log("Formulário inválido. Corrija os erros antes de enviar.");
    }

    window.location.href = "../view/PerfilCliente.html";
});

function editarPerfil() {
    let objPerfilCliente =
    {
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        obs: document.getElementById('obs').value,
        redeSocial: document.getElementById('redeSocial').value
    }

    EditarPerfil(objPerfilCliente);
}

function validarFormulario() {

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
        document.getElementById('email').value = '';
    }
    else {
        if (emailusuario.value !== confirmacaoEmail.value) {
            msgconfirmacaoemail.style.display = 'inline-block';
            document.getElementById('confirmacaoEmail').value = '';
        }
    }

    if (!phonePattern.test(telefoneusuario.value)) {
        msgphone.style.display = 'inline-block';
        document.getElementById('telefone').value = '';
    }

}