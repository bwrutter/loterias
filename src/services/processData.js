export function calcularFrequenciaNumeros(resultados, concursoAtual, ultimosN) {
  const concursosFiltrados = resultados
    .filter(r => r.concurso <= concursoAtual && r.concurso > concursoAtual - ultimosN);

  console.log(`Concursos considerados: ${concursosFiltrados.map(r => r.concurso)}`);

  let frequencias = {};

  concursosFiltrados.forEach(sorteio => {
    sorteio.dezenas.forEach(num => {
      frequencias[num] = (frequencias[num] || 0) + 1;
    });
  });

  const frequenciaNumeros = Object.entries(frequencias).map(([num, vezes]) => ({
    numero: Number(num),
    vezes: vezes
  }));

  return frequenciaNumeros.sort((a, b) => b.vezes - a.vezes);
}
