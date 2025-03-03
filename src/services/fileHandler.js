import fs from 'fs/promises';

const FILE_PATH = 'data/data.json';

export async function readResults() {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.warn('Arquivo não encontrado, criando um novo.');
      return [];
    }
    console.error('Erro ao ler o arquivo:', err);
    return [];
  }
}

export async function saveResults(newData) {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(newData, null, 2));
    console.log('Dados atualizados em data.json');
  } catch (err) {
    console.error('Erro ao salvar os dados:', err);
  }
}
