function pegarUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function pegarUsuarioLogado() {
    const email = localStorage.getItem("logado");
    return pegarUsuarios().find(u => u.email === email);
}

const logado = pegarUsuarioLogado();
const nomeUsuario = document.getElementById("nomeUsuario");
const botaoBanner = document.getElementById("botaoBanner");
const numCatalogo = document.getElementById("numCatalogo");
const gradePosters = document.getElementById("gradePosters");

if (logado && nomeUsuario) {
    nomeUsuario.textContent = logado.nick;
}

if (!logado && botaoBanner) {
    botaoBanner.textContent = "Criar uma conta";
    botaoBanner.href = "perfil.html?cadastro";
    botaoBanner.className = "btn-rosa";
}

if (numCatalogo) {
    numCatalogo.textContent = bancoFilmes.length;
}

if (gradePosters) {
    const restantes = bancoFilmes.slice();
    let html = "";

    for (let i = 0; i < 6 && restantes.length > 0; i++) {
        const filme = restantes.splice(Math.floor(Math.random() * restantes.length), 1)[0];
        html += `<a href="filmes.html" class="poster" title="${filme.titulo}">
            <img src="${filme.imagem}" alt="Cartaz de ${filme.titulo}">
        </a>`;
    }

    gradePosters.innerHTML = html;
}
