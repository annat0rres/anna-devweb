window.onload = function Enviar(){
    document.getElementById('validar').addEventListener('click', corrigir);
}

function corrigir(){
    var resposta = document.getElementById('resposta').value;
    if (resposta === 'quadrado'){
        document.getElementById("title").innerHTML = 'Parabéns, acertou!'
        const acertouimg = document.createElement("img");
        acertouimg.src='emojicomemorando.png';
        acertouimg.style.width = '200px';
        quad.parentNode.replaceChild(acertouimg, quad);
    }else{
        document.getElementById('title').innerHTML = 'Errou! Recarregue a página'
        const errouimg = document.createElement("img");
        errouimg.src='zzzemoji.png';
        errouimg.style.width = '200px';
        quad.parentNode.replaceChild(errouimg, quad);
    }
}