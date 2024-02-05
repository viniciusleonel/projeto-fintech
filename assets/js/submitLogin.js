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
    .then(data => console.log(data))
    .catch(error => console.error("Erro ao realizar login", error));
}
