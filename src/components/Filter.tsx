import { FC } from "react";
const Filter: FC = () => {
  return (
    <select className="select bg-gray-300 select-bordered w-1/4 max-w-xs text-black">
      <option selected>All</option>
      <option>Checked</option>
      <option>Unchecked</option>
    </select>
  );
};

export default Filter;
