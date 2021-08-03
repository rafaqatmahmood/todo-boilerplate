import React from "react";
import CreateTodo from "../CreateTodo/CreateTodo";

const Header = () => {
  return (
    <header className="py-20 lg:py-40 bg-cover bg-top bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-700">
      <h1 className="text-4xl lg:text-5xl font-semibold text-center text-white mb-10 lg:mb-16">
        Todo App
      </h1>
      <CreateTodo />
    </header>
  );
};

export default Header;
