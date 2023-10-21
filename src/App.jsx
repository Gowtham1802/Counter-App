// import { FiPlusCircle } from "react-icons/fi";
// import { AiFillMinusCircle } from "react-icons/ai";
// import { BsFillTrashFill } from "react-icons/bs";

// const App = () => {
//   return (
//     <main className="w-screen h-80 bg-cyan-200 border-cyan-400 border-8 flex items-center justify-center flex-col">
//       <div>COUNT APP</div>
//       <div className="flex items-center justify-center gap-4 flex-col">
//         <div className="flex items-center justify-center flex-row gap-2 ">
//           <div className="w-12 h-6 bg-yellow-400 flex items-center justify-center">
//             Zero
//           </div>
//           <button className="w-8 h-6 bg-gray-500 flex items-center justify-center">
//             <FiPlusCircle></FiPlusCircle>
//           </button>
//           <button className="w-8 h-6 bg-cyan-500 flex items-center justify-center">
//             <AiFillMinusCircle></AiFillMinusCircle>
//           </button>
//           <button className="w-8 h-6 bg-red-500 flex items-center justify-center">
//             <BsFillTrashFill></BsFillTrashFill>
//           </button>
//         </div>
//         <div className="flex items-center justify-center flex-row gap-2">
//           <div className="w-12 h-6 bg-yellow-400 flex items-center justify-center">
//             Zero
//           </div>
//           <button className="w-8 h-6 bg-gray-500 flex items-center justify-center">
//             <FiPlusCircle></FiPlusCircle>
//           </button>
//           <button className="w-8 h-6 bg-cyan-500 flex items-center justify-center">
//             <AiFillMinusCircle></AiFillMinusCircle>
//           </button>
//           <button className="w-8 h-6 bg-red-500 flex items-center justify-center">
//             <BsFillTrashFill></BsFillTrashFill>
//           </button>
//         </div>
//         <div className="flex items-center justify-center flex-row gap-2">
//           <div className="w-12 h-6 bg-yellow-400 flex items-center justify-center">
//             Zero
//           </div>
//           <button className="w-8 h-6 bg-gray-500 flex items-center justify-center">
//             <FiPlusCircle></FiPlusCircle>
//           </button>
//           <button className="w-8 h-6 bg-cyan-500 flex items-center justify-center">
//             <AiFillMinusCircle></AiFillMinusCircle>
//           </button>
//           <button className="w-8 h-6 bg-red-500 flex items-center justify-center">
//             <BsFillTrashFill></BsFillTrashFill>
//           </button>
//         </div>
//         <div className="flex items-center justify-center flex-row gap-2">
//           <div className="w-12 h-6 bg-yellow-400 flex items-center justify-center">
//             Zero
//           </div>
//           <button className="w-8 h-6 bg-gray-500 flex items-center justify-center">
//             <FiPlusCircle></FiPlusCircle>
//           </button>
//           <button className="w-8 h-6 bg-cyan-500 flex items-center justify-center">
//             <AiFillMinusCircle></AiFillMinusCircle>
//           </button>
//           <button className="w-8 h-6 bg-red-500 flex items-center justify-center">
//             <BsFillTrashFill></BsFillTrashFill>
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ImCart } from "react-icons/im";
import { MdRecycling } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./App.css";

// gv
const initialState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];
function App() {
  const [products, setProducts] = useState(initialState);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log(1);
    setCartCount(products.filter((item) => item.value !== 0).length);
  });

  const reset = () => {
    const updated = products.map((item) => ({ ...item, value: 0 }));
    setProducts(updated);
  };

  const restore = () => {
    if (products.length === 0) {
      setProducts(initialState);
    }
  };

  return (
    <div className="main">
      <div className="header">
        <div className="cart">
          <ImCart />
        </div>
        <div className="count">{cartCount}</div> Items
      </div>

      <div className="btn-cont">
        <button className="btn-refresh" onClick={reset}>
          <HiOutlineRefresh />
        </button>
        <button className="btn-recycle" onClick={restore}>
          <MdRecycling />
        </button>
      </div>

      <ul className="cart-items">
        {products.map((ele) => {
          return (
            <ListItem
              key={ele.id}
              ele={ele}
              onClick={(ele) => deleteDataBase(ele.id)}
              setProducts={setProducts}
              products={products}
            />
          );
        })}
      </ul>
    </div>
  );
}

function ListItem({ ele, setProducts, products }) {
  const { id, value } = ele;
  // funct

  const increment = () => {
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          return { ...item, value: item.value + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const decrement = () => {
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          const updatedValue = item.value === 0 ? 0 : item.value - 1;
          return { ...item, value: updatedValue };
        } else {
          return item;
        }
      })
    );
  };

  const deleteDataBase = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <li className="item">
      <p className="item-count">{value == 0 ? "zero" : value}</p>
      <button className="btn-plus" onClick={increment}>
        <AiFillPlusCircle />
      </button>
      <button className="btn-minus" onClick={decrement}>
        <AiFillMinusCircle />
      </button>

      <button className="btn-delete" onClick={() => deleteDataBase(id)}>
        <RiDeleteBin6Line />
      </button>
    </li>
  );
}

export default App;
