import { FC } from "react";
const Filter: FC = () => {
  return (
    <select
      title="Filter"
      className="select bg-gray-300 select-bordered w-1/4 max-w-xs text-black"
    >
      <option selected value={"All"}>
        All
      </option>
      <option value={"Checked"}>Checked</option>
      <option value={"Unchecked"}>Unchecked</option>
    </select>
  );
};

export default Filter;
