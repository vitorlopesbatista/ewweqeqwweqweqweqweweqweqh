function calcularMCU() {
    // Obtenha os valores de entrada do usuário
    const raio = document.querySelector("raio").value;
    const velocidadeAngular = document.querySelector("velocidadeAngular").value;
    const tempo = document.querySelector("tempo").value;

    // Calcule o ângulo em radianos
    const theta = velocidadeAngular * tempo;

    // Calcule a posição, velocidade e aceleração
    const posicao = raio * Math.cos(theta);
    const velocidade = raio * velocidadeAngular;
    const aceleracao = raio * Math.pow(velocidadeAngular, 2);

    // Exiba os resultados na página
    document.querySelector("resultadoPosicao") = "Posição: " + posicao.toFixed(2);
    document.querySelector("resultadoVelocidade") = "Velocidade: " + velocidade.toFixed(2);
    document.querySelector("resultadoAceleracao") = "Aceleração: " + aceleracao.toFixed(2);
}
