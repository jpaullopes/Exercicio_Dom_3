# Gerenciamento de Tarefas

**Integrantes do Grupo:**
1. Nome do Integrante 1
2. Nome do Integrante 2
3. Nome do Integrante 3

## Respostas às Questões da Atividade

### **1) Implemente uma página onde o usuário pode adicionar tarefas a uma lista de tarefas.**
Foi criada uma página HTML com um campo de entrada para a descrição da tarefa, um botão para adicionar tarefas e uma tabela para exibir as tarefas. O codigo da página foi baseado no codigo exemplo fornecido pela questão.

### **2) Crie uma estrutura minimamente aceitável para representar uma tarefa.**
A seguinte estrutura foi criada:
```javascript
var tarefa = {
    id: idCounter++,
    descricao: descricaoTarefa,
    dataInicio: dataInicio,
    dataConclusao: ""
};
```

### **3) Crie uma variável representando um array de tarefas os “dados reais” e que serão representados visualmente em elementos do DOM na página.**
Foi criado um array chamado tarefas que armazena todas as tarefas adicionadas. Nesse array, os dados dele são atualizados dinamicamente e sincronizados com a tabela exibida na página.

### **4) Execute as seguintes funcionalidades e validações:**
#### a. **Adicionar a funcionalidade reabrir tarefa**
Adicionado um botão "Reabrir" que aparece apenas para tarefas concluídas. Ele redefine a data de conclusão para vazio e atualiza a tabela.

#### b. **Não permitir excluir tarefas finalizadas**
Implementada uma validação que impede a exclusão de tarefas que já foram concluídas.

#### c. **Não permitir incluir tarefas sem descrição**
Adicionada uma validação para garantir que o campo de descrição não esteja vazio antes de adicionar uma tarefa.

#### d. **Exibir uma caixa de confirmação antes de excluir uma tarefa**
Antes de excluir uma tarefa, é exibida uma caixa de confirmação para o usuário.

#### e. **Proponha pelo menos 4 alterações significativas à página**
1. Adicionado um contador de tarefas pendentes e concluídas para melhor acompanhamento.
2. Implementado um filtro para exibir apenas tarefas pendentes ou concluídas na tabela.
3. Adicionado suporte para edição da descrição de uma tarefa diretamente na tabela.
4. Melhorada a responsividade da página para dispositivos móveis, ajustando o layout da tabela e botões.

### **5) Grave um vídeo de aproximadamente 10 min com a apresentação da atividade.**
Link do vídeo: [Apresentação da Atividade](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
