/* eslint-disable react/prop-types */
import { useState } from "react";

const CreateArea = (props) => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    //   console.log(name, value);
    setData((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(data);
    setData({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div className="flex h-[250px] w-[full] items-center justify-center ">
      <div className="flex flex-col w-[400px] h-[150px] bg-[#F7F7FF] border shadow-lg rounded-lg relative gap-4 border-none">
        <input
          className="bg-[#F7F7FF] p-2 border-none outline-none"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={data.title}
        />
        <input
          className="bg-[#F7F7FF] p-2 border-none outline-none"
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          value={data.content}
        />
        <button
          className="absolute right-[18px] bottom-[-18px] p-3 text-white bg-[#f4bb14] rounded-full hover:opacity-80 hover:text-black"
          onClick={submitNote}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateArea;
