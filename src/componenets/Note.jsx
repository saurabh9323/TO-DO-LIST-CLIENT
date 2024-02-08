/* eslint-disable react/prop-types */
const Note = (props) => {
  // console.log("this is :", props.title);
  function handleDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="bg-[#F7F7FF] min-w-[200px] flex flex-col relative flex-wrap text-wrap">
      <h1 className="p-2 flex flex-wrap text-wrap">{props.title}</h1>
      <p className="p-2 flex flex-wrap">{props.content}</p>
      <button
        className="absolute right-[18px] bottom-[-18px] p-2 bg-[#f4bb14] rounded-full hover:opacity-80"
        onClick={handleDelete}
      >
        delete
      </button>
    </div>
  );
};

export default Note;
