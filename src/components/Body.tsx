import { FC, useCallback, useEffect, useState } from "react";
interface Todo {
  id: number;
  work: string;
  time: string;
  checked: boolean;
}
const Body: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editedWork, setEditedWork] = useState<string>("");
  const [editedTime, setEditedTime] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos: Todo[] = JSON.parse(storedTodos);
      setTodos(parsedTodos);
    }
  }, []);
  const handleCheck = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const handleSaveEdit = () => {
    if (!editingTodo) return;
    const updatedTodos = todos.map((todo) =>
      todo.id === editingTodo.id
        ? { ...todo, work: editedWork, time: editedTime }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setEditingTodo(null);
    setEditedWork("");
    setEditedTime("");
    setShowModal(false);
  };
  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
   const handleEdit = (todo: Todo) => {
     setEditingTodo(todo);
     setEditedWork(todo.work);
     setEditedTime(todo.time);
     setShowModal(true);
   };
    const handleCancelEdit = useCallback(() => {
      setEditingTodo(null);
      setEditedWork("");
      setEditedTime("");
      setShowModal(false);
    }, []);
  return (
    <div className="w-[800px] bg-slate-200 rounded-2xl mt-[30px] pl-[24px] pr-[24px] pt-[24px] pb-[24px]">
      <h2 className="text-lg font-semibold mb-4">Todos:</h2>
      <h2 className="text-lg font-semibold mb-4">Todos:</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between mb-2">
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheck(todo.id)}
            className="mr-2"
          />
          <p className={todo.checked ? "line-through" : ""}>
            {todo.work} - {todo.time}
          </p>
          <div className="flex pl-[250px]">
            <button
              onClick={() => handleEdit(todo)}
              className="text-blue-600 ml-[250px]"
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
        </div>
      ))}
      {editingTodo && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Todo</h2>
            <input
              type="text"
              value={editedWork}
              onChange={(e) => setEditedWork(e.target.value)}
              className="input mb-2"
              placeholder="Todo Work"
            />
            <input
              type="text"
              value={editedTime}
              onChange={(e) => setEditedTime(e.target.value)}
              className="input mb-4"
              placeholder="Todo Time"
            />
            <div className="flex justify-end">
              <button onClick={handleSaveEdit} className="btn btn-primary mr-2">
                Save
              </button>
              <button onClick={handleCancelEdit} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Body;