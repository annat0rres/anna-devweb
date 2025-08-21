
window.onload = function Adicionar(){
    document.getElementById('add').addEventListener('click', selecionar)
}

var grifinoria = [];

function selecionar(){
    var novoestudante = document.getElementById("estudante").value;
    grifinoria.push(novoestudante);
    alert(novoestudante + " selecionado para Grifinória!");
    document.getElementById("estudante").value = "";
}
    
function verLista(){
        var lista = "";
        for (i=0; i<grifinoria.length; i++){
        lista += grifinoria[i];
        lista += "<br/>";
        }
        document.getElementById("listadealunos").innerHTML = lista;
}
