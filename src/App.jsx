import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(() => {
    const saveList = localStorage.getItem("todos");
    return saveList ? JSON.parse(saveList) : [];
  });
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <section className="lg:w-[600px] w-[400px] mx-auto lg:pt-1  ">
      <div className="lg:w-[600px] w-[400px] h-fit rounded-md bg-bg">
        <div className="lg:pt-[10px] pt-[6px] lg:pb-[20px] pb-[8px] lg:text-[40px] text-[24px] text-box font-semibold text-center">
          To-Do List
        </div>
        <div className="p-2 relative">
          <input
            type="text"
            value={inputValue}
            className=" lg:text-[30px] text-[20px] font-semibold text-inputtext pl-2 lg:py-[15px] py-[10px] w-full bg-input rounded-md border-none outline-none"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleEnter}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 lg:right-[20px] right-[16px]"
            onClick={handleAdd}
          >
            <LuPlus className="text-inputtext lg:text-[50px] text-[30px]" />
          </div>
        </div>

        {list.map((item, index) => (
          <div key={item} className="relative p-2">
            <p className=" w-full bg-box lg:text-[30px] text-[16px] pl-[8px] lg:py-[10px] py-[8px] rounded-md ">
              {item}
            </p>
            <div
              className="absolute top-1/2 -translate-y-1/2 lg:right-[66px] right-[40px] "
              onClick={() => handleUpdate(item, index)}
            >
              <MdEdit className="text-inputtext lg:text-[32px] text-[20px]" />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 lg:right-[20px] right-[16px]"
              onClick={() => handleDelete(index)}
            >
              <RxCross2 className="text-inputtext lg:text-[38px] text-[20px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;
