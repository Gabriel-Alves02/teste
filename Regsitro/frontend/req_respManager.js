
const url_cliente = "http://127.0.0.1:8000/clientes";

/*EX: Só envio sem resposta */
// export const postCliente = (objUser) => {
//     return fetch(url + "/cadastro", {
//         method: "POST",
//         headers: {"Content-Type":"application/json"},
//         body: JSON.stringify(objUser)
//     })
// };

export const Cadastrar = async (objUser) => {

    const possuiHabilidades = Object.keys(objUser).some(key => key === "habilidades");

    let improviseAdaptOvercome = possuiHabilidades ? "/cadConsultor" : "/cadCliente";

    return await fetch(url_cliente + improviseAdaptOvercome, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(objUser)
    }).then((response) => {
        if (response.status == 200) {
            alert("Cadastro realizado com sucesso. Enviado e-mail para confirmação enviado");
        } else {
            console.log(`Erro do servidor: ${response.status}`);
        }
    })
};

export const getUser = async (objUser) => {
    return await fetch(url_cliente + '/login', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(objUser)
    }).then((response) => {
        if (response.status == 200) {
            location.replace("./Menu.html")
        } else {
            console.log(`Erro do servidor: ${response.status}`);
        }
    })
};

export const alterarDados = async (objDados) => {
    return await fetch(url_cliente + '/alterarDados', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(objDados)
    }).then((response) => {
        if (response.status == 200) {
            alert('Dados atualizados com sucesso!');
        } else {
            console.log(`Erro do servidor: ${response.status}`);
        }
    })
}

//Edição do perfil do cliente
export const EditarPerfil = async (objPerfil) => {
    return await fetch(url_cliente + '/editarPerfil', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(objPerfil)
    }).then((response) => {
        if (response.status == 200) {
            alert('Perfil atualizado com sucesso!');
        } else {
            console.log(`Erro do servidor: ${response.status}`);
        }
    })
}

//Registro de reunião
export const RegistrarReuniao = async (objRegistro) => {
    return await fetch(url_cliente + '/registrarReuniao', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(objRegistro)
    }).then((response) => {
        if (response.status == 200) {
            alert('Registro de reunião salvo com sucesso!');
        } else {
            console.log(`Erro do servidor: ${response.status}`);
        }
    })
}

export async function carregarRegistros(id) {

    try {
        const response = await fetch(url_consultores + `/registros/${id}`);
        const data = await response.json();

        if (data.success) {
            return data;
        } else {
            return null;
        }

    } catch (error) {
        console.error("Erro ao carregar registros:", error);
    }
}