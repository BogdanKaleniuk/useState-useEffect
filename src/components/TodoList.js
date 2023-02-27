import React, { useState } from "react";
//import {reactLocalStorage} from 'reactjs-localstorage';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  //const [todos, setTodos] = useState([]);переделываем на
  let [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  //добавляем еще одну функцию
  let setTodosWithSave = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  let addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    let newTodos = [todo, ...todos];

    setTodosWithSave(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodosWithSave(
      todos.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodosWithSave(removedArr);
  };

  let completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodosWithSave(updatedTodos);
  };
  return (
    <>
      <h1>Список дел на сегодня</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
