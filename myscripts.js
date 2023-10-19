function calcularMCU() {
    // Obtenha os valores de entrada do usuário
    var raio = parseFloat(document.getElementById("raio").value);
    var velocidadeAngular = parseFloat(document.getElementById("velocidadeAngular").value);
    var tempo = parseFloat(document.getElementById("tempo").value);

    // Calcule o ângulo em radianos
    var theta = velocidadeAngular * tempo;

    // Calcule a posição, velocidade e aceleração
    var posicao = raio * Math.cos(theta);
    var velocidade = raio * velocidadeAngular;
    var aceleracao = raio * Math.pow(velocidadeAngular, 2);

    // Exiba os resultados na página
    document.getElementById("resultadoPosicao").innerHTML = "Posição: " + posicao.toFixed(2);
    document.getElementById("resultadoVelocidade").innerHTML = "Velocidade: " + velocidade.toFixed(2);
    document.getElementById("resultadoAceleracao").innerHTML = "Aceleração: " + aceleracao.toFixed(2);
}