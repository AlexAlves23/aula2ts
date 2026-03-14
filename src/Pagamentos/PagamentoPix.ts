import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoPix implements ProcessadorPagamento {

  processar(valor: number): void {
    console.log(`Gerando PIX: R$ ${valor}`);
  }

}