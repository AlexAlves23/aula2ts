import { SistemaBiblioteca } from "./SistemaBiblioteca";
import { EmailService } from "./Emails";


const emailService = new EmailService();
const biblioteca = new SistemaBiblioteca(emailService);

biblioteca.adicionarLivro("Clean Code", "Robert C. Martin", "123");
biblioteca.cadastrarUsuario("Ana", "ana@email.com", "ALUNO");

biblioteca.realizarEmprestimo("123", "ana@email.com");