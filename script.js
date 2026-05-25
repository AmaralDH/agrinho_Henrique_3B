// Aguarda o DOM estar totalmente carregado para executar os scripts
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CONTROLE DO MODO ESCURO (Dark Mode)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Inicializa o texto do botão de acordo com o estado do tema
    themeToggleBtn.textContent = '🌙 Modo Escuro';

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
        
        // Altera visualmente o botão baseado no estado ativo
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            themeToggleBtn.textContent = '🌙 Modo Escuro';
        }
    });

    /* ==========================================================================
       2. MENSAGEM DINÂMICA (Ação do Botão Hero CTA)
       ========================================================================== */
    const ctaBtn = document.getElementById('cta-btn');
    const dynamicMessageSection = document.getElementById('dynamic-message');
    const dynamicText = document.getElementById('dynamic-text');
    const closeMsgBtn = document.getElementById('close-msg');

    // Array de fatos dinâmicos sobre o agro sustentável
    const fatosSustentaveis = [
        "💡 Sabia que a agricultura de precisão pode reduzir em até 30% o consumo de água no campo?",
        "🌱 O plantio direto evita a erosão do solo e mantém o carbono estocado na terra.",
        "🚜 O uso de bioinsumos cresce a cada ano, substituindo defensivos químicos por soluções naturais.",
        "☀️ Fazendas solares já alimentam sistemas de irrigação inteiros no Brasil de forma 100% limpa."
    ];

    ctaBtn.addEventListener('click', () => {
        // Sorteia uma mensagem aleatória do array
        const randomIndex = Math.floor(Math.random() * fatosSustentaveis.length);
        dynamicText.textContent = fatosSustentaveis[randomIndex];
        
        // Remove a classe oculta exibindo a área com a animação CSS
        dynamicMessageSection.classList.remove('hidden');
    });

    closeMsgBtn.addEventListener('click', () => {
        dynamicMessageSection.classList.add('hidden');
    });

    /* ==========================================================================
       3. VALIDAÇÃO SIMPLES DE FORMULÁRIO (Captura de Leads)
       ========================================================================== */
    const leadForm = document.getElementById('lead-form');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    
    const errorNome = document.getElementById('error-nome');
    const errorEmail = document.getElementById('error-email');
    const successBox = document.getElementById('form-success');

    leadForm.addEventListener('submit', (event) => {
        // Previne o envio padrão do formulário que recarregaria a página
        event.preventDefault();
        
        let isValid = true;

        // Validação do campo Nome (Não pode estar vazio)
        if (inputNome.value.trim() === "") {
            errorNome.style.display = "block";
            inputNome.style.borderColor = "var(--danger-color)";
            isValid = false;
        } else {
            errorNome.style.display = "none";
            inputNome.style.borderColor = "var(--primary-color)";
        }

        // Validação do campo E-mail (Regex básico estrutural)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail.value.trim())) {
            errorEmail.style.display = "block";
            inputEmail.style.borderColor = "var(--danger-color)";
            isValid = false;
        } else {
            errorEmail.style.display = "none";
            inputEmail.style.borderColor = "var(--primary-color)";
        }

        // Caso todos os campos passem na validação
        // Caso todos os campos passem na validação
        if (isValid) {
            // Captura o primeiro nome para uma saudação personalizada
            const primeiroNome = inputNome.value.trim().split(' ')[0];
            
            // Define o texto de sucesso dinamicamente
            successBox.innerHTML = `<strong>🎉 Sucesso, ${primeiroNome}!</strong> Sua inscrição foi realizada. Em breve você receberá nossos relatórios.`;
            
            // Exibe a caixa de sucesso na tela
            successBox.style.display = "block";
            
            // Limpa os dados digitados no formulário
            leadForm.reset();
            
            // Restaura as cores padrão das bordas dos inputs pós-envio
            inputNome.style.borderColor = "";
            inputEmail.style.borderColor = "";

            // Oculta a mensagem de sucesso automaticamente após 5 segundos
            setTimeout(() => {
                successBox.style.display = "none";
            }, 5000);
        }
    });
});