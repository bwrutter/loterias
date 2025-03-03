import fs from 'fs/promises';
import api from './api.js';

export async function getResults() {
  const data = [];
  for (let i = 3300; i <= 3333; i++) {
    try {
      const response = await api.get(`lotofacil/${i}`);
      data.push(response.data);
      console.log(`Dados do sorteio ${i} recebidos.`);
      await new Promise(res => setTimeout(res, 5000)); // Delay de 5s
    } catch (error) {
      console.error(`Erro ao buscar o sorteio ${i}:`, error);
    }
  }

  await fs.writeFile('data/lotofacilData.json', JSON.stringify(data, null, 2));
  console.log('Dados salvos em lotofacilData.json');
}
