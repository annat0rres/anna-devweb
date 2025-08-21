window.onload = function Enviar(){
    document.getElementById('ok').addEventListener('click', mudar);
}


function mudar(){
    var resposta = document.getElementById('resposta').value;
    const img = document.getElementById('figure');
    if (resposta === 'quadrado'){
        img.setAttribute('src', 'images/quadradorosa.jpg');
    }else if (resposta === 'circulo'){
        img.setAttribute('src', 'images/circulorosa.png')
    }else if(resposta === 'triangulo'){
        img.setAttribute('src', 'images/triangulorosa.jpg')
    }else{
        document.getElementById('title').innerHTML = 'Digite algo válido'
    }
}