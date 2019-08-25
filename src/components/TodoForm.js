import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' className='input' value={value} placeholder='Add a new to-to...' onChange={event => setValue(event.target.value)} />
      </form>
    </div>
  )
}

export default TodoForm;