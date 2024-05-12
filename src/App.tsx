import { FC } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
const App: FC = () => {
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center pt-[200px]">
      <h1 className="uppercase text-slate-800 font-bold text-[50px] leading-6">
        Todo list
      </h1>
      <Header></Header>
      <Body></Body>
    </div>
  );
};
export default App;
