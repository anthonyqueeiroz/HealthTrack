window.onload = function () {
    const objNome = document.getElementById("nome")
    const objResultado = document.getElementById("seu-nome")
    const objEnviar = document.getElementById("botao")
    objEnviar.onclick = function () {
        objResultado.innerHTML = "Seu nome é " + objNome.value + "!"
    }
    



}

