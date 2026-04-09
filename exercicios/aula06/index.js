// Exercício 1 — criarSaudacao
export function criarSaudacao(nome) {
  return `Olá, ${nome}!`;
}

// Exercício 2 — filtrarAprovados
export function filtrarAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 60);
}

// Exercício 3 — extrairNomes
export function extrairNomes(alunos) {
  return alunos.map(aluno => aluno.nome);
}

// Exercício 4 — buscarAluno
export function buscarAluno(alunos, nome) {
  return alunos.find(aluno => aluno.nome === nome);
}

// Exercício 5 — calcularMedia
export function calcularMedia(notas) {
  if (notas.length === 0) {
    return 0;
  }

  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

