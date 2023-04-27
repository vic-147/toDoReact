import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {
  const btnClick = (msj) => {
    alert(msj);
  };

  return (
    <button className="CreateTodoButton" onClick={btnClick}>
      <i className="fa-solid fa-circle-plus fa-sm"></i>
    </button>
  );
}

export { CreateTodoButton };
