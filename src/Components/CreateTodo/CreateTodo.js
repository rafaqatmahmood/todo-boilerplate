import React, { useState } from "react";

const CreateTodo = () => {
  const [text, setText] = useState("");

  return (
    <form className="text-center max-w-lg mx-auto flex items-center px-4 md:px-0">
      <input
        type="text"
        placeholder="What to do?"
        className="text-lg focus:outline-none text-gray-700 py-1 px-2 w-full block rounded-lg shadow-xl"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        type="submit"
        className="text-white text-lg w-12 h-10 flex items-center justify-center rounded-ful ml-3 border-2 rounded-full"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default CreateTodo;
