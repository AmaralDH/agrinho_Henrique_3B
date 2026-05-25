// BOTÃO MODO ESCURO
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// MENSAGEM DINÂMICA
const messageBtn = document.getElementById("messageBtn");
const dynamicMessage = document.getElementById("dynamicMessage");

messageBtn.addEventListener("click", () => {

    const messages = [
        "🌱 Pequenas atitudes geram grandes mudanças!",
        "💧 Economizar água é preservar o futuro!",
        "☀️ Energia limpa transforma o planeta!",
        "🌎 Sustentabilidade é responsabilidade de todos!"
    ];

    // ESCOLHE MENSAGEM ALEATÓRIA
    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    dynamicMessage.textContent = randomMessage;
});


// QUIZ
const quizOptions = document.querySelectorAll(".quiz-option");
const quizResult = document.getElementById("quizResult");

quizOptions.forEach(option => {

    option.addEventListener("click", () => {

        // VERIFICA RESPOSTA CORRETA
        if(option.classList.contains("correct")) {

            quizResult.textContent =
                "✅ Correto! A reciclagem ajuda o meio ambiente.";

            quizResult.style.color = "green";

        } else {

            quizResult.textContent =
                "❌ Resposta incorreta. Tente novamente.";

            quizResult.style.color = "red";
        }
    });
});


// VALIDAÇÃO DO FORMULÁRIO
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {

    // IMPEDE RECARREGAMENTO
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // VALIDAÇÃO SIMPLES
    if(name === "" || email === "") {

        formMessage.textContent =
            "⚠️ Preencha todos os campos.";

        formMessage.style.color = "red";

    } else {

        formMessage.textContent =
            "✅ Formulário enviado com sucesso!";

        formMessage.style.color = "green";

        // LIMPA CAMPOS
        form.reset();
    }
});