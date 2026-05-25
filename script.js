/**
 * PROJETO AGRINHO 2026 - SISTEMA DE INTERAÇÕES INTELIGENTES
 * Arquivo JavaScript separado e focado na manipulação limpa do DOM.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Mapeamento de Elementos do DOM (Melhor legibilidade e organização)
    const botaoTema = document.getElementById("btn-tema");
    const iconeTema = document.querySelector(".icone-tema");
    const textoTema = document.querySelector(".texto-tema");
    
    const btnCalcular = document.getElementById("btn-calcular");
    const inputHectares = document.getElementById("input-hectares");
    const containerResultado = document.getElementById("resultado-calculo");

    const btnFato = document.getElementById("btn-gerar-fato");
    const containerFato = document.getElementById("caixa-fato-dinamico");

    const formAgrinho = document.getElementById("form-agrinho");
    const feedbackForm = document.getElementById("feedback-formulario");

    // ==========================================================================
    // FUNCIONALIDADE 1: MODO ESCURO (Manipulação de Atributos)
    // ==========================================================================
    botaoTema.addEventListener("click", () => {
        // Captura o estado atual do tema no elemento raiz (HTML)
        const temaAtual = document.documentElement.getAttribute("data-tema");

        if (temaAtual === "dark") {
            document.documentElement.removeAttribute("data-tema");
            iconeTema.textContent = "🌙";
            textoTema.textContent = "Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-tema", "dark");
            iconeTema.textContent = "☀️";
            textoTema.textContent = "Modo Claro";
        }
    });

    // ==========================================================================
    // FUNCIONALIDADE 2: SIMULADOR MATEMÁTICO (Interação Extra)
    // ==========================================================================
    btnCalcular.addEventListener("click", () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples do número digitado
        if (isNaN(hectares) || hectares <= 0) {
            containerResultado.textContent = "⚠️ Por favor, digite um valor válido de hectares.";
            containerResultado.className = "resultado-visivel";
            containerResultado.style.borderLeftColor = "#e74c3c"; // Vermelho de erro
            return;
        }

        // Cálculos fictícios simulando dados ecológicos reais
        const litrosAguaEconomizados = hectares * 12500;
        const kgCarbonoRetidos = hectares * 450;

        // Injeta os dados formatados dinamicamente no HTML
        containerResultado.innerHTML = `
            <strong>Resultados para sua área de ${hectares} ha:</strong><br>
            💧 Economia de água estimada: <em>${litrosAguaEconomizados.toLocaleString('pt-BR')} litros</em> por safra.<br>
            📉 Redução de carbono: <em>${kgCarbonoRetidos.toLocaleString('pt-BR')} kg de CO₂</em> retidos no solo.
        `;
        
        containerResultado.className = "resultado-visivel";
        containerResultado.style.borderLeftColor = "var(--verde-principal)";