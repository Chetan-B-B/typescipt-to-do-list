import React from "react";
const Input: React.FC = () => {
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("event");
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className="w-80 h-80 shadow-cyan-500/50 shadow-2xl flex   justify-center items-center  mb-24">
        <form
          action=""
          className="flex  flex-col justify-center items-center"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            className="rounded-3xl outline-none w-64 h-12 text-center"
            placeholder="Add Your Goal! "
            autoComplete="on"
          />
          <button
            className="mt-10 w-24 h-10 rounded-2xl bg-slate-600 text-sky-500	"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
