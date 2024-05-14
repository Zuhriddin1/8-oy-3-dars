import { FC } from "react";
interface ButtonType {
  click: () => void;
}
const Button: FC<ButtonType> = (props) => {
  return (
    <button
      onClick={() => {
        props.click();
      }}
      className="btn btn-primary text-2xl px-8 py-0"
    >
      Add Task
    </button>
  );
};

export default Button;
