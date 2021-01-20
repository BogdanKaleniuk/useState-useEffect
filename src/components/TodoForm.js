import React, { useState, useEffect, useRef } from 'react';
//import {reactLocalStorage} from 'reactjs-localstorage';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date: new Date().toLocaleDateString()
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Изменить текст задачи'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Редактировать
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Введите в поле текст задачи'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Добавить
          </button>
        </>
      )}
    </form>
  );
}
/*'Update your item' меняю на Изменить текст задачи*/
/*placeholder='Update your item'*/
/* placeholder='Add a todo'*/ 
/*Add todo <button>*/
/*<button onClick={handleSubmit} className='todo-button edit'> */ 
export default TodoForm;