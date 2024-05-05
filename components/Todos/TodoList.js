import { Fragment } from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';


function TodoList(props) {
  const completedHandler = (id) => {
    console.log(id);
    props.onCompTodo(id); // Call the parent component's handler function with the id
  };
  const DeletedHandler = (id)=>{
    props.onDeleted(id)
  }
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todos={todo.todos}
            status={todo.status}
            onComplete={completedHandler}
            onDelete={DeletedHandler}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default TodoList;
