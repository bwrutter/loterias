import { readResults, saveResults } from './fileHandler.js';
import api from './api.js';

export async function getResults(concursos) {
  let data = await readResults();

  for (let i of concursos) {
    if (data.some(d => d.concurso === i)) {
      console.log(`Concurso ${i} já existe no arquivo, pulando...`);
      continue;
    }

    try {
      const response = await api.get(`lotofacil/${i}`);
      data.push(response.data);
      console.log(`Dados do sorteio ${i} recebidos.`);
      await new Promise(res => setTimeout(res, 1000));
    } catch (error) {
      console.error(`Erro ao buscar o sorteio ${i}:`, error);
    }
  }

  await saveResults(data);
}
