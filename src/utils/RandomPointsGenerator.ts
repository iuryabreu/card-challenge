// A função dessa forma tem um efeito colateral indesejado 
// que é a 're-randomizacao' dos pontos quando o usuario
// compra  uma carta. É possivel corrigir esse problema
// utilizando um valor fixo para a geração dos pontos (baseado no ID por exemplo)
// porem isso fere o requisito de que os pontos devem ser aleatorios

export function RandomPointsGenerator(): number {
  const points = Math.random();

  if (points > 0.9) return Math.floor(points);

  return Math.round(points * 10);
}
