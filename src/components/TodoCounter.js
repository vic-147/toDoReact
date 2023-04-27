import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return <h1 className="tdc">Completaste {completed} de {total} ToDo</h1>;
}

export { TodoCounter };
