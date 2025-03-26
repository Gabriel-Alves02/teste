var btnCadastro = document.getElementById("btnCadastrar");
btnCadastro.addEventListener('click', cadastrar);

function cadastrar(event) {
    event.preventDefault();
    
    let nomeusuario = document.getElementById('nome');
    let emailusuario = document.getElementById('email');
    let telefoneusuario = document.getElementById('telefone');
    let nicknameusuario = document.getElementById('nickname');
    let senhausuario = document.getElementById('senha');
    let cpf_cnpj = document.getElementById('cpf_cnpj');

    let msgnome = document.getElementById('msgnome');
    let msgemail = document.getElementById('msgemail');
    let msgphone = document.getElementById('msgphone');
    let msgnickname = document.getElementById('msgnickname');
    let msgsenha = document.getElementById('msgsenha');
    let msgcpf = document.getElementById('msgcpf');
    let msgcnpj = document.getElementById('msgcnpj');

    var nomePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var phonePattern = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    var nicknamePattern = /^\S+$/;

    if (!nomePattern.test(nomeusuario.value)) {
        msgnome.style.display = 'inline-block';
        document.getElementById('nome').value='';
    }
    
    if (!emailPattern.test(emailusuario.value)) {
        msgemail.style.display = 'inline-block';
        document.getElementById('email').value='';
    }

    if (!phonePattern.test(telefoneusuario.value)) {
        msgphone.style.display = 'inline-block';
        document.getElementById('telefone').value='';
    }

    if (!nicknamePattern.test(nicknameusuario.value)) {
        msgnickname.style.display = 'inline-block';
        document.getElementById('nickname').value='';
    }

    if (testeSenha(senhausuario.value) === false) {
        msgsenha.style.display = 'inline-block';
        document.getElementById('senha').value='';
    }

    cpf_cnpj.value = cpf_cnpj.value.replace(/\D/g, '');

    if (cpf_cnpj.value.length === 11) {
        if (!validacaoCpf(cpf_cnpj.value)) {
            msgcpf.style.display = 'inline-block';
            document.getElementById('cpf_cnpj').value='';
        }
    }
    else if (cpf_cnpj.value.length === 14) {
        if (!validacaoCnpj(cpf_cnpj.value)) {
            msgcnpj.style.display = 'inline-block';
            document.getElementById('cpf_cnpj').value='';
        }
    }

}
 

function limparN() {
    msgnome.style.display = 'none';
}

function limparE() {
    msgemail.style.display = 'none';
}

function limparT() {
    msgphone.style.display = 'none';
}

function limparNi() {
    msgnickname.style.display = 'none';
}

function limparS() {
    msgsenha.style.display = 'none';
}

function limparC() {
    msgcpf.style.display = 'none';
    msgcnpj.style.display = 'none';
}

function testeSenha(senhausuario) {
    for (let i = 0; i < senhausuario.length - 1; i++) {
        const currentChar = senhausuario[i];
        const nextChar = senhausuario[i + 1];

        if (Number(currentChar) + 1 === Number(nextChar)) {
            return false;
        }

        if (currentChar.charCodeAt(0) + 1 === nextChar.charCodeAt(0)) {
            return false;
        }
    }
    return true;
}


function validacaoCpf(cpf_cnpj) {
    var soma9 = multiplicarCpf(9, cpf_cnpj, 10);
    var soma10 = multiplicarCpf(10, cpf_cnpj, 11);
    var result1 = digitoVerificadorCpf(soma9);
    var result2 = digitoVerificadorCpf(soma10);

    if (/^(\d)\1{10}$/.test(cpf_cnpj)) {
        return false;
    }

    if ((result1 + result2) === cpf_cnpj.substr(9, 2)) {
        return true;
    }
    else {
        return false;
    }
}

function validacaoCnpj(cpf_cnpj) {
    var soma12 = multiplicarCnpj(cpf_cnpj, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    var soma13 = multiplicarCnpj(cpf_cnpj, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    var result1 = digitoVerificadorCnpj(soma12);
    var result2 = digitoVerificadorCnpj(soma13);

    if (/^(\d)\1{13}$/.test(cpf_cnpj)) {
        return false;
    }

    if ((result1 + result2) === cpf_cnpj.substr(12, 2)) {
        return true;
    }
    else {
        return false;
    }
}

function digitoVerificadorCpf(soma) {
    var result = (soma * 10) % 11;
    return result.toString();
}

function multiplicarCpf(qtdeNumeros, cpf_cnpj, multiplicador) {
    var primeirosDigitos = cpf_cnpj.substr(0, qtdeNumeros);
    var soma = 0;

    for (var i = 0; i < primeirosDigitos.length; i++) {
        var numero = primeirosDigitos.substr(i, 1);
        soma += numero * multiplicador;
        multiplicador--;
    }

    return soma;
}

function multiplicarCnpj(cpf_cnpj, multiplicadores) {
    var primeirosDigitos = cpf_cnpj.substr(0, multiplicadores.length);
    var soma = 0;

    for (var i = 0; i < primeirosDigitos.length; i++) {
        var numero = primeirosDigitos.substr(i, 1);
        soma += numero * multiplicadores[i];
    }

    return soma;
}

function digitoVerificadorCnpj(soma) {
    var result = soma % 11;
    if (result< 2) {
        return '0';
    }
    else {
        result = 11 - result;
        return result.toString();
    };
}