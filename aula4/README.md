Alex Alves

P1

code smells

1- classe com muitas responsabilidades
onde: Classe SistemaBiblioteca
problema: A classe realiza varias funções (gerenciamento de livros, usuários, empréstimos, envio de e-mails e relatórios), dificultando a manutenção e aumenta o aclopamento

2- falta de clareza nos dados
onde: arrays (string[][]) e no uso de índices nos métodos, como realizarEmprestimo, gerarRelatorio e calcularMulta
problema: dados acessados por índices dificultando a leitura, manutenção e aumenta chances de erro

3- uso excessivos de if/else
onde: método realizarEmprestimos, em limite de empréstimos
problema: se surgir novos tipos de usuários, terá que incluir mais condições excessivas

4- método muito longo com muitas responsabilidades
onde: realizarEmprestimo
problema: método realiza diversas tarefas, dificultando de entender, manter e testar o código
5- repetição de códigos
onde: nos laços for utilizados para buscar livros e usuários (for(const l of this.livros) e for(const u of this.usuarios))
problema: repetição de códigos dificulta a manutenção, pois qualquer alteração precisa ser feita em vários lugares

6- uso de valores fixos
onde: em diversas partes, como verificação de status e tipos de usuários
problema: valores espalhados, dificultando a manutenção e aumentando o risco de erros
-----------------------------------------------------

P2
God Class => Extract Class
Separação das responsabilidades
- Livros
- Emprestimos
- Usuarios
- Relatorio
- Email

Feature Envy → Move Method

A lógica de limite foi movida para a classe Usuario:

Método getLimite()

Long Method → Extract Method

O método realizarEmprestimo foi dividido em:

validarEmprestimo()
processarEmprestimo()
registrarEmprestimo()

Primitive Obsession → Replace Primitive with Object

Substituição de arrays por objetos:

Livro
Usuario
Emprestimo

Duplicate Code → Extract Method

Criação de métodos reutilizáveis:

buscarLivro()
buscarUsuario() }