import Classroom from "./Classroom";

const matriculaKauan = new Classroom(1, 'Kauan', [10, 10, 10, 10], [10, 10]);

console.log(`Soma das Notas: ${matriculaKauan.somaNotas()}`);

console.log(`Média: ${matriculaKauan.mediaNotas()}`);