import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
interface DataType {
  data: {
    id: number;
    name: string;
    status: boolean;
    date: string;
  };
}
const TodoItem: FC<DataType> = (props) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
  }
  const dateString = props.data.date.toLocaleString();
  return (
    <div className="flex justify-between items-center bg-white mb-6 p-4 rounded-lg">
      <div className="lable-wrappew flex items-center gap-4">
        <input
          type="checkbox"
          placeholder="..."
          onChange={handleChange}
          checked={props.data.status}
          className="checkbox checkbox-primary"
        />
        <div className="info">
          <h3 className={`text-2xl ${props.data.status ? "line-through" : ""}`}>
            {props.data.name}
          </h3>
          <time>{dateString}</time>
        </div>
      </div>
      <div className="actions flex items-center gap-1 text-2xl">
        <span className="bg-gray-300 p-3  rounded">
          <FaTrash className="cursor-pointer"></FaTrash>
        </span>
        <span className="bg-gray-300 p-3  rounded">
          <MdEdit className="text-2xl cursor-pointer"></MdEdit>
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
