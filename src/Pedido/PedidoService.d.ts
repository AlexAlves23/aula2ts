import { CalculoImposto } from "../Imposto/CalculoImposto";
import { ProcessadorPagamento } from "../Pagamentos/ProcessadorPagamento";
export declare class PedidoService {
    ProcessarPedido(preco: number, quantidade: number, imposto: CalculoImposto, pagamento: ProcessadorPagamento, email: string): void;
}
//# sourceMappingURL=PedidoService.d.ts.map