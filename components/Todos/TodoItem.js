import Card from '../ui/Card';
import classes from './TodoItem.module.css';

function TodoItem(props) {
  function deleteHandler() {
    props.onDelete(props.id)
  }

  function completedItemHandler() {
    props.onComplete(props.id)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
        <button className={classes.checkboxButton} onClick={completedItemHandler} ></button>
          <h3>{props.todos}</h3>
          <button className={classes.actions} onClick={deleteHandler}>delete</button>
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
