interface Trabalhavel{
    trabalhar():void;
}

interface Registravel{
    registrarPonto():void;

}

interface Assalariado{
    receberSalario():void;
}

interface Programavel{
    escreverCodigo():void;
}

interface Gerenciavel {
    gerenciarEquipe():void;
}

interface Bolsa{
    bolsa():void;
}

interface SalarioProjeto {
    receberporProjeto():void;
}

class IDesenvolvedor implements Trabalhavel, Registravel, Assalariado, Programavel{
    trabalhar():void{console.log("Trabalhando");}
    registrarPonto():void {console.log("Registrando ponto");}
    receberSalario():void {console.log("Recebendo salario")}
    escreverCodigo():void {console.log("Programando")}
}

class IGerente implements Trabalhavel, Registravel, Assalariado{
    trabalhar(): void{console.log("Trabalhando");}
    registrarPonto(): void {console.log("Registrando");}
    receberSalario():void {console.log("Recebendo salario")}
    gerenciarEquipe():void {console.log("Gerenciando");}
    }


class Estagiario implements Trabalhavel, Registravel, Bolsa {
    trabalhar(): void { console.log("Trabalhando"); }
    registrarPonto(): void { console.log("Registrando ponto"); }
    bolsa(): void { console.log("Recebendo bolsa"); }
}

class SistemaRH {
    private funcionario:Trabalhavel & Registravel & Assalariado;

    constructor(funcionario: Trabalhavel & Registravel & Assalariado) {
        this.funcionario = funcionario;
    }

trabalhandoFuncionario():void{
    this.funcionario.trabalhar();
    this.funcionario.registrarPonto();
    this.funcionario.receberSalario();
}
}

class Freelancer implements Trabalhavel, Programavel, SalarioProjeto {
    trabalhar(): void { console.log("Trabalhando");}
    escreverCodigo(): void{console.log("Programando");}
    receberporProjeto(): void {console.log("Recebendo por projeto")}
}

const f1 = new SistemaRH(new IDesenvolvedor());
const f2 = new SistemaRH(new IGerente());

f1.trabalhandoFuncionario();
f2.trabalhandoFuncionario();