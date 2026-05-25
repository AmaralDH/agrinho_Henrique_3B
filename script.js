/**
 * Projeto BioAgro - Script de Controle de Atmosfera e Validação Dinâmica
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // Cache de Seletores (Melhor performance)
    const domElements = {
        themeBtn: document.getElementById("theme-switcher"),
        themeBtnIcon: document.querySelector("#theme-switcher .icon"),
        themeBtnText: document.querySelector("#theme-switcher .text-btn"),
        exploreBtn: document.getElementById("btn-explorar"),
        factBox: document.getElementById("box-fato-curioso"),
        formNews: document.getElementById("form-premium-newsletter"),
        formStatus: document.getElementById("msg-status-form"),
        inputName: document.getElementById("input-name"),
        inputEmail: document.getElementById("input-email")
    };

    // Banco de dados interno para a mensagem dinâmica
    const fatosSustentaveis = [
        "🌱 A agricultura de precisão reduz o consumo de combustível dos tratores em até 15%, limpando o ar do campo.",
        "🛰️ Sensores de satélite hoje conseguem prever pragas antes que elas se espalhem, eliminando o uso massivo de defensivos.",
        "🔄 O plantio direto na palha evita que toneladas de CO2 sejam liberadas do solo de volta para a atmosfera."
    ];

    let indiceFato = 0;

    // ==========================================
    // INTERAÇÃO: MUDANÇA DE ATMOSFERA (DARK MODE)
    // ==========================================
    domElements.themeBtn.addEventListener("click", () => {
        const activeAtmosphere = document.documentElement.getAttribute("data-atmosphere");
        
        if (activeAtmosphere === "dark") {
            document.documentElement.removeAttribute("data-atmosphere");
            domElements.themeBtnIcon.textContent = "🌙";
            domElements.themeBtnText.textContent = "Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-atmosphere", "dark");
            domElements.themeBtnIcon.textContent = "☀️";
            domElements.themeBtnText.textContent = "Modo Claro";
        }
    });

    // ==========================================
    // INTERAÇÃO: CONTEÚDO DINÂMICO ROTATIVO
    // ==========================================
    domElements.exploreBtn.addEventListener("click", () => {
        // Altera o texto de forma rotativa a cada clique no botão
        domElements.factBox.textContent = fatosSustentaveis[indiceFato];
        
        // Altera as classes para disparar animação de transição CSS
        domElements.factBox.className = "fact-box-style";
        
        // Atualiza o índice do vetor para o próximo clique
        indiceFato = (indiceFato + 1) % fatosSustentaveis.length;

        // Feedback sutil no botão de ação
        domElements.exploreBtn.textContent = "Ver Próximo Dado";
    });

    // ==========================================
    // VALIDAÇÃO E EVENTO DO FORMULÁRIO
    // ==========================================
    domElements.formNews.addEventListener("submit", (e) => {
        e.preventDefault();

        const nomeCompleto = domElements.inputName.value.trim();
        const emailCorporativo = domElements.inputEmail.value.trim();

        // Validação básica de preenchimento estrutural
        if (!nomeCompleto || !emailCorporativo) {
            exibirStatus("⚠️ Por favor, informe seus dados de acesso.", "#e74c3c");
            return;
        }

        // Regex avançada para validação de e-mail padrão
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailCorporativo)) {
            exibirStatus("⚠️ O formato do e-mail institucional não é válido.", "#e74c3c");
            return;
        }

        // Simulação de envio com sucesso
        exibirStatus(`✨ Conexão estabelecida! Bem-vindo ao hub, ${nomeCompleto.split(' ')[0]}.`, "#ffffff");
        
        // Reset estético e funcional do formulário
        domElements.formNews.reset();
    });

    /**
     * Função auxiliar para renderizar o status de validação do formulário
     */
    function exibirStatus(mensagem, corTexto) {
        domElements.formStatus.textContent = mensagem;
        domElements.formStatus.style.color = corTexto;
        
        // Faz sumir o feedback após 5 segundos para limpar a tela
        setTimeout(() => {
            domElements.formStatus.textContent = "";
        }, 5000);
    }
});