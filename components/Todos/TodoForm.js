import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './TodoForm.module.css';

function TodoForm(props) {
  const todosInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTodos = todosInputRef.current.value;

    const todoData = {
      todos: enteredTodos,
      
    };

    props.onAddMeetup(todoData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='todos'>Enter todos: </label>
          <input type='text' required id='todos' ref={todosInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add ToDo</button>
        </div>
      </form>
    </Card>
  );
}

export default TodoForm;
