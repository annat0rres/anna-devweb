// * Crie uma página com uma imagem de uma criança (ex: “crianca.jpg”) e um
// * botão “Crescer”. Crie uma função chamada trocarImagem. Nessa função,
// * altere a propriedade src da imagem para “adulto.jpg”. Chame a função
// * trocarImagem no onclick do botão Crescer. Escreva ainda um log no console
// * com a mensagem “Imagem trocada com sucesso!”.

function trocarImagem(){
    const foto = document.getElementById('img');
    foto.setAttribute('src', 'images/adulto.jpg'); //alterando um atributo, dentro dos () vai primeiro o atributo que queremos mudar, depois o valor q queremos pôr
    console.log('Imagem trocada com sucesso!')
}