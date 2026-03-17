"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoCartao = void 0;
const ProcessadorPagamento_1 = require("./ProcessadorPagamento");
class PagamentoCartao {
    processar(valor) {
        console.log(`Processando cartão: R$ ${valor}`);
    }
}
exports.PagamentoCartao = PagamentoCartao;
//# sourceMappingURL=PagamentoCartao.js.map