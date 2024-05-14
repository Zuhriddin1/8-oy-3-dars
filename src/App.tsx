import { useRef } from "react";
import Button from "./components/Button";
import Filter from "./components/Filter";
import TodoItem from "./components/TodoItem";
const App = () => {
  const TodoRef = useRef<HTMLInputElement>(null);
  function openModal() {
    if (document.getElementById("my_modal_3")) {
      (document.getElementById("my_modal_3") as HTMLFormElement).showModal();
    }
  }
  function handleSave(event: React.MouseEvent) {
    event.preventDefault();
    if (TodoRef && TodoRef.current) {
      console.log(TodoRef.current.value);
    }
  }
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
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
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
