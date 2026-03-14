import { CalculadoraPedido } from "./CalculadoraPedido";
import { ServicoEmail } from "../Servicos/Email";
import { CalculoImposto } from "../Imposto/CalculoImposto";
import { ProcessadorPagamento } from "../Pagamentos/ProcessadorPagamento";

export class PedidoService {

  ProcessarPedido(
    preco: number,
    quantidade: number,
    imposto: CalculoImposto,
    pagamento: ProcessadorPagamento,
    email: string
  ): void {

    const calculadora = new CalculadoraPedido();
    const emailServico = new ServicoEmail();

    let total = calculadora.calcularTotal(preco, quantidade);

    total += imposto.calcular(total);

    pagamento.processar(total);

    emailServico.enviarConfirmacao(email, total);

  }

}