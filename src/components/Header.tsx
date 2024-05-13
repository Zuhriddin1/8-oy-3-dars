import { FC, useState } from "react";
interface Todo {
  work: string;
  time: string;
  id: number;
  checked: boolean;
}
const Header: FC = ({ onEdit, onSave, onCancel }) => {
  const [showModal, setShowModal] = useState(false);
  const [todoWork, setTodoWork] = useState("");
  const [todoTime, setTodoTime] = useState("");
  const [todoId, setTodoId] = useState<number | null>(null);
  const openModal = (id?: number) => {
    setShowModal(true);
    if (id) {
      setTodoId(id); 
    }
  };
  const closeModal = () => {
    setShowModal(false);
    setTodoWork("");
    setTodoTime("");
    setTodoId(null);
  };

  const handleSave = () => {
    if (onSave && todoId !== null) {
      onSave({ work: todoWork, time: todoTime, id: todoId }); 
    }
    closeModal();
  };

  return (
    <div className="w-[800px] flex justify-between mt-[50px]">
      <div>
        <button className="btn btn-primary text-white" onClick={() => openModal()}>
          Add Task
        </button>
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Edit Todo</h2>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input bg-slate-200 text-black mb-2"
                  placeholder="Todo Work"
                  value={todoWork}
                  onChange={(e) => setTodoWork(e.target.value)}
                />
                <input
                  type="text"
                  className="input mb-4 bg-slate-200 text-black input-border"
                  placeholder="Todo Time"
                  value={todoTime}
                  onChange={(e) => setTodoTime(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button className="btn btn-primary mr-2" onClick={handleSave}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={onCancel || closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <select className="select select-bordered bg-gray-400 text-black w-full">
          <option selected>All</option>
          <option>Checked</option>
          <option>UnChecked</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
