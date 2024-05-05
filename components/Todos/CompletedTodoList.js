import { Fragment } from 'react';
import CompTodoItem from './CompTodoItem';
import classes from './CompletedTodoList.module.css';


function CompletedTodoList(props) {
  return (
    <Fragment>
      <h3>Completed Todo List</h3>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <CompTodoItem
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

export default CompletedTodoList;
