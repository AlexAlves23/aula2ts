import { Livros } from "./Livros";
import { Usuario } from "./Usuario";

export class Emprestimo {
  calcularMulta(): number {
      throw new Error("Method not implemented.");
  }
  constructor(
    public livro: Livros,
    public usuario: Usuario,
    public dataEmprestimo: Date,
    public dataDevolucao: Date,
    public status: "ATIVO" | "FINALIZADO" = "ATIVO"
  ) {}
}