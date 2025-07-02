function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value );
    var imc = peso / (altura * altura);

    var mensagem = "";

    if (imc < 18.5) {
        mensagem = "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensagem = "Você está com peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        mensagem = "Você está com sobrepeso.";
    } else {
        mensagem = "Você está obeso.";
    }

    var resultado = document.getElementById("resultado");         // Obtém o elemento onde o resultado será exibido
    resultado.innerHTML = "";                                       // Limpa o conteúdo anterior do elemento resultado
    resultado.innerHTML += `
        <h2>Seu IMC: ${imc.toFixed(2)}</h2>
        <p>${mensagem}</p>
        <p>Para calcular o IMC, use a fórmula: IMC = Peso (kg) / (Altura (m) * Altura (m))</p>
        <p>Exemplo: Se você pesa 70 kg e tem 1.75 m de altura, o cálculo seria: IMC = 70 / (1.75 * 1.75) = ${imc.toFixed(2)}</p>
        <p>Para mais informações, consulte o site do <a href="https://www.inca.gov.br/">Instituto Nacional de Câncer (INCA)</a>.</p>
        <p>Você pode também consultar o <a href="https://www.who.int/">Organização Mundial da Saúde (OMS)</a> para mais informações sobre saúde e nutrição.</p>
        <p>Obrigado por usar nossa calculadora de IMC!</p>
    `;

    document.getElementById("peso").value = "";                                             // Limpa o campo de peso
    document.getElementById("altura").value = "";                                            // Limpa o campo de altura
    document.getElementById("peso").focus();                                                 // Foca no campo de peso


  
}