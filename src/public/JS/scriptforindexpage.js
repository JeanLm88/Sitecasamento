




function updateCountdown2() {
    const targetDate = new Date('2023-11-25T00:00:00'); // Defina sua data de destino aqui
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        document.querySelector('#countdown').innerHTML = 'Hoje é o grande dia!';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.querySelector('#countdown').innerHTML = `Faltam: ${days}d ${hours}h ${minutes}m ${seconds}s <br> para o casamento!`;
    }
}

setInterval(updateCountdown2, 1000);
updateCountdown2();

document.addEventListener("DOMContentLoaded", function () {
    function fecharmessage() {
        containermenssagem = document.getElementById('container-message');
        if (containermenssagem.style.display === 'flex' || containermenssagem.style.display === '') {
            containermenssagem.style.display = 'none';
        } else {
            containermenssagem.style.display = 'flex';
        }
    }
    document.getElementById('btnfechar').addEventListener('click', fecharmessage);

    // Verificar se a mensagem já foi exibida
    if (!localStorage.getItem('mensagemExibida')) {
        // Se não foi exibida, mostrar a mensagem
        document.getElementById('container-message').style.display = 'flex';

        // Adicionar um evento de clique ao botão "Fechar"
        document.getElementById('btnfechar').addEventListener('click', function () {
            // Esconder a mensagem ao clicar no botão "Fechar"
            document.getElementById('container-message').style.display = 'none';

            // Marcar que a mensagem foi exibida no localStorage
            localStorage.setItem('mensagemExibida', 'true');
        });
    }
});


$(document).ready(function(){
    var $carousel = $('.carousel').flickity({
      wrapAround: true,
      autoPlay: 5000,
      pauseAutoPlayOnHover: false
    });
  });