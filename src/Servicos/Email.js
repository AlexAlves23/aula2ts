"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoEmail = void 0;
class ServicoEmail {
    enviarConfirmacao(email, valor) {
        console.log(`Enviando email para ${email}: Seu pedido de R$ ${valor} foi confirmado!`);
    }
}
exports.ServicoEmail = ServicoEmail;
//# sourceMappingURL=Email.js.map