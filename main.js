const formulario = document.getElementById("form")
let primeiroNumero = document.getElementById("numeroA")
let segundoNumero = document.getElementById("numeroB")


formulario.addEventListener("submit", function(e){
    e.preventDefault();
    if(segundoNumero.value > primeiroNumero.value){
        alert("válido")
    }
    else{
        alert("não valido")
    }
    primeiroNumero.value = ""
    segundoNumero.value = ""
})