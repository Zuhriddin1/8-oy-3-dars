import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
const TodoItem = () => {
  return (
    <div className="flex justify-between items-center bg-white mb-6 p-4 rounded-lg">
      <div className="lable-wrappew flex items-center gap-4">
        <input type="checkbox" className="checkbox checkbox-primary" />
        <div className="info">
          <h3 className="text-2xl">Lorem, ipsum dolor</h3>
          <time>10:00</time>
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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default TodoItem;
