const cadastro = [
	{ id: "#001", nome: "Antônio (Neto)", genero: "Homem", codigo: 1, interesses: "Anime (Otaku)", cargo: "Cidadão" },
	{ id: "#002", nome: "Davi (Davisd)", genero: "Homem", codigo: 2, interesses: "Anime (Otaku)", cargo: "Cidadão" },
	{ id: "#003", nome: "Daniel (Polegatu)", genero: "Homem", codigo: 3, interesses: "Anime (Otaku)", cargo: "Prefeito" },
	{ id: "#025", nome: "Ryan (月Tsuki)", genero: "Homem", codigo: 25, interesses: "Anime (Otaku)", cargo: "Cidadão" },
];

const loginForm = document.getElementById("login-form");
const codigoInput = document.getElementById("codigo");
const loginBtn = document.getElementById("login-btn");
const cadastroContainer = document.getElementById("cadastro-container");
const cadastroTable = document.getElementById("cadastro-table");
const cadastroTbody = document.getElementById("cadastro-tbody");

loginBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const codigo = parseInt(codigoInput.value);
	const usuario = cadastro.find((user) => user.codigo === codigo);
	if (usuario) {
		cadastroContainer.style.display = "block";
		cadastroTbody.innerHTML = `
			<tr>
				<td>${usuario.id}</td>
				<td>${usuario.nome}</td>
                <td>${usuario.genero}</td>
				<td>${usuario.interesses}</td>
				<td>${usuario.cargo}</td>
			</tr>
        `;
	} else {
		alert("Código inválido!");
	}
});