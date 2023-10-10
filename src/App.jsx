import { FiPlusCircle } from "react-icons/fi";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const App = () => {
  return (
    <main className="w-screen h-80 bg-cyan-200 border-cyan-400 border-8 flex items-center justify-center flex-col">
      <div>COUNT APP</div>
      <div className="flex items-center justify-center gap-4 flex-col">
        <div className="flex items-center justify-center flex-row gap-2 ">
          <div className="w-12 h-6 bg-yellow-400 flex items-center justify-center">
            Zero
          </div>
          <button className="w-8 h-6 bg-gray-500 flex items-center justify-center">
            <FiPlusCircle></FiPlusCircle>
          </button>
          <button className="w-8 h-6 bg-cyan-500 flex items-center justify-center">
            <AiFillMinusCircle></AiFillMinusCircle>
          </button>
          <button className="w-8 h-6 bg-red-500 flex items-center justify-center">
            <BsFillTrashFill></BsFillTrashFill>
          </button>
        </div>
        <div className="flex items-center justify-center flex-row gap-2">
          <div className="w-12 h-6 bg-yellow-400 flex items-center justify-center">
            Zero
          </div>
          <button className="w-8 h-6 bg-gray-500 flex items-center justify-center">
            <FiPlusCircle></FiPlusCircle>
          </button>
          <button className="w-8 h-6 bg-cyan-500 flex items-center justify-center">
            <AiFillMinusCircle></AiFillMinusCircle>
          </button>
          <button className="w-8 h-6 bg-red-500 flex items-center justify-center">
            <BsFillTrashFill></BsFillTrashFill>
          </button>
        </div>
        <div className="flex items-center justify-center flex-row gap-2">
          <div className="w-12 h-6 bg-yellow-400 flex items-center justify-center">
            Zero
          </div>
          <button className="w-8 h-6 bg-gray-500 flex items-center justify-center">
            <FiPlusCircle></FiPlusCircle>
          </button>
          <button className="w-8 h-6 bg-cyan-500 flex items-center justify-center">
            <AiFillMinusCircle></AiFillMinusCircle>
          </button>
          <button className="w-8 h-6 bg-red-500 flex items-center justify-center">
            <BsFillTrashFill></BsFillTrashFill>
          </button>
        </div>
        <div className="flex items-center justify-center flex-row gap-2">
          <div className="w-12 h-6 bg-yellow-400 flex items-center justify-center">
            Zero
          </div>
          <button className="w-8 h-6 bg-gray-500 flex items-center justify-center">
            <FiPlusCircle></FiPlusCircle>
          </button>
          <button className="w-8 h-6 bg-cyan-500 flex items-center justify-center">
            <AiFillMinusCircle></AiFillMinusCircle>
          </button>
          <button className="w-8 h-6 bg-red-500 flex items-center justify-center">
            <BsFillTrashFill></BsFillTrashFill>
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
