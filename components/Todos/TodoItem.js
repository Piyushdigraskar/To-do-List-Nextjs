import Card from '../ui/Card';
import classes from './TodoItem.module.css';

function TodoItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
         <h3>{props.todos}</h3>
        </div>
        <div className={classes.actions}>
          <button>delete</button>
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
