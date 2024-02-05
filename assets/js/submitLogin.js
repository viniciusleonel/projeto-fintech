function submitLogin() {
    var form = document.getElementById("formLogin");
    var formData = new FormData(form);

    fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => response.json())

    .then(data => {
        console.log(data);
        window.location.href = "assets/pages/nav.html";
    })

    .catch(error => {
        console.error("Erro ao logar!", error);
        exibirMensagemLogin('error', 'Dados inválidos!');
    });
}

function exibirMensagemLogin(tipo, mensagem) {
    var mensagemElement = document.getElementById("mensagemLogin");
    mensagemElement.classList.add('alert-' + tipo);
    mensagemElement.innerText = mensagem;
    mensagemElement.style.display = 'block';  // Altera para 'block' para torná-lo visível
}

