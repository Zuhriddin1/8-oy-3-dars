  import { useEffect, useRef, useState } from "react";
  import Button from "./components/Button";
  import Filter from "./components/Filter";
  import TodoItem from "./components/TodoItem";
  interface TodoType {
    id: number;
    name: string;
    date: string;
    status: boolean;
    check: () => void;
  }
  const App = () => {
    const [todos, seTodos] = useState<TodoType[]>([]);
    const TodoRef = useRef<HTMLInputElement>(null);
    function getData() {
      let data: TodoType[] = [];
      if (
        localStorage.getItem("todos") &&
        localStorage.getItem("todos") != null
      ) {
        data = JSON.parse(localStorage.getItem("todos")!);
      }
      return data;
    }
    useEffect(() => {
      let old = getData();
      seTodos(old);
    }, []);
    function openModal() {
      if (document.getElementById("my_modal_3")) {
        (document.getElementById("my_modal_3") as HTMLFormElement).showModal();
      }
    }
    function handleSave(event: React.MouseEvent) {
      event.preventDefault();
      if (TodoRef && TodoRef.current && TodoRef.current.value) {
        const todo = {
          id: Date.now(),
          name: TodoRef.current.value,
          date: new Date(),
          status: false,
        };
        let EnterTodos = localStorage.getItem("todos");
        let todos = EnterTodos ? JSON.parse(EnterTodos) : [];
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        seTodos([...todos]);
        TodoRef.current.value = "";
        (document.getElementById("my_modal_3") as HTMLFormElement).close();
      }
    }
    function handleCheck(id: number, status: boolean) {
      let copied = JSON.parse(JSON.stringify(todos));
      copied = copied.map((el: TodoType) => {
        if (el.id == id) {
          el.status = status;
        }
        return el;
      });
      seTodos(copied);
      localStorage.setItem("todos", JSON.stringify(copied));
    }
    const deleteTodo = (id: number) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      seTodos(updatedTodos);
    };
    return (
      <div className="w-1/2 mx-auto mt-10">
        <h1 className="uppercase  text-gray-800 mb-10 text-5xl text-center font-bold">
          todo list
        </h1>
        <header className="flex justify-between items-center">
          <Button click={openModal}></Button>
          <Filter></Filter>
        </header>
        <div className="todo-wrapper my-8 p-6 bg-gray-300 rounded-lg">
          {todos.length &&
            todos.map((el, index) => {
              return (
                <TodoItem
                  deleteTodo={deleteTodo}
                  check={handleCheck}
                  data={el}
                  key={index}
                ></TodoItem>
              );
            })}
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="text-2xl text-center font-bold ">Enter Task name</h3>
            <div className="form-wrapper flex flex-col gap-3 mt-4">
              <input
                type="text"
                ref={TodoRef}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button
                onClick={handleSave}
                className="btn btn-primary  text-2xl py-"
              >
                Save
              </button>
            </div>
          </div>
        </dialog>
      </div>
    );
  };
  export default App;