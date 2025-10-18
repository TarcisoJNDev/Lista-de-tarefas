//criando um componente para nao ter código de estilização repetido.
function Input(props) {
  return (
    <input
      //  reduzindo o codigo
      //  type={props.type}
      //  placeholder={props.placeholder}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} // chamando apenas isso, ele ja entende que tem que pegar todos os componentes que você esta pedindo.
      //  value={props.value}
      // onChange={props.onChange}
    />
  );
}

export default Input;
