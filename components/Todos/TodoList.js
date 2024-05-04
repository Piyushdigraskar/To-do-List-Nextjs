import { Fragment } from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';


function TodoList(props) {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todos={todo.todos}
            status={todo.status}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default TodoList;
