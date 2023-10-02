const botaoMenu = document.querySelector('#botaomenu');
const menuLateral = document.querySelector('#menulateral');
const menucentral = document.querySelector('.nav-bar');
const overlay = document.getElementById("overlay");
const body = document.body;
botaoMenu.addEventListener('click', function () {
    const menulateral = window.getComputedStyle(menuLateral);
    if (menulateral.display === 'none') {
        menuLateral.style.display = 'flex';
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

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
    // Verificar o estado de exibição de telapresença para alterná-lo
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
    // Verificar o estado de exibição de telapresença para alterná-lo
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
                "Escolha um presente",
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
                "Jogo americano (sousplat)",
                "Porta copos de sofá",
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

    // Adicione os manipuladores de evento de checkout de 1 a 18
    for (let i = 1; i <= 19; i++) {
        const checkout = document.getElementById(`checkout${i}`);
        checkout.addEventListener("click", criarManipuladorCheckout(i));
    }



});




const btninfo = document.getElementById("btninfo");
const info = document.getElementById("info");

function infobox(){
    if(info.style.display ==="none" || info.style.display ==="" ){
        info.style.display ="flex";
    }else{
        info.style.display ="none";
    }
}