import { EditarPerfil } from "../service/req_respManager.js";

const form = document.getElementById('customerForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let objPerfilCliente = 
    {
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        obs: document.getElementById('obs').value,
        redeSocial: document.getElementById('redeSocial').value
    }

    EditarPerfil(objPerfilCliente);
});