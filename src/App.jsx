import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  let handleAdd = () => {
    if (inputValue.trim() === "") return;

    if (editIndex !== null) {
      const newList = [...list];
      newList[editIndex] = inputValue;
      setList(newList);
      setEditIndex(null);
    } else {
      setList([...list, inputValue]);
    }
    setInputValue("");
  };
  let handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  let handleUpdate = (item, index) => {
    setInputValue(item);
    setEditIndex(index);
  };
  let handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <section className="w-[600px] mx-auto pt-1">
      <div className="w-[600px] h-fit rounded-md bg-bg">
        <div className="pt-[10px] pb-[20px] text-[40px] text-box font-semibold text-center">
          To-Do List
        </div>
        <div className="p-2 relative">
          <input
            type="text"
            value={inputValue}
            className=" text-[30px] font-semibold text-inputtext pl-2 py-[15px] w-full bg-input rounded-md border-none outline-none"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleEnter}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 right-[20px]"
            onClick={handleAdd}
          >
            <LuPlus className="text-inputtext text-[50px]" />
          </div>
        </div>

        {list.map((item, index) => (
          <div key={item} className="relative p-2">
            <p className=" w-full bg-box text-[30px] pl-[8px] py-[10px]  rounded-md ">
              {item}
            </p>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-[60px] "
              onClick={() => handleUpdate(item, index)}
            >
              <LuPlus className="text-inputtext text-[38px]" />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-[20px]"
              onClick={() => handleDelete(index)}
            >
              <RxCross2 className="text-inputtext text-[38px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;
