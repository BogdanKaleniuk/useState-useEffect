import React, { useState, useEffect, useRef } from "react";

function TodoForm(prop) {
  const [input, setInput] = useState(prop.edit ? prop.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    prop.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date: new Date().toLocaleString(),
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {prop.edit ? (
        <>
          <input
            placeholder="Изменить текст задачи"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Редактировать
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Введите в поле текст задачи"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Добавить
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
