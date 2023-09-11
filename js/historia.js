const content = document.getElementById("content");

if (window.location.search == ""){
    window.location.href="?step=0"
}

const historia = [
    {
        message: "História, você prefere 1 ou 2?",
        options: [1,2],
    },
    {
        message: "Você escolheu 1",
        options: []
    },
    {
        message: "Você escolheu 2",
        options: []
    }
]

function getStep(){
    const urlParams = new URLSearchParams(window.location.search);
    let step = urlParams.get('step');
    step = parseInt(step);
    return historia[step]
}

window.addEventListener("load", () => {
    const passo = getStep();
    let mensagem = passo.message;
    for (option of passo.options){
        const a = document.createElement("a");
        a.href = `?step=${option}`
        mensagem.replace("{}", a)
    }

    const p = document.createElement("p");
    p.innerText = mensagem

    content.appendChild(p)
})