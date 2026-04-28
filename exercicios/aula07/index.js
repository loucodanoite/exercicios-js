// Exercício 1 — objetoParaJSON
export function objetoParaJSON(objeto) {
  return JSON.stringify(objeto)
}
// Exercício 2 — jsonParaObjeto
export function jsonParaObjeto(texto) {
  return JSON.parse(texto)
}

// Exercício 3 — clonarObjeto
export function clonarObjeto(objeto) {
  return JSON.parse(JSON.stringify(objeto))
}

// Função auxiliar (já existe no arquivo)
// NÃO MEXER
function simularConsulta(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: `Aluno ${id}`, cidade: 'Salinas' })
    }, 100)
  })
}

// Exercício 4 — buscarDados
export async function buscarDados(id) {
  const resultado = await simularConsulta(id)
  return resultado
}

// Exercício 5 — dividirSeguro
export async function dividirSeguro(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero')
  }
  return a / b
}
