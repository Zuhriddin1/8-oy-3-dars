import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FC } from "react";
interface TodoType {
  id: number;
  name: string;
  date: string;
  status: boolean;
}
interface TodoItemProps {
  data: TodoType;
  check: (id: number, status: boolean) => void;
}
const TodoItem: FC<TodoItemProps> = ({ data, check }) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    check(data.id, event.target.checked);
  }
  const dateString = new Date(data.date).toLocaleString();
  return (
    <div className="flex justify-between items-center bg-white mb-6 p-4 rounded-lg">
      <div className="label-wrapper flex items-center gap-4">
        <input
          type="checkbox"
          placeholder="..."
          onChange={handleChange}
          checked={data.status}
          className="checkbox checkbox-primary"
        />
        <div className="info">
          <h3 className={`text-2xl ${data.status ? "line-through" : ""}`}>
            {data.name}
          </h3>
          <time>{dateString}</time>
        </div>
      </div>
      <div className="actions flex items-center gap-1 text-2xl">
        <span className="bg-gray-300 p-3 rounded">
          <FaTrash className="cursor-pointer" />
        </span>
        <span className="bg-gray-300 p-3 rounded">
          <MdEdit className="text-2xl cursor-pointer" />
        </span>
      </div>
    </div>
  );
};
export default TodoItem;