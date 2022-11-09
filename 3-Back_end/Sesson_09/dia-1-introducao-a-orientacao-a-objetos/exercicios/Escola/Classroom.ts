export default class Classroom {
  matricula: number;
  nome: string;
  provas: number[];
  trabalhos: number[];

  constructor (m: number, n: string, p: number[], t: number[]) {
    this.matricula = m;
    this.nome = n;
    this.provas = p;
    this.trabalhos = t;
  }

  somaNotas() {
    let soma = 0;

    for (let index = 0; index < this.provas.length; index += 1) {
      soma += this.provas[index]
    }

    for (let index = 0; index < this.trabalhos.length; index += 1) {
      soma += this.trabalhos[index]
    }

    return soma;
  }

  mediaNotas() {
    const soma = this.somaNotas();
    const numDeNotas = this.provas.length + this.trabalhos.length;
    const media = soma / numDeNotas;

    return media;
  }
}