import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

// Todos os componentes que criamos aqui são componentes funcionais mas existe tambem outros tipos de componentes como o de "classes" mas já é um padrão antigo e hoje em dia já é recomendavel apenas utilziar os componentes funcionais

// Componente é uma função JavaScript
function App() {
  // State ( Estado )
  /* State é uma variável mudavel (Independente onde que ela esteja... se é local ou global) e ele atualizará/recarregará a página com o novo valor */
  // State é um Hook basicamente ( pesquisar )
  // const [mensagem, setMensagem] = useState("Olá, mundo!");
  // Explicando o useState
  /* Basicamente, o state cria essa função para quando queremos fazer alguma interação com algum valor já definido. Com isso, criamos uma variável dentro de colchetes[] para conseguirmos mudar o valores... de forma resumida e bem rasa, é como se tivessimos criando uma variável 'LET' onde o valor será redefinido com um novo valor inserido logo depois. 

  O states é uma variável que será renderizada novamente, sua Interface será atualizada. Ele geralmente é útil quando você quer fazer algo em resposta a interação do usuário... a 'REAGIR' a ação dele.

  Por isso, que o nome do react é REACT = Reagir.
  */
  // Estrutura do State
  /*
    " const [mensagem, setMensagem] = useState("Olá, mundo!"); "
    
    primeiro criamos uma variável para armazenar o valor fixo e o que será definido futuramente, depois colocamos os colchetes[], dentro deles será inseridos o nome da sua variável mutável, onde a sua segunda variável, que será recebida um novo valor, terá que utilizar "set" e sua primeira letra terá que ser MAIÚSCULA para diferenciar da sua primeira variável. (Lembrando que as duas variável tem que ser identicas).

    Logo em seguida, colocamos o '=' para atribuir a função do states 'useState()' e colocando dentro dos parêntese, o valor que será mudável futuramente.  */

  {
    /* Quando digitamos algo fora do 'return()' é geralmente utilizado para colocar a lógica javascript ( seu código envolvendo a lógica) e o 'return()' para sua estrutura/visual da pagina.*/
  }

  {
    /* Para adicionar elementos jsx, precismaos criar a estrutra dentro do 'return', É obrigatório o uso dele junto com os parentese (caso seu código ultrapasse além de uma linha ) e onde será exportado através do export default App do o seu elemento que você criou para página.*/
  }

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Propriedade para salvar dados no navegador
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // todo valor que eu coloco aqui [], é atualizado/tem efeito através da arrow function

  // Interligando/chamando a API
  /*useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      // pegar os dados que ela retorna
      const data = await response.json();

      // armazenar os dados
      setTasks(data);
    }
    // SE QUISER, VOCÊ PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
    // fetchTasks();
  }, []);*/
  // quando criamos um useEffect e criamos junto com uma lista vazia, a função dentro da arrow function é executada apenas uma vez quando o usuário entra no site.

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATAULIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    // Lembre-se aqui será usado o JSX e não HTML padrão.
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      {/* Caso queira exportar o css para seu arquivo, bastar importar ele e colocar a class para ser identificado... Porém, no jsx, o class vira (className), mesma função, só muda o nome. */}
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
      {/* Para chamar uma outra função de outro arquivo, primeiro temos que importar ele e depois colocarmos o <nome do arquvio /> assim ele será chamado para página. */}

      {/* Para utilizarmos uma variável criada, temos que colocar as chaves '{}' e colocar o nome dado para ela (nome da variável). Para assim, ele conseguir imprimir o valor dela. Se não, sem as chaves{}, será confudido como texto/string padrão */}
      {/*<h1>{mensagem}</h1>
      <h1>mensagem</h1>
      {/* Para adicionar o JavaScript, temos que coloca-lo entre chaves{}... Lembre-se disso.
      <button
        //onClick = função javascript
        //{() => {}} -> arrow function
        onClick={() => {
          setMensagem("Olá, fui clicado!");
        }}
      >
        Mudar mensagem
      </button>
      <h1>Hello World</h1>
      */}
    </div>
    /* OBSERVAÇÃO: Não podemos retornar outros elemento principal no react... ou seja, não é permitido retornar DUAS DIV 'PAI' no código. dentro de um Elemento 'Pai' podemos retornar quantos elementos quisermos... mas, só podemos retornar apenas UM elemento principal para página no react. Caso coloque outra div, dará erro. */
  );
}

// Para o componente ser considerável vádilo, precisamos exportar ele. Utilizando o 'export default (nome da função/componente);
export default App;
