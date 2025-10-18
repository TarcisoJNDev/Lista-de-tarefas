import { StrictMode } from "react";
// importando a biblioteca StrictMode
import { createRoot } from "react-dom/client";
// importando a biblioteca CreateRoot do react-dom
import App from "./App.jsx";
// Importando o arquivo 'App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
// Importando o arquivo style do 'index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

// Ele está pegando o 'id' da div PRINCIPAL lá do 'index.html' para renderizar tudo através do Javascript.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Quando chamamos algum arquivo para ser renderizado, temos que colocar a primeira letra do nome dele seja em MAIÚSCULA, para o react diferenciar o que é um componente e o que é uma tag html. */}
    <RouterProvider router={router} />
    {/* E ele geralmente será fechado na mesma linha com apenas o ' />' ( é essencial ter o espaço ) */}
  </StrictMode>
);
