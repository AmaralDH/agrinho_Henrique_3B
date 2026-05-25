document.addEventListener("DOMContentLoaded", () => {

    const darkModeBtn =
    document.getElementById("dark-mode-toggle");

    const modeIcon =
    document.querySelector(".mode-icon");

    const modeText =
    document.querySelector(".mode-text");

    const btnKnowledge =
    document.getElementById("btn-conhecimento");

    const factBox =
    document.getElementById("dynamic-fact-box");

    const simButtons =
    document.querySelectorAll(".btn-sim");

    const simTitle =
    document.getElementById("sim-title");

    const simDescription =
    document.getElementById("sim-description");

    const metricProd =
    document.getElementById("metric-prod");

    const metricWater =
    document.getElementById("metric-water");

    const metricCarbon =
    document.getElementById("metric-carbon");

    // DARK MODE

    darkModeBtn.addEventListener("click", () => {

        const currentTheme =
        document.documentElement.getAttribute("data-theme");

        if(currentTheme === "dark"){

            document.documentElement.removeAttribute("data-theme");

            modeIcon.textContent = "🍃";
            modeText.textContent = "Modo Sustentável";

        } else {

            document.documentElement.setAttribute("data-theme", "dark");

            modeIcon.textContent = "☀️";
            modeText.textContent = "Modo Convencional";
        }

    });

    // FATOS DINÂMICOS

    const fatos = [

        "🚜 Drones reduzem agroquímicos em até 80%.",

        "☀️ Energia solar cresce no campo brasileiro.",

        "🌱 Bioinsumos ajudam a preservar o solo."

    ];

    let index = 0;

    btnKnowledge.addEventListener("click", () => {

        factBox.classList.remove("hidden");

        factBox.textContent = fatos[index];

        index = (index + 1) % fatos.length;

    });

    // SIMULADOR

    const dados = {

        convencional:{
            title:"Agricultura Tradicional",
            desc:"Uso intensivo de máquinas.",
            prod:"+5%",
            water:"0%",
            carbon:"+20%"
        },

        precisao:{
            title:"Tecnologia de Precisão",
            desc:"Uso de IA e sensores.",
            prod:"+25%",
            water:"40%",
            carbon:"-15%"
        },

        regenerativa:{
            title:"Manejo Regenerativo",
            desc:"Rotação de culturas e bioinsumos.",
            prod:"+18%",
            water:"55%",
            carbon:"-40%"
        }

    };

    simButtons.forEach(button => {

        button.addEventListener("click", () => {

            simButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const tipo =
            button.dataset.impacto;

            simTitle.textContent =
            dados[tipo].title;

            simDescription.textContent =
            dados[tipo].desc;

            metricProd.textContent =
            dados[tipo].prod;

            metricWater.textContent =
            dados[tipo].water;

            metricCarbon.textContent =
            dados[tipo].carbon;

        });

    });

});