const apiUrl = "https://run.mocky.io/v3/452452f5-906c-4567-89b3-f49052d7b199";
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tabela = document.getElementById("api");
        data.forEach(item => {
            const row = document.createElement("tr");

            const imagemCell = document.createElement("td");
            const imagem = document.createElement("img");
            imagem.src = item.imagem;
            imagem.alt = "imagem do cachorro";
            imagem.width = 100;

            const infoButton = document.createElement("button");
            infoButton.textContent = "i";
            infoButton.id = "butao-img";
            infoButton.style.display = "none";
            infoButton.onclick = () => {
                const novoLink = prompt("Insira o novo link da imagem:");
                if (novoLink) {
                    imagem.src = novoLink;
                }
            };

            imagemCell.append(imagem, infoButton);
            row.appendChild(imagemCell);

            const CachorroCell = document.createElement("td");
            CachorroCell.textContent = item.cachorro;
            row.appendChild(CachorroCell);

            const DonoCell = document.createElement("td");
            DonoCell.textContent = item.dono;
            row.appendChild(DonoCell);

            const telefoneCell = document.createElement("td");
            telefoneCell.textContent = item.telefone;
            row.appendChild(telefoneCell);

            const emailCell = document.createElement("td");
            emailCell.textContent = item.email;
            row.appendChild(emailCell);

            const acoesCell = document.createElement("td");
            const editarBtn = document.createElement("button");
            editarBtn.textContent = "Editar";
            editarBtn.onclick = () => editarLinha(row, item, infoButton);
            acoesCell.appendChild(editarBtn);

            const excluirBtn = document.createElement("button");
            excluirBtn.textContent = "Excluir";
            excluirBtn.onclick = () => excluirLinha(row);
            acoesCell.appendChild(excluirBtn);

            row.appendChild(acoesCell);
            tabela.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Erro ao acessar a API:", error);
        const tabela = document.getElementById("api");
        tabela.innerHTML = "<tr><td colspan='6'>Erro ao carregar os dados.</td></tr>";
    });

function editarLinha(row, item, infoButton) {
    const cells = row.querySelectorAll("td");
    cells[1].contentEditable = true;
    cells[2].contentEditable = true;
    cells[3].contentEditable = true;
    cells[4].contentEditable = true;

    infoButton.style.display = "inline";

    for (let i = 1; i <= 4; i++) {
        cells[i].style.border = "1px solid #000";
        cells[i].style.backgroundColor = "#f0f0f0";
    }

    const editarBtn = cells[5].querySelector("button");
    editarBtn.textContent = "Salvar";
    editarBtn.onclick = () => salvarEdicao(row, item, infoButton);
}

function salvarEdicao(row, item, infoButton) {
    const cells = row.querySelectorAll("td");
    item.cachorro = cells[1].textContent;
    item.dono = cells[2].textContent;
    item.telefone = cells[3].textContent;
    item.email = cells[4].textContent;

    cells[1].contentEditable = false;
    cells[2].contentEditable = false;
    cells[3].contentEditable = false;
    cells[4].contentEditable = false;

    infoButton.style.display = "none";

    for (let i = 1; i <= 4; i++) {
        cells[i].style.border = "";
        cells[i].style.backgroundColor = "";
    }

    const editarBtn = cells[5].querySelector("button");
    editarBtn.textContent = "Editar";
    editarBtn.onclick = () => editarLinha(row, item, infoButton);
}

function excluirLinha(row) {
    row.remove();
}

function abrirpopup() {
    document.getElementById("popup").style.display = "block";
}

function fecharpopup() {
    document.getElementById("popup").style.display = "none";
}

function salvarcachorro() {
    const tabela = document.getElementById("api");

    const novoCachorro = document.getElementById("novoCachorro").value;
    const novoDono = document.getElementById("novoDono").value;
    const novoEmail = document.getElementById("novoEmail").value;
    const novoTelefone = document.getElementById("novoTelefone").value;
    const novoLink = document.getElementById("novoLink").value;

    const row = document.createElement("tr");

    const imagemCell = document.createElement("td");
    const imagem = document.createElement("img");
    imagem.src = novoLink;
    imagem.alt = "Imagem do cachorro";
    imagem.width = 100;
    imagemCell.appendChild(imagem);
    row.appendChild(imagemCell);

    const CachorroCell = document.createElement("td");
    CachorroCell.textContent = novoCachorro;
    row.appendChild(CachorroCell);

    const DonoCell = document.createElement("td");
    DonoCell.textContent = novoDono;
    row.appendChild(DonoCell);

    const telefoneCell = document.createElement("td");
    telefoneCell.textContent = novoTelefone;
    row.appendChild(telefoneCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = novoEmail;
    row.appendChild(emailCell);

    const acoesCell = document.createElement("td");
}
let linhaEditando = null;

function editarLinha(row, item, infoButton) {
    document.getElementById("novoCachorro").value = item.cachorro;
    document.getElementById("novoDono").value = item.dono;
    document.getElementById("novoEmail").value = item.email;
    document.getElementById("novoTelefone").value = item.telefone;
    document.getElementById("novoLink").value = item.imagem;

    abrirpopup();
    linhaEditando = row;
}

function salvarcachorro() {
    const tabela = document.getElementById("api");

    const novoCachorro = document.getElementById("novoCachorro").value;
    const novoDono = document.getElementById("novoDono").value;
    const novoEmail = document.getElementById("novoEmail").value;
    const novoTelefone = document.getElementById("novoTelefone").value;
    const novoLink = document.getElementById("novoLink").value;

    if (linhaEditando) {
        const cells = linhaEditando.querySelectorAll("td");
        cells[1].textContent = novoCachorro;
        cells[2].textContent = novoDono;
        cells[3].textContent = novoTelefone;
        cells[4].textContent = novoEmail;
        cells[0].querySelector("img").src = novoLink;

        linhaEditando = null;
    } else {
    
        const row = document.createElement("tr");

        const imagemCell = document.createElement("td");
        const imagem = document.createElement("img");
        imagem.src = novoLink;
        imagem.alt = "Imagem do cachorro";
        imagem.width = 100;
        imagemCell.appendChild(imagem);
        row.appendChild(imagemCell);

        const CachorroCell = document.createElement("td");
        CachorroCell.textContent = novoCachorro;
        row.appendChild(CachorroCell);

        const DonoCell = document.createElement("td");
        DonoCell.textContent = novoDono;
        row.appendChild(DonoCell);

        const telefoneCell = document.createElement("td");
        telefoneCell.textContent = novoTelefone;
        row.appendChild(telefoneCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = novoEmail;
        row.appendChild(emailCell);

        const acoesCell = document.createElement("td");
        const editarBtn = document.createElement("button");
        editarBtn.textContent = "Editar";
        editarBtn.onclick = () => editarLinha(row, {cachorro: novoCachorro, dono: novoDono, telefone: novoTelefone, email: novoEmail, imagem: novoLink}, infoButton);
        acoesCell.appendChild(editarBtn);

        const excluirBtn = document.createElement("button");
        excluirBtn.textContent = "Excluir";
        excluirBtn.onclick = () => excluirLinha(row);
        acoesCell.appendChild(excluirBtn);

        row.appendChild(acoesCell);
        tabela.appendChild(row);
    }

    fecharpopup();


    document.getElementById("novoCachorro").value = "";
    document.getElementById("novoDono").value = "";
    document.getElementById("novoEmail").value = "";
    document.getElementById("novoTelefone").value = "";
    document.getElementById("novoLink").value = "";
}
