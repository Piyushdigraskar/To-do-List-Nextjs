import { Fragment } from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';
import TodoForm from './TodoForm';

function TodoList(props) {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todos={todo.todos}
          />
        ))}
      </ul>
      <TodoForm />
    </Fragment>
  );
}

export default TodoList;
