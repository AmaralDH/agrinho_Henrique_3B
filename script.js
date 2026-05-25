// Aguarda o DOM estar completamente carregado para executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // SELEÇÃO DE ELEMENTOS DO DOM
    // ==========================================
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    const msgDinamica = document.getElementById("mensagem-dinamica");
    const formContato = document.getElementById("form-contato");
    const formFeedback = document.getElementById("form-feedback");

    // ==========================================
    // FUNCIONALIDADE: MODO ESCURO (DARK MODE)
    // ==========================================
    btnDarkMode.addEventListener("click", () => {
        // Verifica o tema atual no atributo customizado do HTML
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            // Remove o tema escuro (volta para o claro)
            document.documentElement.removeAttribute("data-theme");
            btnDarkMode.textContent = "🌓 Modo Escuro";
        } else {
            // Atribui o tema escuro
            document.documentElement.setAttribute("data-theme", "dark");
            btnDarkMode.textContent = "☀️ Modo Claro";
        }
    });

    // ==========================================
    // FUNCIONALIDADE: MENSAGEM DINÂMICA (INTERAÇÃO)
    // ==========================================
    btnSaibaMais.addEventListener("click", () => {
        // Altera o texto de forma dinâmica
        msgDinamica.textContent = "💡 Você sabia? O Brasil é um dos líderes globais no uso de tecnologias biológicas para a proteção de lavouras!";
        
        // Remove a classe hidden para disparar a transição CSS (fade-in)
        msgDinamica.classList.remove("hidden");
        
        // Desabilita o botão temporariamente com efeito visual
        btnSaibaMais.style.opacity = "0.5";
        btnSaibaMais.textContent = "Obrigado por ler!";
        btnSaibaMais.disabled = true;
    });

    // ==========================================
    // FUNCIONALIDADE: VALIDAÇÃO DE FORMULÁRIO SIMPLES
    // ==========================================
    formContato.addEventListener("submit", (event) => {
        // Previne o comportamento padrão de recarregar a página
        event.preventDefault();

        // Captura os valores dos campos limpando espaços em branco
        const nomeValue = document.getElementById("nome").value.trim();
        const emailValue = document.getElementById("email").value.trim();

        // Validação simples de preenchimento
        if (nomeValue === "" || emailValue === "") {
            formFeedback.textContent = "⚠️ Por favor, preencha todos os campos.";
            formFeedback.style.color = "#e74c3c"; // Vermelho de erro
            return;
        }

        // Validação Regex básica de formato de e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            formFeedback.textContent = "⚠️ Insira um formato de e-mail válido (ex: nome@email.com).";
            formFeedback.style.color = "#e74c3c";
            return;
        }

        // Se passar nas validações: exibe mensagem de sucesso
        formFeedback.textContent = `🎉 Sucesso! Obrigado por se inscrever, ${nomeValue}.`;
        formFeedback.style.color = "#27ae60"; // Verde de sucesso

        // Limpa os campos do formulário após o envio bem-sucedido
        formContato.reset();
    });
});