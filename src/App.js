import { useCallback, useState } from "react";
import { TodoItem } from './TodoItem'

import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAddTodo = useCallback(() => {
    if (todo.trim().length <= 0) {
      return;
    }

    setTodoList([
      ...todoList,
      todo
    ]);

    setTodo('');
  }, [todo, todoList]);

  const todoItems = todoList.map((todoItem) => {
    const handleDelete = () => {
      const index = todoList.findIndex((e) => e === todoItem)
      if (index !== -1) {
        setTodoList([
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1, todoList.length),
        ])
      }
    }

    return (
      <TodoItem
        handleDelete={handleDelete}
        content={todoItem} />
    )
  })

  return (
    <div className='todo_container'>
      <h1>일정 관리 앱</h1>

      <div className='input_form'>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)} />
        <button onClick={handleAddTodo}>등록</button>
      </div>
      <div className='todo_items'>
        {todoItems}
      </div>
    </div>
  );
}

export default App;
