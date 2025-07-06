# Explicação das Alterações no Código

## **1) Implementação da página de gerenciamento de tarefas**
- **HTML**: Criei a estrutura básica da página no arquivo `index.html`. Adicionei:
  - Um campo de entrada (`<input>`) para a descrição da tarefa.
  - Um botão (`<button>`) para adicionar tarefas.
  - Uma tabela (`<table>`) com colunas para ID, descrição, data de início, data de conclusão e ações.
- **CSS**: No arquivo `styles.css`, estilizei os elementos da página, como botões, tabela e campos de entrada, para garantir uma aparência funcional e simples.

---

## **2) Estrutura para representar uma tarefa**
- No arquivo `script.js`, criei a estrutura de um objeto para representar uma tarefa:
  ```javascript
  var tarefa = {
      id: idCounter++,
      descricao: descricaoTarefa,
      dataInicio: dataInicio,
      dataConclusao: ""
  };
  ```
- Cada tarefa possui:
  - `id`: Um identificador único.
  - `descricao`: A descrição fornecida pelo usuário.
  - `dataInicio`: A data de criação da tarefa.
  - `dataConclusao`: Inicialmente vazia, preenchida ao concluir a tarefa.

---

## **3) Array de tarefas**
- No `script.js`, criei um array chamado `tarefas` para armazenar todas as tarefas.
- Esse array é atualizado dinamicamente:
  - Quando uma tarefa é adicionada, concluída, reaberta ou excluída.
  - A tabela no DOM é sincronizada com o conteúdo desse array por meio da função `atualizarTabela()`.

---

## **4) Funcionalidades e validações**
### a. **Adicionar a funcionalidade de reabrir tarefa**
- Adicionei um botão "Reabrir" que aparece apenas para tarefas concluídas:
  ```javascript
  if (tarefa.dataConclusao) {
      `<button class="reabrirBtn" onclick="reabrirTarefa(${tarefa.id})">Reabrir</button>`;
  }
  ```
- A função `reabrirTarefa(id)` redefine a data de conclusão para uma string vazia e atualiza a tabela.

### b. **Não permitir excluir tarefas finalizadas**
- Antes de excluir uma tarefa, verifico se ela está concluída:
  ```javascript
  if (tarefa.dataConclusao) {
      alert('Não é permitido excluir tarefas finalizadas.');
      return;
  }
  ```

### c. **Não permitir incluir tarefas sem descrição**
- Valido o campo de entrada para garantir que a descrição não esteja vazia:
  ```javascript
  if (!descricaoTarefa) {
      alert('A descrição da tarefa não pode estar vazia.');
      return;
  }
  ```

### d. **Exibir uma caixa de confirmação antes de excluir uma tarefa**
- Antes de excluir, exibo uma caixa de confirmação:
  ```javascript
  if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      tarefas = tarefas.filter(t => t.id !== id);
      atualizarTabela();
  }
  ```

### e. **Quatro alterações significativas na página**
1. **Botão "Reabrir"**: Adicionado para reabrir tarefas concluídas.
2. **Validação de exclusão**: Impede a exclusão de tarefas finalizadas.
3. **Estilo simplificado no CSS**: Ajustei o design para ser mais básico, reduzindo contrastes e removendo bordas arredondadas.
4. **Mensagens de alerta e confirmação**: Adicionei feedback visual para ações inválidas ou críticas.
