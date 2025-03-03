import LoteriasService from './fetchResults.js';

async function testLoteriasService() {
  try {
    const results = await LoteriasService.getResults();

    console.log("Resultados recebidos");
  } catch (error) {
    console.error("Erro ao chamar o LoteriasService:", error);
  }
}

testLoteriasService();
