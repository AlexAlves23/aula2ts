import { CalculoImposto } from "./CalculoImposto";

export class ImpostoEletronico implements CalculoImposto {

  calcular(total: number): number {
    return total * 0.15;
  }

}