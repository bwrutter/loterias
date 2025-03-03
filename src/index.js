import { getResults } from './services/fetchResults.js';
import { readResults } from './services/fileHandler.js';
import { calcularFrequenciaNumeros } from './services/processData.js';

const CONCURSO_ATUAL = 3333; // Vai vir do front
const ULTIMOS_N = 10; // Quantidade de concursos pra traz do atual, vai vir do front

async function main() {
  let resultados = await readResults();

  let concursosSalvos = resultados.map(r => r.concurso);

  let concursosNecessarios = [];
  for (let i = CONCURSO_ATUAL; i > CONCURSO_ATUAL - ULTIMOS_N; i--) {
    if (!concursosSalvos.includes(i)) {
      concursosNecessarios.push(i);
    }
  }

  console.log(`Baixando os faltantes: ${concursosNecessarios}`);

  if (concursosNecessarios.length > 0) {
    await getResults(concursosNecessarios);
    resultados = await readResults();
  }

  const frequenciaNumeros = calcularFrequenciaNumeros(resultados, CONCURSO_ATUAL, ULTIMOS_N);
  console.log("Frequência de aparições dos números:", frequenciaNumeros.slice(0, 10));
}

main();
