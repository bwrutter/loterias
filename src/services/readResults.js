import { readFile } from 'fs/promises';

let resultados;

async function readFileAsync() {
  try {
    const data = await readFile('lotofacilData.json', 'utf8');

    resultados = JSON.parse(data);

    extrairDezenas(resultados)
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
}

function extrairDezenas(resultados) {
  let dezenas = [];

  for (let i = 0; i < resultados.length; i++) {
    dezenas.push(resultados[i].dezenas);
  }

  extrairNumeros(dezenas)
}

function extrairNumeros(dezenas) {
  let numeros = [];

  for (let i = 0; i < dezenas.length; i++) {
    numeros.push(...dezenas[i]);
  }

  let contagem = {};

  numeros.forEach(num => {
    contagem[num] = (contagem[num] || 0) + 1;
  });

  let numerosOrdenados = Object.entries(contagem)
    .sort((a, b) => b[1] - a[1])
    .map(entry => ({ numero: Number(entry[0]), vezes: entry[1] }));

  console.log("Números mais frequentes:", numerosOrdenados);
  return numerosOrdenados;
}

readFileAsync();
