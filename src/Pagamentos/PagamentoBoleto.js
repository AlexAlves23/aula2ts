"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoBoleto = void 0;
const ProcessadorPagamento_1 = require("./ProcessadorPagamento");
class PagamentoBoleto {
    processar(valor) {
        console.log(`Gerando boleto: R$ ${valor}`);
    }
}
exports.PagamentoBoleto = PagamentoBoleto;
//# sourceMappingURL=PagamentoBoleto.js.map