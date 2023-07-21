// A classe Funcionario é a classe abstrata
class Funcionario {
    constructor(nome, salario) {
      if (new.target === Funcionario) {
        throw new TypeError("Não pode instanciar a classe Funcionario diretamente, pois ela é abstrata");
      }
      
      this.nome = nome;
      this.salario = salario;
    }
    
    // Este método precisa ser implementado em cada subclasse
    getSalario() {
      throw new Error("Método 'getSalario' deve ser implementado na subclasse");
    }
  }
  
  // A classe Gerente é uma subclasse de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, salario) {
      super(nome, salario);
      this.bonus = 0.2;
    }
    
    // Implementa o método getSalario para a classe Gerente
    getSalario() {
      return this.salario + (this.salario * this.bonus);
    }
  }
  
  // A classe Programador é uma subclasse de Funcionario
  class Programador extends Funcionario {
    constructor(nome, salario) {
      super(nome, salario);
    }
    
    // Implementa o método getSalario para a classe Programador
    getSalario() {
      return this.salario;
    }
  }
  
  // Criação de instâncias das classes Gerente e Programador
  let gerente1 = new Gerente("Carlos", 12500);
  let programador1 = new Programador("Lucas", 3000);
  let programador2 = new Programador("Ana", 4500);
  
  // Exibe os salários dos funcionários
  console.log(gerente1.getSalario()); // 15000
  console.log(programador1.getSalario()); // 3000
  console.log(programador2.getSalario()); // 4500
  