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
