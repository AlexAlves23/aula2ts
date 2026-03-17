"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoPix = void 0;
const ProcessadorPagamento_1 = require("./ProcessadorPagamento");
class PagamentoPix {
    processar(valor) {
        console.log(`Gerando PIX: R$ ${valor}`);
    }
}
exports.PagamentoPix = PagamentoPix;
//# sourceMappingURL=PagamentoPix.js.map