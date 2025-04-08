let cliente = 'SuperTech';
let data = '07/04/2025';
let topicosTratados = 'Vendas, marketing e suas influências.';
let solucoesPropostas = 'Aumentar as campanhas de marketing nas redes sociais.';
let infoSolicitadas = 'Relatório de vendas deste mês.';

document.getElementById('titulo').innerHTML = `Reunião com ${cliente}, realizada em ${data}`;

document.getElementById('topicosTratados').innerHTML = topicosTratados;
document.getElementById('solucoesPropostas').innerHTML = solucoesPropostas;
document.getElementById('infoSolicitadas').innerHTML = infoSolicitadas;