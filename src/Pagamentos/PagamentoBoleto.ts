import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoBoleto implements ProcessadorPagamento {

  processar(valor: number): void {
    console.log(`Gerando boleto: R$ ${valor}`);
  }

}