const robotron = document.querySelector("#robotron") // busca o elemento através do queryselector

robotron.addEventListener("click", () => { // função anonima de seta
    console.log('Cliquei no robo')
}) 

function dizOi(nome){
    console.log("Oi ", nome)
    console.log("Bem-Vindo ao Robotron 2000")
}

dizOi('Wesley')