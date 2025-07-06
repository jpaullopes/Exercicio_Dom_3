let tarefas = [];
let idCounter = 1;

document.getElementById('adicionarBtn').addEventListener('click', () => {
    const descricaoTarefa = document.getElementById('descricaoTarefa').value.trim();

    if (!descricaoTarefa) {
        alert('A descrição da tarefa não pode estar vazia.');
        return;
    }

    const dataInicio = new Date().toLocaleDateString();
    const tarefa = {
        id: idCounter++,
        descricao: descricaoTarefa,
        dataInicio: dataInicio,
        dataConclusao: ""
    };

    tarefas.push(tarefa);
    atualizarTabela();
    document.getElementById('descricaoTarefa').value = '';
});

function atualizarTabela() {
    const tbody = document.getElementById('tabelaTarefas').querySelector('tbody');
    tbody.innerHTML = '';

    tarefas.forEach(tarefa => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${tarefa.id}</td>
            <td>${tarefa.descricao}</td>
            <td>${tarefa.dataInicio}</td>
            <td>${tarefa.dataConclusao || '-'}</td>
            <td>
                ${tarefa.dataConclusao ? '' : `<button class="concluirBtn" onclick="concluirTarefa(${tarefa.id})">Concluir</button>`}
                <button class="excluirBtn" onclick="excluirTarefa(${tarefa.id})">Excluir</button>
                ${tarefa.dataConclusao ? `<button class="reabrirBtn" onclick="reabrirTarefa(${tarefa.id})">Reabrir</button>` : ''}
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function concluirTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.dataConclusao = new Date().toLocaleDateString();
        atualizarTabela();
    }
}

function excluirTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa && tarefa.dataConclusao) {
        alert('Não é permitido excluir tarefas finalizadas.');
        return;
    }

    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        tarefas = tarefas.filter(t => t.id !== id);
        atualizarTabela();
    }
}

function reabrirTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.dataConclusao = "";
        atualizarTabela();
    }
}
