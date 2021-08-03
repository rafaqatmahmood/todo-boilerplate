import React from "react";
import Todo from "./Todo/Todo";

const Todos = () => {
  return (
    <div
      className="max-w-lg mx-auto bg-white py-2 shadow-lg rounded-lg transform -translate-y-10 lg:-translate-y-32 overflow-y-scroll px-5"
      style={{ minHeight: "30rem" }}
    >
      <ul>
        <Todo todo={{ text: "Learn React", completed: true }} />
        <Todo todo={{ text: "Build an application", completed: true }} />
        <Todo todo={{ text: "Learn Laravel", completed: false }} />
      </ul>
    </div>
  );
};

export default Todos;
