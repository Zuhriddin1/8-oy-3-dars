import { FC, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
interface TodoType {
  id: number;
  name: string;
  date: string;
  status: boolean;
}
interface TodoItemProps {
  data: TodoType;
  check: (id: number, status: boolean) => void;
  deleteTodo: (id: number) => void;
}
const TodoItem: FC<TodoItemProps> = ({ data, check, deleteTodo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(data.name);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleChange = () => {
    check(data.id, !data.status);
  };
  const handleEdit = () => {
    handleCloseModal();
  };
  const handleDelete = () => {
    deleteTodo(data.id);
  };
  const dateString = new Date(data.date).toLocaleString();
  return (
    <div className="flex justify-between items-center bg-white mb-6 p-4 rounded-lg">
      <div className="label-wrapper flex items-center gap-4">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={data.status}
          placeholder="..."
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
        <span className="bg-gray-300 p-3 rounded" onClick={handleDelete}>
          <FaTrash className="cursor-pointer" />
        </span>
        <span className="bg-gray-300 p-3 rounded" onClick={handleOpenModal}>
          <MdEdit className="text-2xl cursor-pointer" />
        </span>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
            <input
              type="text"
              placeholder="..."
              value={editedName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TodoItem;
