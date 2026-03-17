"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const CalculadoraPedido_1 = require("./CalculadoraPedido");
const Email_1 = require("../Servicos/Email");
const CalculoImposto_1 = require("../Imposto/CalculoImposto");
const ProcessadorPagamento_1 = require("../Pagamentos/ProcessadorPagamento");
class PedidoService {
    ProcessarPedido(preco, quantidade, imposto, pagamento, email) {
        const calculadora = new CalculadoraPedido_1.CalculadoraPedido();
        const emailServico = new Email_1.ServicoEmail();
        let total = calculadora.calcularTotal(preco, quantidade);
        total += imposto.calcular(total);
        pagamento.processar(total);
        emailServico.enviarConfirmacao(email, total);
    }
}
exports.PedidoService = PedidoService;
//# sourceMappingURL=PedidoService.js.map