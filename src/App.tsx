import Button from "./components/Button";
import Filter from "./components/Filter";
import TodoItem from "./components/TodoItem";
const App = () => {
  return (
    <div className="w-1/2 mx-auto mt-10">
      <h1 className="uppercase  text-gray-800 mb-10 text-5xl text-center font-bold">
        todo list
      </h1>
      <header className="flex justify-between items-center">
        <Button></Button>
        <Filter></Filter>
      </header>
      <div className="todo-wrapper my-8 p-6 bg-gray-300 rounded-lg">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </div>
  );
};

export default App;
