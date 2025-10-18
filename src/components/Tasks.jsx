import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

// Desctructs
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // tratamento responsável para a string não ter nenhumm conflito(exemplo: espaco)
    const query = new URLSearchParams(task);
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        // é usado a 'key' para todo elemento criado. É extremamente importante para ele reconhecer o elemento futuramente.
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`${"bg-slate-400 text-left w-full text-white p-2 rounded-md"} ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
// para mandar alguma informação para outro arquivo, é utilizado o "props" [ pesquisar ]
/*para pegar informações em formato de json/lista e aplicalá em algum lugar... basta usar o props.nome do chamado[posição que ela está no array].nome da variável que você atribuiu algo no json/lista.*/
export default Tasks;
