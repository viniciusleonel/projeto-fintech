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
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro ao cadastrar usuário:", error));
}
