const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const subtotal = preco * quantidade

if(quantidade<=estoque) {
   estoqueDisponivel = "Sim"
} else {
    estoqueDisponivel = "estoque insuficiente"
}
let descontoPercentual = 0
if(subtotal>=1000) {
   descontoPercentual = 10
} else {
    descontoPercentual =0
}
const valorDesconto = (subtotal * descontoPercentual) /100
const valorFinal = subtotal - valorDesconto

if(valorPago>=valorFinal) {
   pagamentoStatus = "Pagamento aprovado"
   troco = valorPago - valorFinal
} else {
    pagamentoStatus = "pagamento insuficiente"
    troco = 0
}
let statusPedido =  "Pedido disponível para finalização"
if (quantidade<=estoque) {
   estoqueDisponivel = "Sim"
} else {
   estoqueDisponivel = "Pedido não pode ser finalizado por falta de estoque"
}
const resumo = `
cliente: ${cliente}
produto: ${produto}
preco: ${preco}
quantidade: ${quantidade}
subtotal: ${subtotal}
desconto: ${descontoPercentual}
valor do desconto: ${valorDesconto}
valor final: ${valorFinal}
estoqueDisponivel: ${estoqueDisponivel}
valor pago: ${valorPago}
situação do pagamento: ${pagamentoStatus}
troco: ${troco}
situação do pedido: ${statusPedido}`
console.log(resumo)

module.exports = {
cliente,
produto,
preco,
quantidade,
estoque,
valorPago,
subtotal,
estoqueDisponivel,
descontoPercentual,
valorDesconto,
valorFinal,
pagamentoStatus,
troco,
statusPedido,
resumo
}



