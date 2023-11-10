const botaoMenu = document.querySelector('#botaomenu');
const botaoMenuIndex = document.querySelector('#botaomenuIn');
const menuLateral = document.querySelector('#menulateral');
const menucentral = document.querySelector('.nav-bar');
const overlay = document.getElementById("overlay");
const body = document.body;

window.addEventListener('scroll', function () {
    if (this.window.scrollY > botaoMenuIndex.offsetHeight) {
        botaoMenuIndex.style.backgroundColor = "transparent";
        botaoMenuIndex.style.color = "#7a7a39";

    } else {
        botaoMenuIndex.style.backgroundColor = "#7a7a39";
        botaoMenuIndex.style.color = "#fff"
    }
});


function abrirmenu() {
    const menulateral = window.getComputedStyle(menuLateral);
    if (menulateral.display === 'none') {
        // Calcula a posição atual da janela
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Ajusta a posição do menu com base na posição atual
        menuLateral.style.top = `${scrollTop}px`;

        // Abre o menu
        menuLateral.style.display = 'flex';
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
    }
};



function fecharsesair() {
    if (menuLateral.style.display === 'flex') {
        menuLateral.style.display = 'none';
        overlay.style.display = 'none';
        body.style.overflow = 'auto';
    }
}

function fecharmenu() {
    menuLateral.style.display = 'none';
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
}

window.addEventListener('scroll', function () {
    if (this.window.scrollY > botaoMenu.offsetHeight) {
        botaoMenu.style.backgroundColor = 'transparent';
        menucentral.style.backgroundColor = '#b7b75e34';
        btntelaconfirma.style.backgroundColor = 'transparent';

    } else {
        botaoMenu.style.backgroundColor = '#ffff';
        menucentral.style.backgroundColor = '#b7b75e';
        btntelaconfirma.style.backgroundColor = '#3f3f00';

    }
});

const telapresença = document.getElementById("telaconfirmação");
const btntelaconfirma = document.getElementById("btnconfirmar")
const fechartelaconfirmação = document.getElementById("fechartelaconfirmação");

btntelaconfirma.addEventListener("click", function () {

    if (telapresença.style.display === "none" || telapresença.style.display === "") {
        telapresença.style.display = "inline-block";
        overlay.style.display = 'block';

    }
});
const btnconfirmarlateral = document.getElementById("btnconfirmarlateral");
btnconfirmarlateral.addEventListener("click", function () {

    if (menuLateral.style.display === "flex" || menuLateral.style.display === "") {
        menuLateral.style.display = "none";
        telapresença.style.display = "inline-block";
        overlay.style.display = 'block';
    }
});

fechartelaconfirmação.addEventListener("click", function () {

    if (telapresença.style.display === "inline-block") {
        telapresença.style.display = "none";
        overlay.style.display = 'none';
        body.style.overflow = 'auto';

    }

});






document.addEventListener("DOMContentLoaded", function () {
    const camposNomeAdicionais = document.getElementById("campos-nome-adicionais");
    const adicionarNomeButton = document.getElementById("adicionar-nome");


    let contadorCampos = 0;
    adicionarNomeButton.addEventListener("click", function () {

        if (contadorCampos < 5) {
            contadorCampos++;
            const novoCampoNome = document.createElement("input");
            novoCampoNome.type = "text";
            novoCampoNome.name = "name";
            novoCampoNome.className = "inputform";
            novoCampoNome.required = true;
            novoCampoNome.placeholder = "Digite o nome";
            novoCampoNome.style.marginBottom = "3px";
            camposNomeAdicionais.appendChild(novoCampoNome);

        } else {
            alert("Limite de campos de nome atingido (5).");
        }

    });

    const btnadcpresente = document.getElementById("adicionar-presente");
    const campospresentesadc = document.getElementById("campos-presentes-adicionais");

    if (contadorCampos === 0) {
        contadorCampos++;
        btnadcpresente.addEventListener("click", function () {
            // Crie um novo elemento select
            const novoselectpresente = document.createElement("select");
            novoselectpresente.name = "message";
            novoselectpresente.className = "inputform";
            novoselectpresente.id = "escolha-presente";
            novoselectpresente.required = true;
            novoselectpresente.style.marginBottom = "3px";


            // Adicione todas as opções
            const opcoes = [
                "",
                "Pix",
                "Jogo de panelas",
                "Aparelho de jantar",
                "Kit Potes herméticos",
                "Edredom",
                "Jogo de toalhas",
                "Jogo de cama casal",
                "Jogo de sobremesa",
                "Tábua de passar roupa",
                "Jogo de descanso de panelas",
                "Jogo de panelas antiaderente",
                "Escorredor de pratos",
                "Cesto de roupa",
                "Ventilador",
                "Cafeteira expresso de cápsulas",
                "Micro-ondas",
                "Aspirador de pó",
                "Cortina blackout"
            ];

            opcoes.forEach(function (opcao) {
                const novaOpcao = document.createElement("option");
                novaOpcao.value = opcao;
                novaOpcao.text = opcao;
                novoselectpresente.appendChild(novaOpcao);
            });

            // Adicione o novo select ao campo de presentes adicionais
            campospresentesadc.appendChild(novoselectpresente);
        });
    }




    function fecharInfo() {
        var overlay = document.getElementById('overlay');
        while (overlay.firstChild) {
            overlay.removeChild(overlay.firstChild);
        }
        overlay.style.display = 'none'; // Oculta o overlay
    }

    function criarManipuladorCheckout(numero) {
        return async function () {
            const resposta = await fetch(`/create-order${numero}`, {
                method: "POST",
            });
            const data = await resposta.json();
            console.log(data);
            window.location.href = data.init_point;
        };
    }

    for (let i = 1; i <= 19; i++) {
        const checkout = document.getElementById(`checkout${i}`);
        checkout.addEventListener("click", criarManipuladorCheckout(i));
    }




});




const btninfo = document.getElementById("btninfo");
const info = document.getElementById("info");

function infobox() {
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "flex";
    } else {
        info.style.display = "none";
    }
}





const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');

checkbox1.addEventListener('change', function () {
    if (checkbox1.checked) {
        checkbox2.checked = false;
    }

});
checkbox2.addEventListener('change', function () {
    if (checkbox2.checked) {
        checkbox1.checked = false;
    }

});


const btnsubmit = document.getElementById('confirmarpresença');
btnsubmit.addEventListener('click', function (event) {
    if (!checkbox1.checked && !checkbox2.checked) {
        event.preventDefault();
        alert('Selecione se vai comprar aqui no site ou em outro lugar.');
        return;
    }
    const selectElement = document.querySelector('#escolha-presente');
    if (selectElement.selectedIndex === 0) {
        event.preventDefault();
        alert('Selecione um presente.');
        return;
    }
    
    const email = document.querySelector('#email').value;
    const nome = document.querySelector('input[name="name"]').value;
    const presenteescolhidos = document.querySelectorAll('select[name="message"]');
    const link1 = 'https://listadepresentesbj.netlify.app/listadepresentes';
    const link2 = 'https://listadepresentesbj.netlify.app/areapix.html';
    let presentesSelecionados = [];

    presenteescolhidos.forEach(function (select) {
        const opcoesSelecionadas = select.selectedOptions;
        let presentesCampo = [];

        for (let i = 0; i < opcoesSelecionadas.length; i++) {
            presentesCampo.push(opcoesSelecionadas[i].value);
        }

        presentesSelecionados.push(presentesCampo);
    });

    const mensagem1 = `Presente(s) escolhido(s):\n${presentesSelecionados.map(presentes => presentes.join(', ')).join('\n')}\nAcesse nosso site e efetue a compra: ${link1}`;
    const mensagem2 = `Presente(s) escolhido(s):\n${presentesSelecionados.map(presentes => presentes.join(', ')).join('\n')}\nAcesse nosso site e efetue a compra: ${link2}`;
    function verificarpresente() {
        const selectElement = document.querySelector('#escolha-presente'); 
    
        if (selectElement.selectedIndex === 1) {
            return mensagem2;
        } else {
           return mensagem1;
        }
    }
    

    emailjs.init('R_rmhXYI1TDccG0ek');


    var emailData = {
        
        service_id1: 'service_iv8hpeb',
        service_id2: 'service_3y6ub7k',
        template_id: 'template_pmsulah',
        user_id: 'R_rmhXYI1TDccG0ek',
        template_params: {
            to_name: nome,
            to_email: email,
            message: verificarpresente(),
        },
    };
    if (email.includes('@gmail.com')) {

        emailjs.send(emailData.service_id1, emailData.template_id, emailData.template_params)
            .then(function (response) {
                console.log('Email enviado com sucesso:', response);
            }, function (error) {
                console.error('Erro ao enviar o email:', error);
            });

    } else {

        emailjs.send(emailData.service_id2, emailData.template_id, emailData.template_params)
            .then(function (response) {
                console.log('Email enviado com sucesso:', response);
            }, function (error) {
                console.error('Erro ao enviar o email:', error);
            });

    }



});






function updateCountdown() {
    const targetDate = new Date('2023-11-25T00:00:00');
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        document.getElementById('countdown1').innerHTML = 'Hoje é o grande dia!';
        document.getElementById('countdown2').innerHTML = 'Hoje é o grande dia!';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('countdown1').innerHTML = ` Faltam: ${days}d ${hours}h ${minutes}m ${seconds}s <br> para o casamento!`;
        document.getElementById('countdown2').innerHTML = ` Faltam: ${days}d ${hours}h ${minutes}m ${seconds}s <br> para o casamento!`;
    }
}


setInterval(updateCountdown, 1000);


updateCountdown();



