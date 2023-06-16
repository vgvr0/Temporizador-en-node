const readline = require('readline');

function iniciarTemporizador(minutos, segundos) {
  let tiempoRestante = minutos * 60 + segundos;
  const intervalo = setInterval(() => {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    console.log(`Tiempo restante: ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
    tiempoRestante--;

    if (tiempoRestante < 0) {
      clearInterval(intervalo);
      console.log('¡Tiempo completado!');
    }
  }, 1000);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Minutos: ', (minutos) => {
  rl.question('Segundos: ', (segundos) => {
    iniciarTemporizador(parseInt(minutos), parseInt(segundos));
    rl.close();
  });
});
