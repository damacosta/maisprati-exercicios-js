const prompt = require('../utils/prompt');

// Exercício 4 - Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

let input = (Number(prompt(
    "=== MENU DE CONVERSÕES ===\n" +
    "1 - Converter Celsius para Fahrenheit\n" +
    "2 - Converter Metros para Centímetros\n" +
    "3 - Converter Quilogramas para Gramas\n" +
    "Escolha uma opção (1, 2 ou 3): "
)))

switch (input) {
    case 1:
        let celsius = Number(prompt("Digite o valor da temperatura em Celsius: ").replace(",", "."))
        let fahrenheit = (celsius * 9/5) + 32
        console.log(`🌡️  ${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F.`)
        break

    case 2:
        let metros = Number(prompt("Digite o valor em metros para converter em centímetros: ").replace(",", "."))
        let centimetros = metros * 100
        console.log(`📏 ${metros} metros equivalem a ${centimetros.toFixed(2)} centimetros.`)
        break

    case 3:
        let quilogramas = Number(prompt("Digite o valor dos quilogramas: ").replace(",", "."))
        let gramas = quilogramas * 1000
        console.log(`⚖️  ${quilogramas} kg equivalem a ${gramas.toFixed(2)} gramas.`)
        break

    default:
        console.log("❌ Opção inválida. Por favor, escolha entre 1, 2 ou 3.")
}