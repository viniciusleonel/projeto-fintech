function submitForm() {
    var form = document.getElementById("formCadastro");
    var formData = new FormData(form);

    fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => {
        if (response.status === 201) {
            // Usuário cadastrado com sucesso (Código 201 Created)
            return response.json();
        } else {
            // Trata outros códigos de resposta
            throw new Error(`Erro ao cadastrar usuário: ${response.status}`);
        }
    })
    .then(data => {
        console.log(data);
        exibirMensagemCadastro('success', 'Usuário cadastrado com sucesso!' + ' Realize o login!');
        
    })
    .catch(error => {
        console.error("Erro ao cadastrar usuário:", error);
        exibirMensagemCadastro('error', 'Nome/Email já existentes!');
    });
}

function exibirMensagemCadastro(tipo, mensagem) {
    var mensagemElement = document.getElementById("mensagemCadastro");
    mensagemElement.classList.add('alert-' + tipo);
    mensagemElement.innerText = mensagem;
    mensagemElement.style.display = 'block';  // Altera para 'block' para torná-lo visível
}