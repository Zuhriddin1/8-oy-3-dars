import { FC, useEffect, useState } from "react";
interface Todo {
  id: number;
  work: string;
  time: string;
  checked: true;
}
const Body: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos: Todo[] = JSON.parse(storedTodos);
      const todosWithChecked = parsedTodos.map((todo) => ({
        ...todo,
        checked: false,
      }));
      setTodos(todosWithChecked);
    }
  }, []);
  const handleCheck = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const handleEdit = (id: number) => {
    console.log("Edit todo with id:", id);
  };
  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  return (
    <div className="w-[800px] bg-slate-200 rounded-2xl mt-[30px] pl-[24px] pr-[24px] pt-[24px] pb-[24px]">
      <h2 className="text-lg font-semibold mb-4">Todos:</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheck(todo.id)}
            className="mr-2"
          />
          <p className={todo.checked ? "line-through" : ""}>
            {todo.work} - {todo.time}
          </p>
          <button
            onClick={() => handleEdit(todo.id)}
            className="ml-2 text-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(todo.id)}
            className="ml-2 text-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default Body;
