function corrigir(){
    var resposta = document.getElementById("resposta").value;
    if (resposta == "lumos"){
        document.write("Parabéns! Você acendeu a luz.");
        document.body.style.backgroundColor = "yellow";
    }
    else{
    document.write("Que pena! Você continua no escuro.");
    document.body.style.backgroundColor = "gray";
    }
}
