import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";

const App = () => {
  let data = "";
  const [list, setList] = useState([]);

  let handleAdd = () => {
    if (data.length > 0) {
      setList([...list, data]);
    }
  };
  let handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <section className="w-[600px] mx-auto pt-1">
      <div className="w-[600px] h-[600px] rounded-md bg-bg">
        <div className="pt-[10px] pb-[20px] text-[40px] text-box font-semibold text-center">
          To-Do List
        </div>
        <div className="p-2 relative">
          <input
            type="text"
            className=" text-[30px] font-semibold text-inputtext pl-2 py-[15px] w-full bg-input rounded-md border-none outline-none"
            onChange={(e) => (data = e.target.value)}
            onKeyDown={handleEnter}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 right-[20px]"
            onClick={handleAdd}
          >
            <LuPlus className="text-inputtext text-[50px]" />
          </div>
        </div>

        <div className="p-2">
          {list.map((item) => (
            <p
              key={item}
              className=" w-full bg-box text-[30px] pl-[8px] mb-[10px] rounded-md "
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
