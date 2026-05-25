/**
 * Projeto AgroSphere — Script oficial para o Concurso Agrinho 2026
 * Funcionalidades: Dark Mode Inteligente, Simulador do DOM e Validação Estruturada.
 */
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MAPEAMENTO DE ELEMENTOS (CACHE DO DOM)
    // ==========================================
    const elements = {
        darkModeBtn: document.getElementById("dark-mode-toggle"),
        modeIcon: document.querySelector(".mode-icon"),
        modeText: document.querySelector(".mode-text"),
        btnKnowledge: document.getElementById("btn-conhecimento"),
        factBox: document.getElementById("dynamic-fact-box"),
        simButtons: document.querySelectorAll(".btn-sim"),
        simTitle: document.getElementById("sim-title"),
        simDesc: document.getElementById("sim-description"),
        mProd: document.getElementById("metric-prod"),
        mWater: document.getElementById("metric-water"),
        mCarbon: document.getElementById("metric-carbon"),
        contactForm: document.getElementById("agro-contact-form"),
        formAlert: document.getElementById("form-message-alert")
    };

    // ==========================================
    // 2. BANCO DE DADOS LOCAL (CONTEÚDO DINÂMICO)
    // ==========================================
    const fatosAgrinho = [
        "🚜 Sabia que drones reduzem o uso de agroquímicos em até 80% focando apenas nas plantas doentes?",
        "☀️ O Paraná é um dos estados que mais investe em energia solar nas propriedades rurais.",
        "🐛 O uso de pequenas vespas biológicas substitui pesticidas e protege nossa fauna local."
    ];
    let indexFato = 0;

    // Banco de dados para o Simulador Interativo
    const dadosSimulador = {
        convencional: {
            title: "Agricultura Tradicional",
            desc: "Uso intenso de maquinário sem mapeamento e pulverização em área total.",
            prod: "+5%", water: "0%", carbon: "+20%",
            classes: ["color-green", "color-blue", "color-orange"]
        },
        precisao: {
            title: "Tecnologia de Precisão",
            desc: "Uso de sensores, IA e drones para aplicar água e insumos no local exato.",
            prod: "+25%", water: "40%", carbon: "-15%",
            classes: ["color-green", "color-blue", "color-orange"]
        },
        regenerativa: {
            title: "Manejo Regenerativo",
            desc: "Plantio direto na palha, rotação de culturas e bioinsumos florestais.",
            prod: "+18%", water: "55%", carbon: "-40%",
            classes: ["color-green", "color-blue", "color-orange"]
        }
    };

    // ==========================================
    // 3. FUNCIONALIDADE: ALTERNADOR DE MODO ESCURO
    // ==========================================
    elements.darkModeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            elements.modeIcon.textContent = "🍃";
            elements.modeText.textContent = "Modo Sustentável";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            elements.modeIcon.textContent = "☀️";
            elements.modeText.textContent = "Modo Convencional";
        }
    });

    // ==========================================
    // 4. FUNCIONALIDADE: MENSAGENS ROTATIVAS (HERO)
    // ==========================================
    elements.btnKnowledge.addEventListener("click", () => {
        elements.factBox.textContent = fatosAgrinho[indexFato];
        elements.factBox.classList.remove("hidden");
        
        // Loop circular no array
        indexFato = (indexFato + 1) % fatosAgrinho.length;
        elements.btnKnowledge.textContent = "Ver Outro Fato Tecnológico";
    });

    // ==========================================
    // 5. FUNCIONALIDADE: SIMULADOR INTERATIVO (DOM)
    // ==========================================
    elements.simButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Remove classe ativa de todos
            elements.simButtons.forEach(btn => btn.classList.remove("active"));
            // Adiciona no clicado
            e.target.classList.add("active");

            // Captura o tipo de impacto pelo atributo data
            const tipo = e.target.getAttribute("data-impacto");
            const dados = dadosSimulador[tipo];

            // Atualização dinâmica do DOM
            elements.simTitle.textContent = dados.title;
            elements.simDesc.textContent = dados.desc;
            elements.mProd.textContent = dados.prod;
            elements.mWater.textContent = dados.water;
            elements.mCarbon.textContent = dados.carbon;
        });
    });

    // ==========================================
    // 6. FUNCIONALIDADE: VALIDAÇÃO DO FORMULÁRIO
    // ==========================================
    elements.contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio real

        const nome = document.getElementById("user-name").value.trim();
        const email = document.getElementById("user-email").value.trim();

        // Regra 1: Campos Vazios
        if (nome === "" || email === "") {
            dispararFeedback("⚠️ Preencha todos os campos para se registrar.", "#d32f2f");
            return;
        }

        // Regra 2: Validação Estruturada do Email via Regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            dispararFeedback("⚠️ Insira um endereço de e-mail válido.", "#d32f2f");
            return;
        }

        // Sucesso total
        dispararFeedback(`🎉 Sucesso! Guia enviado para o e-mail de ${nome.split(' ')[0]}!`, "#2e7d32");
        elements.contactForm.reset();
    });

    // Função interna de tratamento de avisos
    function dispararFeedback(mensagem, cor) {
        elements.formAlert.textContent = mensagem;
        elements.formAlert.style.color = cor;
        
        // Limpeza automática após 4 segundos
        setTimeout(() => {
            elements.formAlert.textContent = "";
        }, 4000);
    }
});